import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  color: {
    psRed: '#df0024',
    psYellow: '#f2c300',
    psGreen: '#05ac9f',
    psBlue: '#2e6db4',
    gray: '#858585',
    darkGray: '#3d3d3d',
  },
  font: {
    display: "'Jost', Helvetica, Arial, sans-serif",
    mono: "'Roboto Mono', Courier New, Courier, monospace",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
