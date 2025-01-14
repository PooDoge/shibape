import { SupportedChainId } from '@ape.swap/sdk-core'
import { FACTORY_ADDRESSES } from '@ape.swap/v3-sdk'

type AddressMap = { [chainId: number]: string }

export const BANANA_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
  [SupportedChainId.BSC]: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
  [SupportedChainId.POLYGON]: '0x5d47baba0d66083c52009271faf3f50dcc01023c',
  [SupportedChainId.MAINNET]: '0x92df60c51c710a1b1c20e42d85e221f3a1bfc7f2',
  [SupportedChainId.TLOS]: '0x667fd83e24ca1d935d36717d305d54fa0cac991c',
  [SupportedChainId.ARBITRUM_ONE]: '0xd978F8489e1245568704407a479a71FcCe2aFE8F',
}

export const V2_FACTORY_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xBAe5dc9B19004883d0377419FeF3c2C8832d7d7B',
  [SupportedChainId.POLYGON]: '0xCf083Be4164828f00cAE704EC15a36D711491284',
  [SupportedChainId.POLYGON_MUMBAI]: '0xe145a77c21437e3FD32ce2731833114F0B53405b',
  [SupportedChainId.BSC]: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
  [SupportedChainId.BSC_TESTNET]: '0x152349604d49c2af10adee94b918b051104a143e',
  [SupportedChainId.TLOS]: '0x411172Dfcd5f68307656A1ff35520841C2F7fAec',
  [SupportedChainId.ARBITRUM_ONE]: '0xCf083Be4164828f00cAE704EC15a36D711491284',
}

export const V2_ROUTER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x5f509a3C3F16dF2Fba7bF84dEE1eFbce6BB85587',
  [SupportedChainId.POLYGON]: '0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607',
  [SupportedChainId.POLYGON_MUMBAI]: '0x8fCf4B197A9Df7ab4ed511932cA6c8E1a8fe2F1d',
  [SupportedChainId.BSC]: '0xcf0febd3f17cef5b47b0cd257acf6025c5bff3b7',
  [SupportedChainId.BSC_TESTNET]: '0x3380ae82e39e42ca34ebed69af67faa0683bb5c1',
  [SupportedChainId.TLOS]: '0xb9667Cf9A495A123b0C43B924f6c2244f42817BE',
  [SupportedChainId.ARBITRUM_ONE]: '0x7d13268144adcdbEBDf94F654085CC15502849Ff',
}

export const V3_FACTORY_ADDRESSES = FACTORY_ADDRESSES

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x0927a5abbD02eD73ba83fC93Bd9900B1C2E52348',
  [SupportedChainId.BSC]: '0x0927a5abbD02eD73ba83fC93Bd9900B1C2E52348',
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  [SupportedChainId.POLYGON]: '0x644a417cea95fcad595edb00db170c7bb5cc490d',
  [SupportedChainId.BSC]: '0x87BfcF331c486e04f08070090fc8Cd5296Ad206D',
}

export const QUOTER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x01dadaa586D30d93Ac92C79A5Cb02a8F276a8B4F',
  [SupportedChainId.ARBITRUM_ONE]: '0xC22Db8dDe3A3591fFB02be868Ce2901d30671FE4',
  [SupportedChainId.POLYGON]: '0x639880B3c7ff97fAd516b59c6c282023636322BF',
  [SupportedChainId.BSC]: '0x659D8397fBA7B756dc70063e724032f94a7a40ba',
}

export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC]: '0x9b11bc9fac17c058cab6286b0c785be6a65492ef',
  [SupportedChainId.POLYGON]: '0x9b11bc9fac17c058cab6286b0c785be6a65492ef',
  [SupportedChainId.MAINNET]: '0x9b11bc9fac17c058cab6286b0c785be6a65492ef',
  [SupportedChainId.TLOS]: '0x9b11bc9fac17c058cab6286b0c785be6a65492ef',
  [SupportedChainId.ARBITRUM_ONE]: '0x9b11bc9FAc17c058CAB6286b0c785bE6a65492EF',
}

export const PRICE_GETTER_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC_TESTNET]: '0x85d2C626E28a42E184cF8e32db1461013D23331D',
  [SupportedChainId.BSC]: '0x945b9E730f35046c5bf24117478D651999377831',
  [SupportedChainId.POLYGON]: '0x241ebA867Bee0Dd50a8Ca54732A6C05815C50Cc5',
  [SupportedChainId.MAINNET]: '0xaFa3cb0CC2c83f81e6389f3A2229cfdc1F8420Dd',
  [SupportedChainId.TLOS]: '0x85d2C626E28a42E184cF8e32db1461013D23331D',
  [SupportedChainId.ARBITRUM_ONE]: '0x1669Bb96A9a7eD0eB23B47AD61360d648A5Dade7',
}

export const MULTICALL: AddressMap = {
  [SupportedChainId.BSC]: '0x47A307e3167820daf22a377D777371753758f59c',
  [SupportedChainId.BSC_TESTNET]: '',
  [SupportedChainId.POLYGON]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [SupportedChainId.POLYGON_MUMBAI]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [SupportedChainId.MAINNET]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [SupportedChainId.TLOS]: '0xf553b2be7aac670bcd812ba64a5025d9f5095ab5',
  [SupportedChainId.ARBITRUM_ONE]: '0xC169b45E7A157Fe3fa248673576bcadcaFd8757B',
}

export const MULTICALL_V2: AddressMap = {
  [SupportedChainId.BSC]: '0x38ce767d81de3940CFa5020B55af1A400ED4F657',
  [SupportedChainId.BSC_TESTNET]: '0x67ADCB4dF3931b0C5Da724058ADC2174a9844412',
  [SupportedChainId.POLYGON]: '0x95028E5B8a734bb7E2071F96De89BABe75be9C8E',
  [SupportedChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [SupportedChainId.TLOS]: '0xa1a283f10f578201a97a8f69d8c15828b778f04b',
  [SupportedChainId.ARBITRUM_ONE]: '0x089d8780e1c0789d0ef786bf001bee52d8351cad',
}

export const GNANA_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC]: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
  [SupportedChainId.BSC_TESTNET]: '0x9407026d236DEAE22CC1F3c419A9e47CBfCFE9E5',
}

export const TREASURY_ADDRESSES: AddressMap = {
  [SupportedChainId.BSC]: '0xec4b9d1fd8A3534E31fcE1636c7479BcD29213aE',
  [SupportedChainId.BSC_TESTNET]: '0xbC5ed0829365a0d5bc3A4956A6A0549aE17f41Ab',
}

export const MASTER_CHEF_V1_ADDRESS: AddressMap = {
  [SupportedChainId.BSC_TESTNET]: '0xbbC5e1cD3BA8ED639b00927115e5f0e0040aA613',
  [SupportedChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
}
export const MASTER_CHEF_V2_ADDRESS: AddressMap = {
  [SupportedChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
}
export const MINI_APE_ADDRESS: AddressMap = {
  [SupportedChainId.BSC]: '',
  [SupportedChainId.BSC_TESTNET]: '',
  [SupportedChainId.POLYGON]: '0x54aff400858Dcac39797a81894D9920f16972D1D',
}
export const SOUS_CHEF_ADDRESS: AddressMap = {
  [SupportedChainId.BSC_TESTNET]: '0xAf1B22cBDbB502B2089885bcd230255f8B80243b',
  [SupportedChainId.BSC]: '0x54aff400858Dcac39797a81894D9920f16972D1D',
}
export const MASTER_CHEF: AddressMap = {
  [SupportedChainId.BSC_TESTNET]: '0xbbC5e1cD3BA8ED639b00927115e5f0e0040aA613',
  [SupportedChainId.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
}
export const MASTER_CHEF_V2: AddressMap = {
  [SupportedChainId.BSC]: '0x71354AC3c695dfB1d3f595AfA5D4364e9e06339B',
}
