import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as Menu from '../Styled/Menu';
import Button from '../Styled/Button';
import MenuFlex from './MenuFlex';
import Preview from './Preview';
import LevelDetails from './LevelDetails';
import Leaderboard from './Leaderboard';
import importAll from '../../helpers/importAll';

const StartScreen = (props) => {
  const {
    level,
    thisLevel,
    handleGameStart,
    nextLevel,
    prevLevel,
    leaderboard,
  } = props;
  const [leaderboardActive, setLeaderboardActive] = useState(false);

  const imgs = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );

  const selectMenu = () => setLeaderboardActive((prevState) => !prevState);

  return (
    <StartPage background={imgs['background.svg']}>
      <MenuFlex>
        <Heading>
          Retro<Accent>Search</Accent>
        </Heading>
        <Menu.Container>
          <Preview
            img={imgs[`${level}.png`]}
            nextLevel={nextLevel}
            prevLevel={prevLevel}
          />

          <MenuLeft>
            <LevelName>{thisLevel.name}</LevelName>
            {leaderboardActive ? (
              <Leaderboard data={leaderboard} />
            ) : (
              <LevelDetails level={level} charList={thisLevel.charList} />
            )}
            <ButtonWrapper>
              <Button type="button" onClick={handleGameStart}>
                Play
              </Button>
              <Button type="button" onClick={selectMenu}>
                {leaderboardActive ? 'Characters' : 'Leaderboard'}
              </Button>
            </ButtonWrapper>
          </MenuLeft>
        </Menu.Container>
      </MenuFlex>
    </StartPage>
  );
};

StartScreen.propTypes = {
  level: PropTypes.string,
  handleGameStart: PropTypes.func,
  prevLevel: PropTypes.func,
  nextLevel: PropTypes.func,
  thisLevel: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    charList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        img: PropTypes.string,
      })
    ),
  }),
  leaderboard: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      score: PropTypes.number,
    })
  ),
};

const StartPage = styled(Menu.Page)`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const MenuLeft = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
`;

const LevelName = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  margin-top: 20px;
`;

const Heading = styled(Menu.Header)`
  color: ${(props) => props.theme.color.softRed};
  font-style: italic;
  align-self: center;
`;

const Accent = styled.span`
  font-weight: 400;
  color: ${(props) => props.theme.color.psGreen};
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 16px;
`;

export default StartScreen;
