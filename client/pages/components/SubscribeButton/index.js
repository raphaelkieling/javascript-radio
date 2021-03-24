import SubscribeButtonStyle from "./SubscribeButton.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function SubscribeButton() {
  return (
    <div className={SubscribeButtonStyle.container}>
      <button className={SubscribeButtonStyle.button}>
        Subscribe
        <div className={SubscribeButtonStyle["icon-container"]}>
          <AiOutlineArrowRight />
        </div>
      </button>
    </div>
  );
}

export default SubscribeButton;
