import { Currency, Token } from '@ape.swap/sdk-core'
import CurrencyLogo from 'components/CurrencyLogo'
import { Flex, Text } from 'components/uikit'
import { CSSProperties } from 'theme-ui'

const ListRow = ({
  currency,
  userBalance,
  style,
  onSelect,
}: {
  currency: Currency
  userBalance: string | undefined
  style: CSSProperties
  onSelect: () => void
}) => {
  return (
    <Flex
      sx={{
        ...style,
        padding: '10px 15px 10px 10px',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'white3',
        },
      }}
      onClick={onSelect}
    >
      <Flex sx={{ alignItems: 'center' }}>
        <CurrencyLogo currency={currency} size={35} />
        <Flex sx={{ flexDirection: 'column', ml: '15px' }}>
          <Text weight={600}>{currency.symbol}</Text>
          <Text weight={400} size="12px" sx={{ lineHeight: '12px' }}>
            {currency.name}
          </Text>
        </Flex>
      </Flex>
      <Text weight={600} sx={{ lineHeight: '0px' }}>
        {userBalance}
      </Text>
    </Flex>
  )
}

export default ListRow