import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import importAll from '../../helpers/importAll';

const ContextMenu = (props) => {
  const { menu, characters, handleClick } = props;
  const remainingChars = characters.filter((char) => !char.found);
  const imgs = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <StyledContext
      menu={menu}
      xAxis={menu.x}
      yAxis={menu.y}
      marginX={menu.marginX}
      marginY={menu.marginY}
    >
      <List>
        {remainingChars.map((item) => (
          <ListItem
            key={item.id}
            img={imgs[`${item.img}.png`]}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </ListItem>
        ))}
      </List>
    </StyledContext>
  );
};

ContextMenu.propTypes = {
  menu: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    marginX: PropTypes.number,
    marginY: PropTypes.number,
  }),
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      found: PropTypes.bool,
    })
  ),
  handleClick: PropTypes.func,
};

const StyledContext = styled.div`
  width: 210px;
  position: absolute;
  top: ${(props) => props.menu.y}%;
  left: ${(props) => props.menu.x}%;
  margin-top: ${(props) => props.menu.marginY}px;
  margin-left: ${(props) => props.menu.marginX}px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: rgba(31, 31, 31, 0.87);
  color: ${(props) => props.theme.color.menuText};
  user-select: none;
  box-shadow: ${(props) => props.theme.menuShadow};
  cursor: pointer;
  z-index: 2;
`;

const List = styled.ul`
  flex: 1;
  border-radius: 8px;
  font-size: 1.3rem;
  overflow: hidden;
`;

const ListItem = styled.li`
  display: flex;
  padding: 8px 12px 8px 60px;
  background-image: url('${(props) => props.img}');
  background-size: 32px;
  background-position: 16px center;
  background-repeat: no-repeat;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.07);
    background-color: rgba(102, 102, 102, 0.8);
    transition: all 0.2s ease-in-out;
  }
`;

export default ContextMenu;
