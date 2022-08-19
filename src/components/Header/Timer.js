import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatTime from '../../helpers/formatTime';

const Timer = (props) => {
  const { time } = props;
  return <div>{formatTime(time)}</div>;
};

Timer.propTypes = {
  time: PropTypes.number,
};

export default Timer;
