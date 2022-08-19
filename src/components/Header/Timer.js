import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatTime from '../../helpers/formatTime';

const Timer = (props) => {
  const { gameOver } = props;
  const [time, setTime] = useState(0);
  // return <div>{formatTime(time)}</div>;
  useEffect(() => {
    if (!gameOver) {
      const timer = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [gameOver]);

  return <div>{formatTime(time)}</div>;
};

Timer.propTypes = {
  gameOver: PropTypes.bool,
};

export default Timer;
