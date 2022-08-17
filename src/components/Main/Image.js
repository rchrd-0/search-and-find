import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ContextMenu from './ContextMenu';
import Target from './Target';
import * as cursorOffset from '../../helpers/cursorOffset';
import importAll from '../../helpers/importAll';
import cursor100 from '../../assets/icons/cursor100.svg';

const Image = (props) => {
  const { offset, level } = props;

  const [menu, setMenu] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const imgs = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );

  const toggleActive = () => setIsActive(!isActive);

  const handleClick = (e) => {
    const clientSize = cursorOffset.getClientSize();
    const cursor = cursorOffset.getCursor(e);

    const xOffsetTotal = cursor.x - offset.x;
    const yOffsetTotal = cursor.y + offset.y;
    // Image width = 95% of clientSize
    const horizontalBoundary = Math.floor(clientSize.width * 0.95);
    // Menu width = 200px, 85px gap between cursor and menu
    const horizontalMargin =
      xOffsetTotal + 285 > horizontalBoundary ? -305 : 85;
    const verticalMargin = -130;

    toggleActive();
    setMenu({
      x: xOffsetTotal + horizontalMargin,
      y: yOffsetTotal + verticalMargin,
    });
    setTarget({ x: xOffsetTotal - 65, y: yOffsetTotal - 135 });
  };

  return (
    <ComponentWrapper>
      {isActive ? <ContextMenu menu={menu} charList={level.charList} /> : null}
      <EventWrapper customCursor={cursor100} onClick={handleClick}>
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
  width: 95%;
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
