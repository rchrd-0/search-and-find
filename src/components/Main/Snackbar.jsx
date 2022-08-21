import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Snackbar = (props) => {
  const { content, active } = props;
  return (
    <StyledSnack success={content.success} active={active}>
      {content.success ? `${content.char} found!` : 'Keep looking!'}
    </StyledSnack>
  );
};

Snackbar.propTypes = {
  content: PropTypes.shape({
    char: PropTypes.string,
    success: PropTypes.bool,
  }),
  active: PropTypes.bool,
};

const StyledSnack = styled.div`
  color: white;
  position: fixed;
  top: calc(60px + 3%);
  left: 50%;
  transform: translate(-50%);
  display: flex;
  background-color: ${(props) => (props.success ? '#66bcc5' : '#ffb74e')};
  z-index: 1;
  font-size: 1.4rem;
  padding: 6px 12px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
    background-color 0.1s ease-in-out;
`;

export default Snackbar;
