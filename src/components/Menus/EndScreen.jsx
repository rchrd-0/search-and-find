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
        <Header titleColor={level}>{thisLevel.name} complete!</Header>
        <MenuContainer>
          <LeaderboardWrapper>
            <Leaderboard data={leaderboard} />
          </LeaderboardWrapper>

          <GameScore>
            <Menu.Subheader>Results</Menu.Subheader>
            <TimeRow>
              <Subhead>Your time</Subhead>
              <Time>{formatTime.score(score)}</Time>
            </TimeRow>
            {formActive ? (
              <ScoreForm addScore={addScore} hideForm={hideForm} />
            ) : null}
            <RestartBtn onClick={handleGameRestart}>Play again</RestartBtn>
          </GameScore>
        </MenuContainer>
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
  display: flex;
  min-width: 100vw;
  position: fixed;
  background-color: rgba(51, 51, 51, 0.78);
  z-index: 5;
  color: ${(props) => props.theme.color.menuText};
`;

const Header = styled(Menu.Header)`
  color: ${(props) => props.theme.color[props.titleColor]};
  align-self: center;
  margin-bottom: 16px;
`;

const MenuContainer = styled(Menu.Container)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

const LeaderboardWrapper = styled.div`
  background-color: ${(props) => props.theme.color.menuBg};
  padding: 24px 12px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.menuShadow};
`;

const GameScore = styled.div`
  width: 360px;
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
  color: #eceef5;
  margin-top: 12px;
`;

export default EndScreen;
