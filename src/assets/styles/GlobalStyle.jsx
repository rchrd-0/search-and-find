import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Jost', Arial, Helvetica, sans-serif;
  background-color: #3d3d3d;
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

button:focus {
  outline: none;
}

`;

export default GlobalStyle;
