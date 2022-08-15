import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
