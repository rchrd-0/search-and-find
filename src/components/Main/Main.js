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
import charManifest from '../../assets/imageCharManifest';
import * as checkGame from '../../helpers/checkGame';

const Main = ({ children, props }) => {
  const [level, setLevel] = useState('snes');
  const [characters, setCharacters] = useState([]);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [menu, setMenu] = useState({ x: 0, y: 0, margin: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [contextActive, setContextActive] = useState(false);
  const [snackbarActive, setSnackbarActive] = useState(false);
  const [snackbar, setSnackbar] = useState({
    char: '',
    success: false,
  });

  const mainRef = useRef();

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

  const handleMenuClick = async (id) => {
    const characterCoord = await firebase.getTargetCharacter(id, level);
    const result = checkGame.isInRange(cursor, characterCoord);
    if (result) {
      const foundName = characters.find((char) => char.id === id).name;
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

      setCharacters(updatedCharacters);

      setSnackbar({ char: foundName, success: true });
    } else {
      setSnackbar({ char: '', success: false });
    }

    setSnackbarActive(true);
    setContextActive(false);
  };

  // Sets level manifest to correct object on mount
  useEffect(() => {
    const thisLevel = charManifest.find((obj) => obj.id === level);
    setCharacters(thisLevel.charList.map((obj) => ({ ...obj, found: false })));
  }, []);

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
  });

  return (
    <StyledMain>
      <Header characters={characters} />
      <Dropdown characters={characters} />
      <Snackbar content={snackbar} active={snackbarActive} />
      <GameWrapper>
        {contextActive ? (
          <ContextMenu
            menu={menu}
            characters={characters}
            handleClick={handleMenuClick}
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
