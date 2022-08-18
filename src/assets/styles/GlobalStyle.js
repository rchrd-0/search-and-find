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

.display-none {
  display: none;
}

.opacity-1 {
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

/* button {
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 8px;
} */
`;

export default GlobalStyle;
