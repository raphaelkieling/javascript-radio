import Logo from "../Logo";
import SubscribeButton from "../SubscribeButton";
import {
  Brand,
  BrandContainer,
  Container,
  Description,
  HeaderContainer,
} from "./index.styles";

function Banner() {
  return (
    <HeaderContainer>
      <Container>
        <BrandContainer>
          <Logo />
          <Brand>script Radio</Brand>
        </BrandContainer>

        <Description>
          Join the Javascript ecosystem. We craw and take the of the Javascript
          world.
          <div>
            <SubscribeButton />
          </div>
        </Description>
      </Container>
    </HeaderContainer>
  );
}

export default Banner;
