import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

import ContextMenu from './ContextMenu';
import Target from './Target';
import Image from './Image';

import * as cursorOffset from '../../helpers/cursorOffset';
import cursor64 from '../../assets/icons/cursor64.svg';
import charManifest from '../../assets/imageCharManifest';

const Main = (props) => {
  const [level, setLevel] = useState('snes');
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [menu, setMenu] = useState({ x: 0, y: 0, leftRight: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const levelManifest = charManifest.find((obj) => obj.id === level);

  const mainRef = useRef();

  const handleClick = (e) => {
    const { pageX, pageY } = e;

    setCursor({
      x: pageX / mainRef.current.offsetWidth,
      y: pageY / mainRef.current.offsetHeight,
    });
  };

  useEffect(() => {
    setMenu({
      x: cursor.x * 100,
      y: cursor.y * 100,
      leftRight: cursorOffset.leftOrRight(
        mainRef.current.offsetWidth,
        cursor.x
      ),
    });

    setTarget({
      x: cursor.x * 100,
      y: cursor.y * 100,
    });

    setIsActive((prevState) => !prevState);
  }, [cursor]);

  // const foo = async () => {
  //   const docRef = doc(db, 'target', level);
  //   const docSnap = await getDoc(docRef);
  //   const bar = docSnap.data();
  //   console.log(bar['chrono-trigger']);
  // };

  return (
    <StyledMain>
      {isActive ? (
        <ContextMenu menu={menu} charList={levelManifest.charList} />
      ) : null}
      <EventWrapper customCursor={cursor64} onClick={handleClick} ref={mainRef}>
        {isActive ? <Target target={target} /> : null}
        <Image level={level} />
      </EventWrapper>
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
  position: relative;
  margin-top: 60px;
  justify-content: center;
  background-color: navajowhite;
  overflow: hidden;
  user-select: none;
  cursor: url('${(props) => props.customCursor}') 32 32, auto;
`;

const EventWrapper = styled.div`
  display: flex;
  cursor: url('${(props) => props.customCursor}') 32 32, auto; ;
`;

export default Main;
