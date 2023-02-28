import { Flex, Modal, Text } from 'components/uikit'
import {
  useClientSideRouter,
  useExpertModeManager,
  useFlipV3LayoutManager,
  useIsExpertMode,
  useUserHideClosedPositions,
} from 'state/user/hooks'
import { Switch } from 'theme-ui'

const DexSettings = () => {
  const [expertMode, setExpertMode] = useExpertModeManager()
  const [hideClosedPositions, setHideClosedPositions] = useUserHideClosedPositions()
  const [clientSideRouter, setClientSideRouter] = useClientSideRouter()
  const [flipV3Layout, setFlipV3Layout] = useFlipV3LayoutManager()
  return (
    <Modal title="Settings" minWidth="300px" maxWidth="95%">
      <Flex sx={{ maxWidth: '100%', width: '380px', flexDirection: 'column' }}>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: '5px 0px' }}>
          <Text> Hide Closed Positions </Text>
          <Flex>
            <Switch onChange={setHideClosedPositions} checked={hideClosedPositions} />
          </Flex>
        </Flex>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: '5px 0px' }}>
          <Text> Auto Router API </Text>
          <Flex>
            <Switch onChange={setClientSideRouter} checked={!clientSideRouter} />
          </Flex>
        </Flex>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: '5px 0px' }}>
          <Text> Expert Mode </Text>
          <Flex>
            <Switch onChange={setExpertMode} checked={expertMode} />
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
