import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Main from './components/Main/Main';
import Start from './components/Start/Start';

import GlobalStyle from './assets/styles/GlobalStyle';
import Theme from './assets/styles/Theme';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';

const App = () => {
  const [gameStart, setGameStart] = useState(false);
  const [menuActive, setMenuActive] = useState(true);

  const [level, setLevel] = useState('snes');

  const handleGameStart = () => {
    setGameStart(true);
    setMenuActive(false);
  };

  return (
    <>
      <GlobalStyle />
      <Theme>
        <AppWrapper>
          {menuActive ? (
            <Start level={level} handleGameStart={handleGameStart} />
          ) : null}
          {gameStart ? <Main gameStart={gameStart} level={level} /> : null}
        </AppWrapper>
      </Theme>
    </>
  );
};

const AppWrapper = styled.div``;

export default App;
