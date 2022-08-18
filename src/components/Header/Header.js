import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { characters } = props;

  const charactersRemaining = characters.filter(
    (character) => !character.found
  ).length;

  return (
    <StyledHeader>
      RetroSearch
      <NotiBubble>{charactersRemaining}</NotiBubble>
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
`;

export default Header;
