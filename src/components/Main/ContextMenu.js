import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContextMenu = (props) => {
  const { menu } = props;
  return (
    <StyledContext xAxis={menu.x} yAxis={menu.y}>
      <List>
        <ListItem>Donkey Kong</ListItem>
        <ListItem>Donkey Kong</ListItem>
        <ListItem>Donkey Kong</ListItem>
      </List>
    </StyledContext>
  );
};

ContextMenu.propTypes = {
  menu: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

const StyledContext = styled.div`
  width: 200px;
  position: absolute;
  top: ${(props) => props.yAxis}px;
  left: ${(props) => props.xAxis}px;
  z-index: 1;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.75);
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  cursor: pointer;
`;

const List = styled.ul`
  flex: 1;
  padding: 0 16px;
  list-style-type: none;
  color: white;
  font-size: 1.4rem;
`;

const ListItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid white;

  &:last-of-type {
    border: none;
  }
`;

export default ContextMenu;
