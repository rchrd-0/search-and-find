import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ContextMenu from './ContextMenu';
import Target from './Target';
import * as cursorOffset from '../../helpers/cursorOffset';
import importAll from '../../helpers/importAll';
import cursor64 from '../../assets/icons/cursor64.svg';

const Image = (props) => {
  const { level } = props;

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [menu, setMenu] = useState({ x: 0, y: 0, leftRight: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const imgs = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );

  const imgRef = useRef();

  const handleClick = (e) => {
    const { pageX, pageY } = e;

    setCursor({
      x: pageX / imgRef.current.offsetWidth,
      y: pageY / imgRef.current.offsetHeight,
    });
  };

  useEffect(() => {
    setMenu({
      x: cursor.x * 100,
      y: cursor.y * 100,
      leftRight: cursorOffset.leftOrRight(imgRef.current.offsetWidth, cursor.x),
    });

    setTarget({
      x: cursor.x * 100,
      y: cursor.y * 100,
    });

    setIsActive((prevState) => !prevState);
  }, [cursor]);

  return (
    <ComponentWrapper>
      {isActive ? <ContextMenu menu={menu} charList={level.charList} /> : null}
      <EventWrapper
        customCursor={cursor64}
        onClick={(e) => handleClick(e)}
        ref={imgRef}
      >
        {isActive ? <Target target={target} /> : null}
        <StyledImage src={imgs[`${level.img}.png`]} />
      </EventWrapper>
    </ComponentWrapper>
  );
};

Image.propTypes = {
  offset: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    active: PropTypes.bool,
  }),
  level: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    charList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        img: PropTypes.string,
      })
    ),
  }),
};

const ComponentWrapper = styled.div`
  position: relative;
`;

const EventWrapper = styled.div`
  position: relative;
  display: flex;
  cursor: url('${(props) => props.customCursor}') 32 32, auto; ;
`;

const StyledImage = styled.img`
  min-width: 800px;
  width: 100%;
  height: auto;
  user-select: none;
  pointer-events: none;
`;

export default Image;
