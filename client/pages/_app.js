import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";
import { FaMoon, FaSun } from "react-icons/fa";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <div>
          {theme === "light" ? (
            <FaMoon
              onClick={() => {
                setTheme("dark");
              }}
            />
          ) : (
            <FaSun
              onClick={() => {
                setTheme("light");
              }}
            />
          )}
        </div>
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
