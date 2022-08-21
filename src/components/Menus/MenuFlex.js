import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuFlex = ({ children }) => {
  return <FlexWrapper>{children}</FlexWrapper>;
};

MenuFlex.propTypes = {
  children: PropTypes.node,
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10%;
  gap: 16px;
  user-select: none;
`;

export default MenuFlex;