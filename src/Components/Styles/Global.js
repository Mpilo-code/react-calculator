import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}



body{
  max-height: 100vh;
  overflow:hidden;
}
`;

export default GlobalStyles;
