import SubscribeButtonStyle from "./SubscribeButton.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import SubscribeCard from "../SubscribeCard";

function SubscribeButton() {
  const [active, setActive] = useState(false);

  function toggleButton() {
    setActive(!active);
  }

  return (
    <div className={SubscribeButtonStyle.container}>
      <SubscribeCard active={active} />

      <button className={SubscribeButtonStyle.button} onClick={toggleButton}>
        Subscribe
        <div className={SubscribeButtonStyle["icon-container"]}>
          <AiOutlineArrowRight />
        </div>
      </button>
    </div>
  );
}

export default SubscribeButton;
