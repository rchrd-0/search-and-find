import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CreditPill = ({ children }) => {
  return <Pill>{children}</Pill>;
};

CreditPill.propTypes = {
  children: PropTypes.node,
};

const Pill = styled.div`
  display: flex;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.menuBg};
  color: ${(props) => props.theme.color.menuText};
  box-shadow: ${(props) => props.theme.menuShadow};
  padding: 10px 12px;
  user-select: none;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
`;

export default CreditPill;
