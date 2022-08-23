import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as Menu from '../Styled/Menu';
import MenuFlex from './MenuFlex';
import ScoreForm from './ScoreForm';
import Button from '../Styled/Button';
import getLevelManifest from '../../assets/levelManifest';
import * as formatTime from '../../helpers/formatTime';
import Leaderboard from './Leaderboard';

const EndScreen = (props) => {
  const { level, handleGameRestart, addScore, score, leaderboard } = props;
  const [formActive, setFormActive] = useState(true);

  const thisLevel = getLevelManifest().find((obj) => obj.id === level);

  const hideForm = () => {
    const timeout = setTimeout(() => {
      setFormActive(false);
    }, 200);

    return () => clearTimeout(timeout);
  };

  return (
    <EndPage>
      <MenuFlex>
        <Header>{thisLevel.name} complete!</Header>
        <Menu.Container>
          <LeaderboardWrapper>
            <Leaderboard data={leaderboard} />
          </LeaderboardWrapper>

          <GameScore>
            <Heading>Results</Heading>
            <TimeRow>
              <Subhead>Your time</Subhead>
              <Time>{formatTime.score(score)}</Time>
            </TimeRow>
            {formActive ? (
              <ScoreForm addScore={addScore} hideForm={hideForm} />
            ) : null}
            <RestartBtn onClick={handleGameRestart}>Play again</RestartBtn>
          </GameScore>
        </Menu.Container>
      </MenuFlex>
    </EndPage>
  );
};

EndScreen.propTypes = {
  level: PropTypes.string,
  handleGameRestart: PropTypes.func,
  addScore: PropTypes.func,
  score: PropTypes.number,
  leaderboard: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      score: PropTypes.number,
    })
  ),
};

const EndPage = styled(Menu.Page)`
  background-color: rgba(31, 31, 31, 0.894);
  z-index: 5;
  top: 0;
  color: ${(props) => props.theme.color.menuText};
`;

const Header = styled(Menu.Header)`
  color: white;
  align-self: center;
`;

const LeaderboardWrapper = styled.div`
  background-color: ${(props) => props.theme.color.menuBg};
  padding: 24px 12px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.menuShadow};
`;

const GameScore = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
  align-self: flex-start;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.menuBg};
  box-shadow: ${(props) => props.theme.menuShadow};
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
`;

const Subhead = styled.h2`
  font-size: 1.4rem;
`;

const Time = styled.p`
  font-family: ${(props) => props.theme.font.mono};
  font-size: 1.3rem;
`;

const TimeRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  gap: 20px;
`;

const RestartBtn = styled(Button)`
  background-color: ${(props) => props.theme.color.invalid};
  color: white;
  font-weight: 500;
  margin-top: 12px;
`;

export default EndScreen;
