import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as Menu from '../Styled/Menu';
import MenuFlex from './MenuFlex';
import Button from '../Styled/Button';
import getLevelManifest from '../../assets/levelManifest';
import * as formatTime from '../../helpers/formatTime';
import Leaderboard from './Leaderboard';

const EndScreen = (props) => {
  const { level, handleGameRestart, addScore, score, leaderboard } = props;
  const [name, setName] = useState('');
  const [formActive, setFormActive] = useState(true);

  const thisLevel = getLevelManifest().find((obj) => obj.id === level);

  const handleInput = (e) => {
    const { value } = e.target;

    setName(value);
  };

  const hideForm = () => setFormActive(false);

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
            <Row>
              <Subhead>Your time</Subhead>
              <Text>{formatTime.score(score)}</Text>
            </Row>
            {formActive ? (
              <ScoreForm
                onSubmit={(e) => {
                  addScore(e, name);
                  hideForm();
                }}
              >
                <Row>
                  <NameInput required value={name} onChange={handleInput} />
                  <Button type="submit">Submit</Button>
                </Row>
              </ScoreForm>
            ) : null}
            <Button onClick={handleGameRestart}>Play again</Button>
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
`;

const Header = styled(Menu.Header)`
  color: white;
  align-self: center;
`;

const LeaderboardWrapper = styled.div`
  background-color: white;
  padding: 24px 12px;
  border-radius: 8px;
`;

const GameScore = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  gap: 10px;
  padding: 20px 0;
  align-self: flex-start;
  border-radius: 8px;
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

const Row = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

const ScoreForm = styled.form`
  display: flex;
`;

const NameInput = styled.input.attrs({
  type: 'text',
  maxLength: '3',
  minLength: '3',
  placeholder: '3 letter nametag e.g. ABC',
})`
  width: 100px;
`;

// const Leaderboard = styled.div`
//   width: 300px;
//   background-color: white;
// `;

export default EndScreen;
