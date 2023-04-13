import sousChefABI from 'config/abi/sousChef.json'
import bananaABI from 'config/abi/banana.json'
import masterchefV2ABI from 'config/abi/masterChefV2.json'
import { chunk } from 'lodash'
import multicall from 'utils/multicall'
import fetchPoolCalls, { fetchBananaPoolCall } from './fetchPoolCalls'
import cleanPoolData from './cleanPoolData'
import { BigNumber, ethers } from 'ethers'
import { TokenPrices } from 'hooks/useAllTokenPrices'
import { Pool } from './types'

export const BLOCKS_PER_YEAR = BigNumber.from(10512000)
export const BSC_BLOCK_TIME = 3

const fetchPools = async (chainId: number, tokenPrices: TokenPrices[], poolsConfig: Pool[]) => {
  const poolIds: number[] = []
  const poolCalls = poolsConfig.flatMap((pool) => {
    poolIds.push(pool.sousId)
    return fetchPoolCalls(pool, chainId)
  })
  const bananaPoolCalls = fetchBananaPoolCall(chainId)
  const vals = await multicall(chainId, [...sousChefABI, ...bananaABI], poolCalls)
  const [bananaPoolVals, totalAlloc, bananaPerSecond] = await multicall(chainId, masterchefV2ABI, bananaPoolCalls)
  // We do not want the block time for the banana earn banana pool so we append two null values to keep the chunks even
  // First null values is for Master Ape V2 and second is Master Ape V1
  const formattedVals = [null, null, bananaPoolVals?.totalStaked._hex, null, null, ...vals.slice(1)]
  const chunkSize = formattedVals.length / poolsConfig.length
  const bananaAlloc = bananaPoolVals?.allocPoint._hex
  const poolWeight = BigNumber.from(bananaAlloc).div(BigNumber.from(totalAlloc))
  const chunkedPools = chunk(formattedVals, chunkSize)
  const bananaPerYear = BigNumber.from(ethers.utils.formatEther(bananaPerSecond.toString()))
    .mul(BSC_BLOCK_TIME)
    .mul(BLOCKS_PER_YEAR)
  return cleanPoolData(poolIds, chunkedPools, tokenPrices, chainId, poolsConfig, poolWeight, bananaPerYear)
}

export default fetchPools
