import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import StartScreen from './components/Menus/StartScreen';
import Main from './components/Main/Main';

import GlobalStyle from './assets/styles/GlobalStyle';
import Theme from './assets/styles/Theme';
import charManifest from './assets/imageCharManifest';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';

const App = () => {
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState({ start: 0, end: 0 });
  const [level, setLevel] = useState('snes');
  const [characters, setCharacters] = useState([]);
  const [charsRemaining, setCharsRemaining] = useState(5);

  const handleGameStart = () => {
    setGameStart(true);
    setTime((prevState) => ({ ...prevState, start: Date.now() }));
  };

  const handleGameRestart = () => {
    setGameStart(false);
    setGameOver(false);
    setTime({ start: 0, end: 0 });
  };

  // Fn passed as prop to Main to allow updating character state
  const handleTargetFound = (newList) => setCharacters(newList);

  // Sets correct character list object on gameStart
  useEffect(() => {
    const thisLevel = charManifest.find((obj) => obj.id === level);
    setCharacters(
      thisLevel.charList.map((obj) => ({ ...obj, found: false, foundTime: 0 }))
    );
  }, [gameStart]);

  // Updates charRemaining state dependent on character state changes
  useEffect(() => {
    const remaining = characters.filter((chars) => !chars.found).length;
    setCharsRemaining(remaining);
  }, [characters]);

  // Game over state when all characters found
  useEffect(() => {
    if (gameStart && charsRemaining === 0) {
      setGameOver(true);
      setTime((prevState) => ({ ...prevState, end: Date.now() }));
    }
  }, [gameStart, charsRemaining]);

  const renderContent = () => {
    if (!gameStart && !gameOver) {
      return <StartScreen level={level} handleGameStart={handleGameStart} />;
    }

    if (gameStart) {
      return (
        <Main
          gameStart={gameStart}
          gameOver={gameOver}
          level={level}
          characters={characters}
          charsRemaining={charsRemaining}
          handleTargetFound={handleTargetFound}
          handleGameRestart={handleGameRestart}
          time={time}
        />
      );
    }
  };

  return (
    <>
      <GlobalStyle />
      <Theme>
        <AppWrapper>{renderContent()}</AppWrapper>
      </Theme>
    </>
  );
};

const AppWrapper = styled.div``;

export default App;
