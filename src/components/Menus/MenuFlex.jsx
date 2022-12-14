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
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

export default MenuFlex;
