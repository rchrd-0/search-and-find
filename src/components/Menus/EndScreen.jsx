import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as Menu from '../Styled/Menu';
import MenuFlex from './MenuFlex';
import Button from '../Styled/Button';
import getLevelManifest from '../../assets/levelManifest';
import * as formatTime from '../../helpers/formatTime';

const EndScreen = (props) => {
  const { time, level, handleGameRestart, addScore } = props;
  const [name, setName] = useState('');
  const [formActive, setFormActive] = useState(true);

  const thisLevel = getLevelManifest().find((obj) => obj.id === level);
  const inSeconds = formatTime.getSeconds(time.end, time.start);
  const milliseconds = formatTime.getMs(time.end, time.start);

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
          <Leaderboard />
          <GameScore>
            <Heading>Results</Heading>
            <Row>
              <Subhead>Your time</Subhead>
              <Text>
                {formatTime.formatSeconds(inSeconds)}.{milliseconds}
              </Text>
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
  time: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
  }),
  level: PropTypes.string,
  handleGameRestart: PropTypes.func,
  addScore: PropTypes.func,
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

const Leaderboard = styled.div`
  width: 300px;
  background-color: white;
`;

export default EndScreen;
