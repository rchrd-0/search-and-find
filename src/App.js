import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import * as getOffsets from './helpers/getOffsets';

import GlobalStyle from './assets/styles/GlobalStyle';
import Theme from './assets/styles/Theme';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';

function App() {
  const [offset, setOffset] = useState({ x: getOffsets.findX(), y: 0 });

  // Set y axis offset on scroll
  useEffect(() => {
    console.log(offset);
    const setYScroll = () => {
      const offsetY = getOffsets.findY();

      setOffset((prevState) => {
        return {
          ...prevState,
          y: offsetY,
        };
      });
    };

    document.addEventListener('scroll', setYScroll);

    return () => {
      document.removeEventListener('scroll', setYScroll);
    };
  });

  // Set x & y axes offsets on resize
  useEffect(() => {
    const setXYResize = () => {
      const offsetY = getOffsets.findY();
      const offsetX = getOffsets.findX();

      setOffset((prevState) => {
        return {
          ...prevState,
          x: offsetX,
          y: offsetY,
        };
      });
    };

    window.addEventListener('resize', setXYResize);

    return () => {
      window.removeEventListener('resize', setXYResize);
    };
  });

  return (
    <>
      <GlobalStyle />
      <Theme>
        <Header />
        <Main />
      </Theme>
    </>
  );
}

export default App;
