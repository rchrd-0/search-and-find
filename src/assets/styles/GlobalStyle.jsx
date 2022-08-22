import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
  display: flex;
  min-height: 100vh;
  font-family: 'Jost', Arial, Helvetica, sans-serif;
  background-color: #3d3d3d;
}

body > #root {
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

`;

export default GlobalStyle;
