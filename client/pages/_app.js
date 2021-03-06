import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";
import AuthProvider from "./providers/auth";
import CustomThemeProvider, {
  ThemeContext as CustomThemeContext,
} from "./providers/theme";

function PageWrapper({ Component, pageProps }) {
  const theme = useContext(CustomThemeContext);

  return (
    <ThemeProvider theme={theme.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <AuthProvider>
        <PageWrapper Component={Component} pageProps={pageProps} />
      </AuthProvider>
    </CustomThemeProvider>
  );
}

export default MyApp;
