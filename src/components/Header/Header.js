import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Timer from './Timer';
import minimize from '../../assets/icons/minimize.svg';

const Header = (props) => {
  const { characters, toggleDropdown, dropdown, time } = props;

  const charactersRemaining = characters.filter(
    (character) => !character.found
  ).length;

  return (
    <StyledHeader>
      <Heading>
        Retro<Accent>Search</Accent>
      </Heading>
      <Timer time={time} />
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
  time: PropTypes.number,
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
  background-color: ${(props) => props.theme.color.gray};
  z-index: 2;
`;

const Heading = styled.h1`
  font-style: italic;
  font-weight: 600;
  color: #df0024;
`;

const Accent = styled.span`
  color: #05ac9f;
  font-weight: 400;
`;

const NotiBubble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  color: #f2c300;
  background-color: #2e6db4;
`;

const Minimize = styled.img`
  width: 28px;
  content: url(${(props) => props.src});
  display: ${(props) => (props.active ? 'default' : 'none')};
`;

export default Header;
