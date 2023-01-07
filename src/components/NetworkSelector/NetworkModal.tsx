import { ChainId } from "@ape.swap/sdk";
import { Button, Flex, Modal, Svg, Text } from "components/uikit";
import {
  MAINNET_CHAINS,
  NETWORK_ICONS,
  NETWORK_LABEL,
} from "config/constants/chains";
import useSelectChain from "hooks/useSelectChain";

const NetworkModal = ({ onDismiss }: { onDismiss: () => void }) => {
  const selectChain = useSelectChain();
  return (
    <Modal
      maxWidth="400px"
      minWidth="350px"
      title="Network"
      onDismiss={onDismiss}
    >
      <Flex sx={{ flexDirection: "column" }}>
        {MAINNET_CHAINS.map((chainId: ChainId) => {
          return (
            <Button
              fullWidth
              variant="tertiary"
              key={chainId}
              sx={{
                margin: "3.5px 0px",
                height: "45px",
                alignItems: "center",
                justifyContent: "center",
                background: "white4",
              }}
              onClick={() => {
                selectChain(chainId);
                onDismiss();
              }}
            >
              <Flex
                sx={{
                  width: "fit-content",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Svg icon={NETWORK_ICONS[chainId]} width="27.5px" />
                <Text
                  weight="normal"
                  size="15px"
                  ml="10px"
                  sx={{ lineHeight: "0px" }}
                >
                  {NETWORK_LABEL[chainId]}
                </Text>
              </Flex>
            </Button>
          );
        })}
      </Flex>
    </Modal>
  );
};

export default NetworkModal;