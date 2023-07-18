import { Flex, Modal, Text } from 'components/uikit'
import {
  useFlipV3LayoutManager,
  useUserHideClosedPositions,
} from 'state/user/hooks'
import { Switch } from 'theme-ui'
import TransactionDetails from './TransactionDetails'

const DexSettings = () => {
  const [hideClosedPositions, setHideClosedPositions] = useUserHideClosedPositions()
  const [flipV3Layout, setFlipV3Layout] = useFlipV3LayoutManager()

  return (
    <Modal title="Settings" sx={{ maxWidth: '420px', minWidth: ['95%', '330px'] }}>
      <Flex sx={{ maxWidth: '100%', width: '380px', flexDirection: 'column' }}>
        <TransactionDetails />
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: '5px 0px' }}>
          <Text> Hide Closed Positions </Text>
          <Flex>
            <Switch onChange={setHideClosedPositions} checked={hideClosedPositions} />
          </Flex>
        </Flex>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: '5px 0px' }}>
          <Text> Flip V3 Layout </Text>
          <Flex>
            <Switch onChange={setFlipV3Layout} checked={flipV3Layout} />
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  )
}

export default DexSettings
