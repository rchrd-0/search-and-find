import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Timer from './Timer';
import minimize from '../../assets/icons/minimize.svg';

const Header = (props) => {
  const { characters, toggleDropdown, dropdown, gameOver } = props;

  const charactersRemaining = characters.filter(
    (character) => !character.found
  ).length;

  return (
    <StyledHeader>
      RetroSearch
      <Timer gameOver={gameOver} />
      <NotiBubble onClick={toggleDropdown}>
        {!dropdown ? `${charactersRemaining}` : null}
        <Minimize active={dropdown} src={minimize} />
      </NotiBubble>
    </StyledHeader>
  );
};

Header.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      found: PropTypes.bool,
    })
  ),
  toggleDropdown: PropTypes.func,
  dropdown: PropTypes.bool,
  gameOver: PropTypes.bool,
};

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 36px;
  height: 60px;
  font-size: 1.8rem;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: lavender;
  z-index: 2;
`;

const NotiBubble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 40px;
  height: 40px;
  border-radius: 8px;
  background-color: navajowhite;
  cursor: pointer;
  /* background-image: url(${(props) => props.src});
  background-size: 28px;
  background-repeat: no-repeat;
  background-position: center; */
`;

const Minimize = styled.img`
  width: 28px;
  content: url(${(props) => props.src});
  display: ${(props) => (props.active ? 'default' : 'none')};
`;

export default Header;
