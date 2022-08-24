import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = (props) => {
  const { children, textColor, href, target } = props;

  return (
    <StyledLink href={href} target={target} textColor={textColor}>
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  textColor: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
};

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color[props.textColor]};
  font-weight: 500;
  transition: color 0.2s ease-in-out;
`;

export default Link;
