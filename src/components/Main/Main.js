import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { db } from '../../firebase/firebase-config';
import * as firebase from '../../helpers/firebase';

import Header from '../Header/Header';
import Snackbar from './Snackbar';
import ContextMenu from './ContextMenu';
import Target from './Target';
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
  const [isActive, setIsActive] = useState(false);
  const [snackbarHidden, setSnackbarHidden] = useState(true);
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
    const characterCoord = await firebase.getTarget(id, level);
    const result = checkGame.isInRange(cursor, characterCoord);

    if (result) {
      const foundName = characters.find((char) => char.id === id).name;
      const updatedCharacters = characters.map((char) => {
        if (char.id === id) {
          return {
            ...char,
            found: true,
          };
        }

        return char;
      });

      setCharacters(updatedCharacters);

      setSnackbar((prevState) => ({
        char: foundName,
        success: true,
      }));
    } else {
      setSnackbar((prevState) => ({
        char: '',
        success: false,
      }));
    }
    setSnackbarHidden(false);
    setIsActive(false);
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

    setIsActive((prevState) => !prevState);
  }, [cursor]);

  useEffect(() => {
    if (!snackbarHidden) {
      const appear = setTimeout(() => {
        setSnackbarActive(true);

        const disappear = setTimeout(() => {
          setSnackbarActive(false);

          const hide = setTimeout(() => {
            setSnackbarHidden(true);
          }, 100);

          return () => {
            clearTimeout(hide);
          };
        }, 2500);

        return () => {
          clearTimeout(disappear);
        };
      }, 100);

      return () => {
        clearTimeout(appear);
      };
    }
  }, [snackbarHidden]);

  return (
    <StyledMain>
      <Header characters={characters} />
      <Snackbar
        content={snackbar}
        active={snackbarActive}
        visible={snackbarHidden}
      />
      <GameWrapper>
        {isActive ? (
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
          {isActive ? <Target target={target} /> : null}
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
  cursor: url('${(props) => props.customCursor}') 32 32, auto; ;
`;

export default Main;
