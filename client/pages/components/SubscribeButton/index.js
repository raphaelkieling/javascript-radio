import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import SubscribeCard from "../SubscribeCard";
import { Button, Container, IconContainer } from "./index.styles";

function SubscribeButton() {
  const [active, setActive] = useState(false);

  function toggleButton() {
    setActive(!active);
  }

  return (
    <Container>
      <SubscribeCard active={active} />

      <Button onClick={toggleButton}>
        Subscribe
        <IconContainer>
          <AiOutlineArrowRight />
        </IconContainer>
      </Button>
    </Container>
  );
}

export default SubscribeButton;
