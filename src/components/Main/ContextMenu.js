import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Target from './Target';

const ContextMenu = (props) => {
  const { menu, target } = props;
  return (
    <>
      <Target target={target} />
      <StyledContext xAxis={menu.x} yAxis={menu.y}>
        <List>
          <ListItem>Donkey Kong</ListItem>
          <ListItem>Donkey Kong</ListItem>
          <ListItem>Donkey Kong</ListItem>
        </List>
      </StyledContext>
    </>
  );
};

ContextMenu.propTypes = {
  menu: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    active: PropTypes.bool,
  }),

  target: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    active: PropTypes.bool,
  }),
};

const StyledContext = styled.div`
  position: absolute;
  top: ${(props) => props.yAxis}px;
  left: ${(props) => props.xAxis}px;
  z-index: 1;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.75);
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  cursor: pointer;
`;

const List = styled.ul`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  color: white;
  font-size: 1.4rem;
`;

const ListItem = styled.li`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid white;

  &:last-of-type {
    border: none;
  }
`;

export default ContextMenu;
