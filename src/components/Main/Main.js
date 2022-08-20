import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as firebase from '../../helpers/firebase';

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
  const { gameStart, level, characters, handleTargetFound } = props;
  const [gameOver, setGameOver] = useState(true);
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

  const [time, setTime] = useState(0);

  // Handle game start
  useEffect(() => {
    if (gameStart) setGameOver(false);
  }, [gameStart]);

  useEffect(() => {
    if (!gameOver) {
      const timer = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [gameOver]);

  const handleMainClick = (e) => {
    const { pageX, pageY } = e;
    // console.log(
    //   pageX / mainRef.current.offsetWidth,
    //   pageY / mainRef.current.offsetHeight
    // );

    setCursor({
      x: pageX / mainRef.current.offsetWidth,
      y: pageY / mainRef.current.offsetHeight,
    });
  };

  const handleContextMenuClick = async (id) => {
    const characterCoord = await firebase.getTargetCharacter(id, level);
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

  // useEffect(() => {
  //   const charactersRemaining = characters.filter((char) => !char.found).length;
  //   if (charactersRemaining === 0) {
  //     setGameOver(true);
  //   }
  //   // console.log(charactersRemaining);
  // }, [characters]);

  return (
    <StyledMain>
      <Header
        characters={characters}
        toggleDropdown={toggleDropdown}
        dropdown={dropdown}
        gameOver={gameOver}
        time={time}
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
  );
};

Main.propTypes = {
  gameStart: PropTypes.bool,
  level: PropTypes.string,
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      found: PropTypes.bool,
    })
  ),
  handleTargetFound: PropTypes.func,
  // offset: PropTypes.shape({
  //   x: PropTypes.number,
  //   y: PropTypes.number,
  // }),
};

const StyledMain = styled.main`
  overflow: hidden;
  user-select: none;
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
