import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import * as cursorOffset from './helpers/cursorOffset';

import GlobalStyle from './assets/styles/GlobalStyle';
import Theme from './assets/styles/Theme';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';

function App() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Set offsets on mount
  useEffect(() => {
    const offsetY = cursorOffset.findY();
    const offsetX = cursorOffset.findX();
    setOffset((prevState) => {
      return {
        ...prevState,
        x: offsetX,
        y: offsetY,
      };
    });
  }, []);

  // Set y axis offset on scroll
  useEffect(() => {
    const setYScroll = () => {
      const offsetY = cursorOffset.findY();

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
      const offsetY = cursorOffset.findY();
      const offsetX = cursorOffset.findX();

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
        <Main offset={offset} />
      </Theme>
    </>
  );
}

export default App;
