import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ContextMenu from './ContextMenu';
import Target from './Target';
import * as cursorOffset from '../../helpers/cursorOffset';
import snes from '../../assets/images/snes.png';
import cursor100 from '../../assets/images/cursor100.svg';

const Image = (props) => {
  const { offset } = props;

  const [menu, setMenu] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  const handleClick = (e) => {
    const cursor = cursorOffset.getCursor(e);
    toggleActive();

    setMenu((prevState) => {
      return {
        x: cursor.x - offset.x + 75,
        y: cursor.y + offset.y - 130,
      };
    });

    setTarget((prevState) => {
      return {
        x: cursor.x - offset.x - 53,
        y: cursor.y + offset.y - 130,
      };
    });
  };

  return (
    <ComponentWrapper>
      {isActive ? <ContextMenu menu={menu} /> : null}
      <EventWrapper customCursor={cursor100} onClick={handleClick}>
        {isActive ? <Target target={target} /> : null}
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
