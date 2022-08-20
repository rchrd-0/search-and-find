import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LevelDetails from './LevelDetails';
import importAll from '../../helpers/importAll';

const Start = (props) => {
  const { level, handleGameStart } = props;

  const imgs = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <Layout>
      <Wrapper>
        <Heading>
          Retro<Accent>Search</Accent>
        </Heading>
        <Menu>
          <Preview src={imgs[`${level}.png`]} />
          <LevelDetails level={level} onClick={handleGameStart} />
        </Menu>
      </Wrapper>
    </Layout>
  );
};

Start.propTypes = {
  level: PropTypes.string,
  handleGameStart: PropTypes.func,
};

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: rgba(61, 61, 61, 1);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10%;
  align-items: center;
  gap: 20px;
`;

const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  font-style: italic;
  color: ${(props) => props.theme.color.psRed};
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`;

const Accent = styled.span`
  font-weight: 400;
  color: ${(props) => props.theme.color.psGreen};
`;

const Menu = styled.div`
  display: flex;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const Preview = styled.div`
  width: 300px;
  height: 450px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-image: url('${(props) => props.src}');
  background-position: center;
  background-size: 400px;
  /* background-color: ${(props) => props.theme.color.gray}; */
  background-color: white;
`;
export default Start;
