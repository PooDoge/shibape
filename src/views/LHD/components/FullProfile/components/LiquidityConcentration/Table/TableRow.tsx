import React from 'react'
import { BLOCK_EXPLORER } from '../../../../../../../config/constants/chains'
import { LiquidityPool } from '../../../../../../../state/lhd/types'
import { Box } from 'theme-ui'
import { Flex, Svg, Text } from '../../../../../../../components/uikit'
import Image from 'next/image'
import { formatDollar } from '../../../../../../../utils/formatNumbers'
import IconButton from '../../IconButton'
import { desktopMappedColumns, mobileMappedColumns } from './columnsConfig'
import { styles } from './styles'
import { useTranslation } from '../../../../../../../contexts/Localization'
import TokenImage from '../../../../../../../components/TokenImage'

const TableRow = ({ index, pool }: {
  index: number,
  pool: LiquidityPool
}) => {
  const { t } = useTranslation()

  const getBlockExplorerURL = (chain: string, address: string) => {
    // @ts-ignore
    if (BLOCK_EXPLORER[chain]) return `${BLOCK_EXPLORER[chain]}address/${address}`
    return ''
  }
  const tokenLogo1 = pool.baseToken.tokenLogoUrl
  const tokenLogo2 = pool.quoteToken.tokenLogoUrl

  return (
    <Box sx={{ ...styles.rowCont, background: index % 2 ? 'white3' : 'white2' }}>
      <Flex sx={{ ...styles.index, background: index % 2 ? 'white3' : 'white2' }}>
        {index + 1}
      </Flex>
      <Flex sx={{ ...styles.lpNameCol, background: index % 2 ? 'white3' : 'white2' }}>
        <Flex sx={{ position: 'relative', minWidth: ['40px'] }}>
          <Flex sx={styles.imgCont}>
            <TokenImage url={tokenLogo1} size={22} />
          </Flex>
          <Flex sx={{ ...styles.imgCont, position: 'absolute', right: '0px', zIndex: -1 }}>
            <TokenImage url={tokenLogo2} size={22} />
          </Flex>
        </Flex>
        <Text sx={{ ...styles.bodyText, ml: '5px' }}>
          {pool?.baseToken?.symbol.toUpperCase()}-{pool?.quoteToken?.symbol.toUpperCase()}
        </Text>
      </Flex>
      <Flex sx={styles.colCont}>
        {
          pool.isHardAssetPair ? (
            <Text sx={{ ...styles.bodyText, color: 'success' }}>
              {t('Valid')}
            </Text>
          ) : (
            <Text sx={{ ...styles.bodyText, color: 'error' }}>
              {t('Invalid')}
            </Text>
          )
        }
      </Flex>
      <Flex sx={styles.colCont}>
        <Text sx={styles.bodyText}>
          {formatDollar({ num: pool?.pairTotalLiquidityUsd })}
        </Text>
      </Flex>
      <Flex sx={styles.colCont}>
        <Text sx={styles.bodyText}>
          {formatDollar({ num: pool?.pairExtractableLiquidityUsd })}
        </Text>
      </Flex>
      <Flex sx={styles.colCont}>
        <Text sx={styles.bodyText}>
          {pool?.chainId}
        </Text>
      </Flex>
      <Flex sx={styles.colCont}>
        <Text sx={{
          ...styles.bodyText,
          textTransform: 'capitalize',
          display: 'flex',
          overflow: 'hidden',
        }}>
          {pool?.dex === 'apeswap' && (
            <Flex sx={{ mr: '3px' }}>
              <Svg icon='logo' width={15} />
            </Flex>
          )}
          {pool?.dex}
          <Text sx={{ textTransform: 'capitalize', ml: '2px' }}>
            {pool?.tags}
          </Text>
        </Text>
      </Flex>
      <Flex sx={{ ...styles.colCont, justifyContent: 'flex-end' }}>
        <Text sx={{ fontWeight: 500, fontSize: '10px' }}>
          {`${pool?.lpAddress.slice(0, 4)}...${pool?.lpAddress.slice(-4)}`}
        </Text>
        <Flex sx={{ ml: '5px' }} onClick={() => navigator.clipboard.writeText(pool?.lpAddress)}>
          <Svg icon='copy' width={10} />
        </Flex>
        <IconButton href={getBlockExplorerURL(pool.chainId, pool.lpAddress)}
                    icon='filledURL'
                    simpleBtn />
      </Flex>
    </Box>
  )
}

export default TableRow