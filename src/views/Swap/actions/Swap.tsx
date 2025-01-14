import { useWeb3React } from '@web3-react/core'
import { Button } from 'components/uikit'
import useModal from 'hooks/useModal'
import { WrapErrorText, WrapInputError, WrapType } from 'hooks/useWrapCallback'
import { useCallback, useState } from 'react'
import { TradeState } from 'state/routing/types'
import ConfirmSwap from '../components/ConfirmSwap'
import { useRouter } from 'next/router'
import { useHideCircular } from 'hooks/useHideCircular'
import { Route } from '@lifi/sdk'
import { useSwapCallback } from 'hooks/useSwapCallback'
import track from 'utils/track'
import { getTxHashFromRoute, humanOutputAmount } from '../utils'
import useTransactionDeadline from 'hooks/useTransactionDeadline'
import { ApprovalState, useApproveCallbackFromTrade } from 'hooks/useApproveCallback'
import { useERC20PermitFromTrade } from 'hooks/useERC20Permit'
import { Currency, CurrencyAmount, TradeType } from '@ape.swap/sdk-core'
import Approval from './Approval'
import { TransactionType } from 'state/transactions/types'
import { useAddTxFromHash } from 'state/transactions/hooks'
import { parseCurrency } from 'config/constants/lifiRouting'

const Swap = ({
                routingState,
                selectedRoute,
                wrapType,
                showWrap,
                wrapInputError,
                onWrap,
                inputError,
                inputCurrencyAmount,
                feeStructure,
              }: {
  routingState?: TradeState
  selectedRoute: Route | undefined
  showWrap: boolean | undefined
  wrapInputError: WrapInputError | undefined
  wrapType: WrapType | undefined
  onWrap: (() => Promise<void>) | undefined
  inputError?: string
  inputCurrencyAmount: CurrencyAmount<Currency> | undefined
  feeStructure: {
    fee: number
    tier: string
  }
}) => {
  const { chainId } = useWeb3React()
  const [{ swapErrorMessage, attemptingTxn, txHash }, setSwapState] = useState<{
    attemptingTxn: boolean
    swapErrorMessage: string | undefined
    txHash: string | undefined
  }>({
    attemptingTxn: false,
    swapErrorMessage: undefined,
    txHash: undefined,
  })

  const transactionDeadline = useTransactionDeadline()
  const [approvalState, approveCallback] = useApproveCallbackFromTrade(inputCurrencyAmount)

  const {
    state: signatureState,
    gatherPermitSignature,
  } = useERC20PermitFromTrade(inputCurrencyAmount, transactionDeadline)

  const showApproveFlow =
    (!inputError && approvalState === ApprovalState.NOT_APPROVED) || approvalState === ApprovalState.PENDING

  const router = useRouter()
  const hideCircular = useHideCircular()
  const addTransaction = useAddTxFromHash()

  const handleConfirmDismiss = useCallback(() => {
    setSwapState({
      attemptingTxn: false,
      swapErrorMessage: undefined,
      txHash: undefined,
    })
  }, [])

  const callback = useSwapCallback(selectedRoute)

  const handleSwap = useCallback(() => {
    if (!callback || !selectedRoute) return
    setSwapState({ attemptingTxn: true, swapErrorMessage: undefined, txHash: undefined })
    callback()
      .then((res) => {
        const txHash = getTxHashFromRoute(res)
        setSwapState({
          attemptingTxn: false,
          swapErrorMessage: undefined,
          txHash,
        })
        if (!res) return
        addTransaction(
          getTxHashFromRoute(res),
          {
            type: TransactionType.SWAP,
            tradeType: TradeType.EXACT_INPUT,
            inputCurrencyId: parseCurrency(selectedRoute.fromToken.address),
            inputCurrencyAmountRaw: selectedRoute.fromAmount,
            expectedOutputCurrencyAmountRaw: selectedRoute.toAmount,
            outputCurrencyId: parseCurrency(selectedRoute.toToken.address),
            minimumOutputCurrencyAmountRaw: selectedRoute.toAmountMin,
          })
        track({
          event: 'Swap',
          chain: chainId,
          data: {
            inputToken: res?.fromToken.symbol,
            outputToken: res?.toToken.symbol,
            inputValue: humanOutputAmount(res?.fromAmount, res?.fromToken?.decimals),
            outputValue: humanOutputAmount(res?.toAmount, res?.toToken?.decimals),
            inputUsdValue: res?.fromAmountUSD,
            outputUsdValue: res?.toAmountUSD,
            fee: feeStructure.fee,
            feeTier: feeStructure.tier,
          },
        })
        if (res.toToken.symbol?.toUpperCase() === 'BANANA' && !hideCircular) router.push('?modal=circular-buy')
      })
      .catch((error) => {
        setSwapState({
          attemptingTxn: false,
          swapErrorMessage: error.message ? error.message : error,
          txHash: undefined,
        })
      })
  }, [addTransaction, callback, chainId, feeStructure.fee, feeStructure.tier, hideCircular, router, selectedRoute])

  const [onPresentConfirmModal] = useModal(
    <ConfirmSwap
      selectedRoute={selectedRoute!}
      attemptingTxn={attemptingTxn}
      txHash={txHash}
      onConfirm={handleSwap}
      swapErrorMessage={swapErrorMessage}
      onDismiss={handleConfirmDismiss}
      fee={feeStructure.fee}
    />,
    true,
    true,
    'swapConfirmModal',
  )

  const handleConfirmSwap = () => {
    //if (chainId === SupportedChainId.BSC && selectedRoute?.fromToken?.symbol?.toLowerCase() === 'banana' && !hideCircular) router.push('?modal=circular-sell')
    onPresentConfirmModal()
  }

  return (
    (inputError || routingState === TradeState.NO_ROUTE_FOUND) && !showWrap ? (
      <Button fullWidth disabled>
        {routingState === TradeState.NO_ROUTE_FOUND ? 'No Route Found' : inputError}
      </Button>
    ) : showApproveFlow ? (
      <Approval
        signatureState={signatureState}
        approvalState={approvalState}
        gatherPermitSignature={gatherPermitSignature}
        approveCallback={approveCallback}
      />
    ) : showWrap ? (
      <Button disabled={Boolean(wrapInputError)} onClick={onWrap} fullWidth>
        {wrapInputError ? (
          <WrapErrorText wrapInputError={wrapInputError} />
        ) : wrapType === WrapType.WRAP ? (
          <>Wrap</>
        ) : wrapType === WrapType.UNWRAP ? (
          <>Unwrap</>
        ) : null}
      </Button>
    ) : (
      <Button
        fullWidth
        onClick={handleConfirmSwap}
        disabled={
          routingState === TradeState.LOADING ||
          routingState === TradeState.SYNCING ||
          routingState === TradeState.INVALID ||
          routingState === TradeState.NO_ROUTE_FOUND
        }
      >
        Swap
      </Button>
    ))
}

export default Swap
