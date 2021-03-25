import Logo from "../Logo";
import SubscribeButton from "../SubscribeButton";
import HeaderStyle from "./Header.module.css";

function Header() {
  return (
    <header className={HeaderStyle["header-container"]}>
      <div className={HeaderStyle.container}>
        <div className={HeaderStyle["brand-container"]}>
          <Logo />
          <div className={HeaderStyle.brand}>script Radio</div>
        </div>

        <div className={HeaderStyle.description}>
          Join the Javascript ecosystem. We craw and take the of the Javascript
          world.
          <div>
            <SubscribeButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
