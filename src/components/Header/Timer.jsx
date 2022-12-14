import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as formatTime from '../../helpers/formatTime';

const Timer = (props) => {
  const { gameStart, gameOver } = props;
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (gameStart && !gameOver) {
      const timer = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [gameStart, gameOver]);

  return <StyledTimer>{formatTime.seconds(time)}</StyledTimer>;
};

Timer.propTypes = {
  gameOver: PropTypes.bool,
  gameStart: PropTypes.bool,
};

const StyledTimer = styled.div`
  font-family: ${(props) => props.theme.font.mono};
  font-weight: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.darkText};
`;

export default Timer;
