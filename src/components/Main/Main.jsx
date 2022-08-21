import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as firebase from '../../helpers/firebase';

import EndScreen from '../Menus/EndScreen';
import Header from '../Header/Header';
import Dropdown from '../Header/Dropdown';
import Snackbar from './Snackbar';
import ContextMenu from './ContextMenu';
import Target from './Target';
import TargetFound from './TargetFound';
import Image from './Image';

import * as cursorOffset from '../../helpers/cursorOffset';
import cursor64 from '../../assets/icons/cursor64.svg';
import * as checkGame from '../../helpers/checkGame';

const Main = (props) => {
  const {
    level,
    characters,
    charsRemaining,
    handleTargetFound,
    handleGameRestart,
    gameStart,
    gameOver,
    time,
    addScore,
  } = props;

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [menu, setMenu] = useState({ x: 0, y: 0, margin: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [contextActive, setContextActive] = useState(false);
  const [snackbarActive, setSnackbarActive] = useState(false);
  const [snackbar, setSnackbar] = useState({
    char: '',
    success: false,
  });
  const [dropdown, setDropdown] = useState(false);

  const mainRef = useRef();

  const handleMainClick = (e) => {
    const { pageX, pageY } = e;

    console.log(
      pageX / mainRef.current.offsetWidth,
      pageY / mainRef.current.offsetHeight
    );

    setCursor({
      x: pageX / mainRef.current.offsetWidth,
      y: pageY / mainRef.current.offsetHeight,
    });
  };

  const handleContextMenuClick = async (id) => {
    const characterCoord = await firebase.fetchTarget(id, level);
    const result = checkGame.isInRange(cursor, characterCoord);
    if (result) {
      const { name } = characters.find((char) => char.id === id);

      const updatedCharacters = characters.map((char) => {
        if (char.id === id) {
          return {
            ...char,
            found: true,
            x: characterCoord.x,
            y: characterCoord.y,
          };
        }

        return char;
      });

      handleTargetFound(updatedCharacters);

      setSnackbar({ char: name, success: true });
    } else {
      setSnackbar({ char: '', success: false });
    }

    setSnackbarActive(true);
    setContextActive(false);
  };

  const toggleDropdown = () => setDropdown((prevState) => !prevState);

  // Determines target & context menu placement on cursor state change
  useEffect(() => {
    const { offsetWidth, offsetHeight } = mainRef.current;
    const relativeToHeader = cursorOffset.getHeaderRelative(offsetHeight);

    setMenu({
      x: cursor.x * 100,
      y: cursor.y * 100 - relativeToHeader,
      margin: cursorOffset.getMenuMargin(offsetWidth, cursor.x),
    });

    setTarget({
      x: cursor.x * 100,
      y: cursor.y * 100 - relativeToHeader,
    });

    setContextActive((prevState) => !prevState);
  }, [cursor]);

  // Snackbar fades out after 2.5s
  useEffect(() => {
    if (snackbarActive) {
      const timeout = setTimeout(() => {
        setSnackbarActive(false);
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [snackbar, snackbarActive]);

  return (
    <>
      {gameOver ? (
        <EndScreen
          level={level}
          handleGameRestart={handleGameRestart}
          time={time}
          addScore={addScore}
        />
      ) : null}
      <StyledMain>
        <Header
          characters={characters}
          charsRemaining={charsRemaining}
          toggleDropdown={toggleDropdown}
          dropdown={dropdown}
          gameStart={gameStart}
          gameOver={gameOver}
          handleGameRestart={handleGameRestart}
        />
        <Dropdown characters={characters} active={dropdown} />
        <Snackbar content={snackbar} active={snackbarActive} />
        <GameWrapper>
          {contextActive ? (
            <ContextMenu
              menu={menu}
              characters={characters}
              handleClick={handleContextMenuClick}
            />
          ) : null}
          <EventWrapper
            customCursor={cursor64}
            onClick={handleMainClick}
            ref={mainRef}
          >
            {contextActive ? <Target target={target} /> : null}
            <TargetFound characters={characters} />
            <Image level={level} />
          </EventWrapper>
        </GameWrapper>
      </StyledMain>
    </>
  );
};

Main.propTypes = {
  level: PropTypes.string,
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      found: PropTypes.bool,
    })
  ),
  charsRemaining: PropTypes.number,
  handleTargetFound: PropTypes.func,
  handleGameRestart: PropTypes.func,
  gameStart: PropTypes.bool,
  gameOver: PropTypes.bool,
  time: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
  }),
  addScore: PropTypes.func,
  // score: PropTypes.number,
};

const StyledMain = styled.main`
  overflow: hidden;
  user-select: none;
  background-color: #3d3d3d;
`;

const GameWrapper = styled.div`
  position: relative;
  margin-top: 60px;
`;

const EventWrapper = styled.div`
  display: flex;
  cursor: url('${(props) => props.customCursor}') 32 32, auto;
`;

export default Main;
