import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import StartScreen from './components/Menus/StartScreen';
import Main from './components/Main/Main';
import EndScreen from './components/Menus/EndScreen';

import GlobalStyle from './assets/styles/GlobalStyle';
import Theme from './assets/styles/Theme';
import charManifest from './assets/imageCharManifest';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';

const App = () => {
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [menuActive, setMenuActive] = useState(true);

  const [level, setLevel] = useState('snes');

  const [characters, setCharacters] = useState([]);
  const [charsRemaining, setCharsRemaining] = useState(5);
  const [time, setTime] = useState(0);

  const handleGameStart = () => {
    setGameStart(true);
  };

  // Fn passed as prop to Main to allow updating character state
  const handleTargetFound = (newList) => setCharacters(newList);

  // Handles timer when game is in play
  useEffect(() => {
    if (gameStart && !gameOver) {
      const timer = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [gameStart, gameOver]);

  // Sets correct character list object on level change
  useEffect(() => {
    const thisLevel = charManifest.find((obj) => obj.id === level);
    setCharacters(thisLevel.charList.map((obj) => ({ ...obj, found: false })));
  }, [level]);

  // Updates charRemaining state dependent on character state changes
  useEffect(() => {
    const remaining = characters.filter((chars) => !chars.found).length;
    setCharsRemaining(remaining);
  }, [characters]);

  // Game over state when all characters found
  useEffect(() => {
    if (gameStart && charsRemaining === 0) {
      setGameOver(true);
    }
  }, [gameStart, charsRemaining]);

  const renderContent = () => {
    if (!gameStart && !gameOver) {
      return <StartScreen level={level} handleGameStart={handleGameStart} />;
    }

    if (gameStart) {
      return (
        <EndScreen time={time} level={level} />
        // <Main
        //   gameStart={gameStart}
        //   level={level}
        //   characters={characters}
        //   charsRemaining={charsRemaining}
        //   handleTargetFound={handleTargetFound}
        //   time={time}
        // />
      );
    }
  };

  return (
    <>
      <GlobalStyle />
      <Theme>
        <AppWrapper>
          {renderContent()}
          {/* {!gameStart && !gameOver ? (
            <Start level={level} handleGameStart={handleGameStart} />
          ) : null}
          {gameStart ? (
            <Main
              gameStart={gameStart}
              level={level}
              characters={characters}
              charsRemaining={charsRemaining}
              handleTargetFound={handleTargetFound}
              time={time}
            />
          ) : null} */}
        </AppWrapper>
      </Theme>
    </>
  );
};

const AppWrapper = styled.div``;

export default App;
