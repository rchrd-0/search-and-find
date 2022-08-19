import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatTime from '../../helpers/formatTime';

const Timer = (props) => {
  const { time } = props;

  return <StyledTimer>{formatTime(time)}</StyledTimer>;
};

Timer.propTypes = {
  time: PropTypes.number,
};

const StyledTimer = styled.div`
  font-family: ${(props) => props.theme.font.mono};
  font-weight: 2rem;
  font-weight: 500;
`;

export default Timer;
