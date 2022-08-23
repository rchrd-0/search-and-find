import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Timer from './Timer';
import minimize from '../../assets/icons/minimize.svg';

const Header = (props) => {
  const {
    charsRemaining,
    toggleDropdown,
    dropdown,
    gameStart,
    gameOver,
    handleGameRestart,
  } = props;

  return (
    <StyledHeader>
      <Heading onClick={handleGameRestart}>
        Retro<Accent>Search</Accent>
      </Heading>
      <Timer gameStart={gameStart} gameOver={gameOver} />
      <NotiBubble onClick={toggleDropdown}>
        {!dropdown ? `${charsRemaining}` : null}
        <Minimize active={dropdown} src={minimize} />
      </NotiBubble>
    </StyledHeader>
  );
};

Header.propTypes = {
  charsRemaining: PropTypes.number,
  toggleDropdown: PropTypes.func,
  dropdown: PropTypes.bool,
  gameStart: PropTypes.bool,
  gameOver: PropTypes.bool,
  handleGameRestart: PropTypes.func,
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
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
  z-index: 3;
`;

const Heading = styled.h1`
  font-style: italic;
  font-weight: 600;
  color: ${(props) => props.theme.color.psRed};
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  font-size: 2rem;
  cursor: pointer;
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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Minimize = styled.img`
  width: 28px;
  content: url(${(props) => props.src});
  display: ${(props) => (props.active ? 'default' : 'none')};
`;

export default Header;
