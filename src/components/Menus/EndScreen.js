import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as Menu from '../Styled/Menu';
import MenuFlex from './MenuFlex';
import Button from '../Styled/Button';
import charManifest from '../../assets/imageCharManifest';

import formatTime from '../../helpers/formatTime';

const EndScreen = (props) => {
  const { time, level } = props;
  const levelManifest = charManifest.find((obj) => obj.id === level);
  return (
    <EndPage>
      <MenuFlex>
        <Header>{levelManifest.name} complete!</Header>
        <Menu.Container>
          <Leaderboard />
        </Menu.Container>
      </MenuFlex>
    </EndPage>
  );
};

EndScreen.propTypes = {
  time: PropTypes.number,
  level: PropTypes.string,
};

const EndPage = styled(Menu.Page)`
  background-color: ${(props) => props.theme.color.darkGray};
`;

const Header = styled(Menu.Header)`
  color: white;
`;

const Leaderboard = styled.div`
  width: 200px;
  height: 400px;
`;

export default EndScreen;
