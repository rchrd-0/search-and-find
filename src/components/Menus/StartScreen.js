import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as Menu from '../Styled/Menu';
import MenuFlex from './MenuFlex';
import Preview from './Preview';
import LevelDetails from './LevelDetails';
import importAll from '../../helpers/importAll';

const StartScreen = (props) => {
  const { level, handleGameStart, nextLevel, prevLevel } = props;

  const imgs = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );

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
          <LevelDetails level={level} onClick={handleGameStart} />
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
};

const StartPage = styled(Menu.Page)`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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

// const Preview = styled.div`
//   display: grid;
//   grid-template-columns: 80px 1fr 80px;
//   grid-template-rows: 1fr 100px;
//   width: 400px;
//   height: 640px;
//   border-top-left-radius: 8px;
//   border-bottom-left-radius: 8px;
//   background-image: url('${(props) => props.src}');
//   background-position: center;
//   background-size: 420px;
//   background-color: ${(props) => props.theme.color.darkGray};
// `;

export default StartScreen;
