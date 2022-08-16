import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import snes from '../../assets/images/snes.png';
import cursor from '../../assets/images/cursor.svg';
import ContextMenu from './ContextMenu';

const Image = (props) => {
  const { offset } = props;

  const [contextPos, setContextPos] = useState({ x: 0, y: 0 });
  const [contextActive, setContextActive] = useState(false);

  const getCursor = (e) => {
    const { clientX, clientY } = e;
    console.log(contextPos);
    console.log(clientX, clientY);

    setContextPos((prevState) => {
      return {
        ...prevState,
        x: clientX - offset.x,
        y: clientY + offset.y - 70,
      };
    });
  };

  const showContextMenu = (e) => {
    getCursor(e);
    setContextActive(true);
  };

  return (
    <ImageWrapper customCursor={cursor} onClick={showContextMenu}>
      {contextActive ? <ContextMenu pos={contextPos} /> : null}
      <StyledImage src={snes} />
    </ImageWrapper>
  );
};

Image.propTypes = {
  offset: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 90vw;
  cursor: url('${(props) => props.customCursor}') 32 32, crosshair; ;
`;

const StyledImage = styled.img`
  width: 100%;
  user-select: none;
  pointer-events: none;
  content: url('${(props) => props.src}');
`;

export default Image;
