import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  /* min-height: 100%;
  display: flex;
  overflow-x: hidden; */
  font-family: 'Jost', Arial, Helvetica, sans-serif;
}

/* body {
  display: flex;
} */

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
