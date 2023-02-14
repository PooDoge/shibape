import { SupportedChainId } from '@ape.swap/sdk-core'
import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from '@ape.swap/v3-sdk'

type AddressMap = { [chainId: number]: string }

export const BANANA_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
  [SupportedChainId.BSC]: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
  [SupportedChainId.POLYGON]: '0x5d47baba0d66083c52009271faf3f50dcc01023c',
  [SupportedChainId.MAINNET]: '0x92df60c51c710a1b1c20e42d85e221f3a1bfc7f2',
  [SupportedChainId.TLOS]: '0x667fd83e24ca1d935d36717d305d54fa0cac991c',
}

// TODO: Change this to actual addresses
export const V2_FACTORY_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC_TESTNET]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [SupportedChainId.BSC]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [SupportedChainId.POLYGON]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [SupportedChainId.MAINNET]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [SupportedChainId.TLOS]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
}

// TODO: Change this to actual addresses
export const V3_FACTORY_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC_TESTNET]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [SupportedChainId.BSC]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [SupportedChainId.POLYGON]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [SupportedChainId.MAINNET]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  [SupportedChainId.TLOS]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  [SupportedChainId.POLYGON]: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
  [SupportedChainId.POLYGON]: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
}

export const QUOTER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
  [SupportedChainId.POLYGON]: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
}
