import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
  display: flex;
  min-height: 100vh;
  font-family: 'Jost', Arial, Helvetica, sans-serif;
  background-color: #3d3d3d;
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

ul {
  list-style-type: none;
}

button {
  cursor: pointer;
}

/* button {
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 8px;
} */
`;

export default GlobalStyle;
