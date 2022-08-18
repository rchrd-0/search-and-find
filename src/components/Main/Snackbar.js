import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Snackbar = (props) => {
  const { content, visible, active } = props;
  return (
    <DisplayWrapper visible={visible}>
      <StyledSnack success={content.success} active={active}>
        {content.success ? `${content.char} found!` : 'Keep looking!'}
      </StyledSnack>
    </DisplayWrapper>
  );
};

Snackbar.propTypes = {
  content: PropTypes.shape({
    char: PropTypes.string,
    success: PropTypes.bool,
  }),
  visible: PropTypes.bool,
  active: PropTypes.bool,
};

const DisplayWrapper = styled.div`
  display: ${(props) => (props.visible ? 'none' : 'initial')};
`;

const StyledSnack = styled.div`
  color: white;
  position: fixed;
  /* top: -60px + 10%; */
  top: calc(60px + 5%);
  left: 50%;
  transform: translate(-50%);
  display: flex;
  background-color: ${(props) => (props.success ? '#66bcc5' : '#ffb74e')};
  opacity: ${(props) => (props.active ? 1 : 0)};
  z-index: 1;
  font-size: 1.4rem;
  padding: 6px 12px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: all 0.2s ease-in-out;
`;

export default Snackbar;
