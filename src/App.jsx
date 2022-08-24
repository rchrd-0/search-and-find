import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import StartScreen from './components/Menus/StartScreen';
import Main from './components/Main/Main';

import GlobalStyle from './assets/styles/GlobalStyle';
import Theme from './assets/styles/Theme';
import getLevelManifest from './assets/levelManifest';
import * as levelSelection from './helpers/levelSelection';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';
import * as firebase from './helpers/firebase';

const App = () => {
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState({ start: null, end: null });
  const [score, setScore] = useState(null);
  const [level, setLevel] = useState('snes');
  const [characters, setCharacters] = useState([]);
  const [charsRemaining, setCharsRemaining] = useState(5);
  const [leaderboard, setLeaderboard] = useState([]);

  const levelManifest = getLevelManifest();

  const handleGameStart = () => {
    setGameStart(true);
    setTime((prevState) => ({ ...prevState, start: Date.now() }));
  };

  const handleGameRestart = () => {
    setGameStart(false);
    setGameOver(false);
    setTime({ start: null, end: null });
    setScore(null);
  };

  const handleSelectNextLevel = () => {
    const next = levelSelection.nextLevel(level);
    setLevel(next);
  };

  const handleSelectPrevLevel = () => {
    const prev = levelSelection.previousLevel(level);
    setLevel(prev);
  };

  // Fn passed as prop to Main to allow updating character state
  const handleTargetFound = (newList) => setCharacters(newList);

  const refreshLeaderboard = async () => {
    const data = await firebase.fetchLeaderboard(level, 10);
    setLeaderboard(data);
  };

  const addScore = (name) => {
    firebase.addNewScore(level, score, name);
    refreshLeaderboard();
  };

  // Sets correct character list object on gameStart
  useEffect(() => {
    const characterList = levelManifest.find(
      (obj) => obj.id === level
    ).charList;

    setCharacters(characterList.map((obj) => ({ ...obj, found: false })));
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

  // Sets score as interval between start and end times on gameOver
  useEffect(() => {
    if (time.end !== null && gameOver) {
      setScore(time.end - time.start);
    }
  }, [time.end, gameOver]);

  // Fetch leaderboard on gameOver or level change; limit 10
  useEffect(() => {
    (async () => {
      const data = await firebase.fetchLeaderboard(level, 10);
      setLeaderboard(data);
    })();
  }, [gameOver, level]);

  const renderContent = () => {
    if (!gameStart && !gameOver) {
      return (
        <StartScreen
          level={level}
          thisLevel={levelManifest.find((obj) => obj.id === level)}
          handleGameStart={handleGameStart}
          nextLevel={handleSelectNextLevel}
          prevLevel={handleSelectPrevLevel}
          leaderboard={leaderboard}
        />
      );
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
          score={score}
          addScore={addScore}
          leaderboard={leaderboard}
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
