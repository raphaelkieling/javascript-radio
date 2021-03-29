import { LoginButtonContainer } from "./index.styles";
import { signInWithGoogle, signOut } from "../../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../providers/auth";

function LoginButton() {
  const auth = useContext(AuthContext);

  const handleClick = () => {
    if (!auth.user) {
      return signInWithGoogle();
    }

    signOut();
  };

  return (
    <LoginButtonContainer onClick={handleClick}>
      {auth.user ? auth.user.email : "Login"}
    </LoginButtonContainer>
  );
}

export default LoginButton;
