import { AiOutlineClose } from "react-icons/ai";
import SubscribeCardStyle from "./SubscribeCard.module.css";

function SubscribeCard({ active }) {
  return (
    active && (
      <div>
        <div className={SubscribeCardStyle["overlayer"]}></div>
        <dialog
          open={active}
          className={SubscribeCardStyle["dialog-container"]}
        >
          <div className={SubscribeCardStyle["modal-container"]}>
            <div className={SubscribeCardStyle["container-close"]}>
              <AiOutlineClose />
            </div>
            <div>
              lorem
            </div>
          </div>
        </dialog>
      </div>
    )
  );
}

export default SubscribeCard;
