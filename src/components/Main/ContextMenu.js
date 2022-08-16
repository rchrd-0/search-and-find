import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContextMenu = (props) => {
  const { pos } = props;
  return (
    <StyledContext xPos={pos.x} yPos={pos.y}>
      <List>
        <ul>Foo</ul>
        <ul>Foo</ul>
        <ul>Foo</ul>
      </List>
    </StyledContext>
  );
};

ContextMenu.propTypes = {
  pos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

const StyledContext = styled.div`
  position: absolute;
  width: 200px;
  height: 300px;
  background-color: black;
  border-radius: 8px;
  top: ${(props) => props.yPos}px;
  left: ${(props) => props.xPos}px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  color: white;
`;

export default ContextMenu;
