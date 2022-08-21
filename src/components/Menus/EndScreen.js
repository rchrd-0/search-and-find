import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as Menu from '../Styled/Menu';
import MenuFlex from './MenuFlex';
import Button from '../Styled/Button';
import getLevelManifest from '../../assets/levelManifest';
import * as formatTime from '../../helpers/formatTime';

const EndScreen = (props) => {
  const { time, level, handleGameRestart } = props;
  const thisLevel = getLevelManifest().find((obj) => obj.id === level);

  const inSeconds = formatTime.getSeconds(time.end, time.start);
  const milliseconds = formatTime.getMs(time.end, time.start);

  return (
    <EndPage>
      <MenuFlex>
        <Header>{thisLevel.name} complete!</Header>
        <Menu.Container>
          <Leaderboard />
          <GameScore>
            <Heading>Results</Heading>
            <Time>
              <Subhead>Your time</Subhead>
              <Text>
                {formatTime.formatSeconds(inSeconds)}.{milliseconds}
              </Text>
            </Time>
            <NameInput />
            <Button onClick={handleGameRestart}>Play again</Button>
          </GameScore>
        </Menu.Container>
      </MenuFlex>
    </EndPage>
  );
};

EndScreen.propTypes = {
  time: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
  }),
  level: PropTypes.string,
  handleGameRestart: PropTypes.func,
};

const EndPage = styled(Menu.Page)`
  background-color: rgba(31, 31, 31, 0.894);
  z-index: 3;
`;

const Header = styled(Menu.Header)`
  color: white;
  align-self: center;
`;

const GameScore = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  gap: 10px;
  padding: 20px 0;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

const Subhead = styled.h2`
  flex: 1;
  font-size: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

const Time = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 40px;
`;

const NameInput = styled.input.attrs({
  type: 'text',
  maxLength: '3',
})`
  width: 100px;
`;

const Leaderboard = styled.div`
  width: 300px;
  background-color: white;
`;

export default EndScreen;
