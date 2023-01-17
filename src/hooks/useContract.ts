import { Contract } from '@ethersproject/contracts'
import { useWeb3React } from '@web3-react/core'
import contractAddresses from 'config/constants/contractAddresses'

import { useMemo } from 'react'
import { getContract } from 'utils'

// ABIS

import multicallV3Abi from 'config/abi/multicallv3.json'
import ERC20_ABI from 'config/abi/erc20.json'
import ERC20_BYTES32_ABI from 'config/abi/erc20_bytes32.json'
import ENS_ABI from 'config/abi/ens-registrar.json'
import ENS_PUBLIC_RESOLVER_ABI from 'config/abi/ens-public-resolver.json'
import NonfungiblePositionManagerJson from '@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json'
import { Multicallv3 } from 'config/abi/types'
import { Erc20 } from 'config/abi/types/Erc20'
import { Erc20_bytes32 } from 'config/abi/types/Erc20_bytes32'
import { NonfungiblePositionManager } from 'config/abi/types/v3'
import { NONFUNGIBLE_POSITION_MANAGER_ADDRESSES } from 'config/constants/addresses'
import { SupportedChainId } from '@ape.swap/sdk-core'
import { EnsRegistrar } from 'config/abi/types/EnsRegistrar'
import { EnsPublicResolver } from 'config/abi/types/EnsPublicResolver'

const { abi: NFTPositionManagerABI } = NonfungiblePositionManagerJson

// returns null on errors
export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true,
): T | null {
  const { provider, account, chainId } = useWeb3React()

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !provider || !chainId) return null
    let address: string | undefined
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
    else address = addressOrAddressMap[chainId]
    if (!address) return null
    try {
      return getContract(address, ABI, provider, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [addressOrAddressMap, ABI, provider, chainId, withSignerIfPossible, account]) as T
}

export function useInterfaceMulticall() {
  return useContract<Multicallv3>(contractAddresses.mulltiCallV3, multicallV3Abi, false)
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean) {
  return useContract<Erc20>(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract<Erc20_bytes32>(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean) {
  const { chainId } = useWeb3React()
  let address: string | undefined
  if (chainId) {
    // eslint-disable-next-line default-case
    switch (chainId) {
      case SupportedChainId.MAINNET:
        address = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        break
    }
  }
  return useContract<EnsRegistrar>(address, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean) {
  return useContract<EnsPublicResolver>(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export function useV3NFTPositionManagerContract(withSignerIfPossible?: boolean): NonfungiblePositionManager | null {
  return useContract<NonfungiblePositionManager>(
    NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
    NFTPositionManagerABI,
    withSignerIfPossible,
  )
}
