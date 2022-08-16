import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ContextMenu from './ContextMenu';
import * as cursorOffset from '../../helpers/cursorOffset';
import snes from '../../assets/images/snes.png';
import cursor100 from '../../assets/images/cursor100.svg';

const Image = (props) => {
  const { offset } = props;

  const [menu, setMenu] = useState({ x: 0, y: 0, active: false });
  const [target, setTarget] = useState({ x: 0, y: 0, active: false });

  const showMenu = () => {
    setMenu((prevState) => {
      return {
        ...prevState,
        active: true,
      };
    });
  };

  const handleClick = (e) => {
    const cursor = cursorOffset.getCursor(e);

    setMenu((prevState) => {
      return {
        ...prevState,
        x: cursor.x - offset.x + 75,
        y: cursor.y + offset.y - 130,
      };
    });

    setTarget((prevState) => {
      return {
        ...prevState,
        x: cursor.x - offset.x - 53,
        y: cursor.y + offset.y - 130,
      };
    });
    showMenu();
  };

  return (
    <ComponentWrapper>
      {menu.active ? <ContextMenu menu={menu} target={target} /> : null}
      <EventWrapper customCursor={cursor100} onClick={handleClick}>
        <StyledImage src={snes} />
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
};

const ComponentWrapper = styled.div`
  position: relative;
  width: 90vw;
`;

const EventWrapper = styled.div`
  display: flex;
  cursor: url('${(props) => props.customCursor}') 50 50, auto; ;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  user-select: none;
  pointer-events: none;
  content: url('${(props) => props.src}');
`;

export default Image;
