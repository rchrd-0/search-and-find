import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Main from './components/Main/Main';
import Start from './components/Start/Start';

import GlobalStyle from './assets/styles/GlobalStyle';
import Theme from './assets/styles/Theme';
import charManifest from './assets/imageCharManifest';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';

const App = () => {
  const [gameStart, setGameStart] = useState(false);
  const [menuActive, setMenuActive] = useState(true);

  const [level, setLevel] = useState('snes');

  const [characters, setCharacters] = useState([]);
  const [charsRemaining, setCharsRemaining] = useState(0);

  const handleGameStart = () => {
    setGameStart(true);
  };

  // Fn passed as prop to Main to allow changing character state
  const handleTargetFound = (newList) => setCharacters(newList);

  // Sets correct character list on gameStart
  useEffect(() => {
    if (gameStart) {
      const thisLevel = charManifest.find((obj) => obj.id === level);
      setCharacters(
        thisLevel.charList.map((obj) => ({ ...obj, found: false }))
      );
    }
  }, [gameStart, level]);

  // Updates charRemaining state dependent on character state changes
  useEffect(() => {
    const remaining = characters.filter((chars) => !chars.found).length;
    setCharsRemaining(remaining);
  }, [characters]);

  return (
    <>
      <GlobalStyle />
      <Theme>
        <AppWrapper>
          {!gameStart ? (
            <Start level={level} handleGameStart={handleGameStart} />
          ) : null}
          {gameStart ? (
            <Main
              gameStart={gameStart}
              level={level}
              characters={characters}
              charsRemaining={charsRemaining}
              handleTargetFound={handleTargetFound}
            />
          ) : null}
        </AppWrapper>
      </Theme>
    </>
  );
};

const AppWrapper = styled.div``;

export default App;
