import { createGlobalStyle, ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";
import { theme } from "./styles/theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
