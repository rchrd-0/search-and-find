import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* html {
  font-family: 'Jost', Arial, Helvetica, sans-serif;
} */

body {
  display: flex;
  min-height: 100vh;
  font-family: 'Jost', Arial, Helvetica, sans-serif;
}

body > #root {
  flex: 1;
}

a,
a:visited {
  text-decoration: none;
  color: inherit; 
  user-select: none;
}

/* button {
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 8px;
} */
`;

export default GlobalStyle;
