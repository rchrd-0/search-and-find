import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  color: {
    psRed: '#df0024',
    softRed: '#FF4766',
    psYellow: '#f2c300',
    psGreen: '#05ac9f',
    psBlue: '#2e6db4',
    gray: '#858585',
    darkGray: '#3d3d3d',

    menuBg: '#262c48',
    menuText: '#d9dee9',

    valid: '#66bcc5',
    undefined: '#ffb74e',
    invalid: '#cc4b72',
  },
  menuShadow:
    'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
  font: {
    display: "'Jost', Helvetica, Arial, sans-serif",
    josefin: "'Josefin Sans', Helvetica, Arial, sans-serif",
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
