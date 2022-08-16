import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <StyledHeader>header placeholder</StyledHeader>;
};

const StyledHeader = styled.header`
  width: 100%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: lavender;
  font-size: 2rem;
  padding: 10px;
  height: 70px;
`;

export default Header;
