import React from 'react'
import { Flex, Svg, Text } from 'components/uikit'
import { Box } from 'theme-ui'
// import { ZapInput } from '@ape.swap/v2-zap-sdk'
import { useTranslation } from 'contexts/Localization'
import { CurrencyAmount, Token } from '@ape.swap/sdk-core'
import JSBI from 'jsbi'
import CurrencyLogo from 'components/CurrencyLogo'

interface ConvertionPanelProps {
  zap: any //ZapInput
}

const ConvertionPanel: React.FC<ConvertionPanelProps> = ({ zap }) => {
  const { t } = useTranslation()
  const { chainId, currencyIn, currencyOut1, currencyOut2, pairOut } = zap

  // This is the true value out as this is the estimated LP pair values

  const currencyOneOut = pairOut?.inAmount?.token1?.toSignificant(6)
  const currencyTwoOut = pairOut?.inAmount?.token2?.toSignificant(6)

  const halfInputAmount =
    currencyIn?.currency && currencyIn?.inputAmount
      ? CurrencyAmount.fromRawAmount(currencyIn?.currency as Token, currencyIn?.inputAmount)
          .divide(JSBI.BigInt(2))
          .toSignificant(5)
      : null

  return (
    <>
      <Flex sx={{ width: '100%' }}>
        <Text size="12px">{t('Converted to')}:</Text>
      </Flex>
      <Flex sx={{ width: '100%', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
        <Flex sx={{ minWidth: '160px', justifyContent: 'center' }}>
          <Box sx={{ margin: '3px' }}>
            <CurrencyLogo currency={currencyIn?.currency} size={17} />
          </Box>
          <Text size="12px" sx={{ marginRight: '15px' }}>
            {halfInputAmount}
          </Text>
          <Box sx={{ transform: 'rotate(270deg)' }}>
            <Svg color={'primary' as any} icon="arrow" />
          </Box>
          <Box sx={{ margin: '3px' }}>
            <CurrencyLogo currency={currencyOut1?.outputCurrency} size={17} />
          </Box>
          <Text size="12px">{currencyOneOut}</Text>
        </Flex>
        <Flex sx={{ minWidth: '160px', justifyContent: 'center' }}>
          <Box sx={{ margin: '3px' }}>
            <CurrencyLogo currency={currencyIn?.currency} size={17} />
          </Box>
          <Text size="12px" sx={{ marginRight: '15px' }}>
            {halfInputAmount}
          </Text>
          <Box sx={{ transform: 'rotate(270deg)' }}>
            <Svg color={'primary' as any} icon="arrow" />
          </Box>
          <Box sx={{ margin: '3px' }}>
            <CurrencyLogo currency={currencyOut2?.outputCurrency} size={17} />
          </Box>
          <Text size="12px">{currencyTwoOut}</Text>
        </Flex>
      </Flex>
    </>
  )
}

export default React.memo(ConvertionPanel)
