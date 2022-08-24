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
            <LevelName titleColor={level}>{thisLevel.name}</LevelName>
            <ButtonWrapper>
              <PlayBtn type="button" onClick={handleGameStart}>
                Play
              </PlayBtn>
              <Button type="button" onClick={selectMenu}>
                {leaderboardActive ? 'Characters' : 'Leaderboard'}
              </Button>
            </ButtonWrapper>
            {leaderboardActive ? (
              <Leaderboard data={leaderboard} />
            ) : (
              <LevelDetails level={level} charList={thisLevel.charList} />
            )}
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
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.menuBg};
  box-shadow: ${(props) => props.theme.menuShadow};
  align-self: center;
  color: ${(props) => props.theme.color.menuText};
`;

const LevelName = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  margin-top: 12px;
  color: ${(props) => props.theme.color[props.titleColor]};
  text-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
  margin: 8px 0 16px;
`;

const PlayBtn = styled(Button)`
  background-color: ${(props) => props.theme.color.valid};
  color: #eceef5;
`;

export default StartScreen;
