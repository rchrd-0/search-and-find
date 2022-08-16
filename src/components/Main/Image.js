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
    const windowSize = cursorOffset.getWindowSize();
    const cursor = cursorOffset.getCursor(e);

    const xOffsetTotal = cursor.x - offset.x;
    const yOffsetTotal = cursor.y + offset.y;
    const horizontalBoundary = windowSize.width * 0.9;
    const horizontalMargin =
      xOffsetTotal + 200 > horizontalBoundary ? -270 : 80;
    const verticalMargin = -130;

    toggleActive();
    setMenu({
      x: xOffsetTotal + horizontalMargin,
      y: yOffsetTotal + verticalMargin,
    });
    setTarget({ x: xOffsetTotal - 50, y: yOffsetTotal - 130 });
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
`;

export default Image;
