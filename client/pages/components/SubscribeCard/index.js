import { AiOutlineClose } from "react-icons/ai";
import {
  ContainerClose,
  DialogContainer,
  ModalContainer,
  Overlayer,
} from "./index.styles";

function SubscribeCard({ active }) {
  return (
    active && (
      <div>
        <Overlayer />
        <DialogContainer open={active}>
          <ModalContainer>
            <ContainerClose>
              <AiOutlineClose />
            </ContainerClose>
            <div>lorem</div>
          </ModalContainer>
        </DialogContainer>
      </div>
    )
  );
}

export default SubscribeCard;
