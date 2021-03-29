import LoginButton from "../LoginButton";
import ThemeSwitcher from "../ThemeSwitcher";
import { HeaderContainer } from "./index.styles";

function Header() {
  return (
    <HeaderContainer>
      <ThemeSwitcher />
      <LoginButton />
    </HeaderContainer>
  );
}

export default Header;
