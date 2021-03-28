import { useContext } from "react";
import { ThemeContext as CustomThemeContext } from "../../providers/theme";
import { FaMoon, FaSun } from "react-icons/fa";
import Switch from "react-switch";
import styled from "styled-components";

const ThemeIconContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

function ThemeSwitcher() {
  const theme = useContext(CustomThemeContext);

  return (
    <>
      <Switch
        onColor="#ad9d24"
        onChange={() => {
          if (theme.isLight) {
            theme.setDarkTheme();
          } else {
            theme.setLightTheme();
          }
        }}
        checked={theme.isLight}
        checkedIcon={
          <ThemeIconContainer>
            <FaMoon style={{ fill: "white" }} />
          </ThemeIconContainer>
        }
        uncheckedIcon={
          <ThemeIconContainer>
            <FaSun />
          </ThemeIconContainer>
        }
      />
    </>
  );
}

export default ThemeSwitcher;
