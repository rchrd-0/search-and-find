import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Image from './Image';
import Footer from './Footer';
import charManifest from '../../assets/imageCharManifest';

const Main = (props) => {
  // const { offset } = props;
  const [level, setLevel] = useState('snes');

  const levelManifest = charManifest.find((obj) => obj.id === level);

  return (
    <StyledMain>
      {/* <Image offset={offset} level={levelManifest} /> */}
      <Image level={levelManifest} />
    </StyledMain>
  );
};

Main.propTypes = {
  // offset: PropTypes.shape({
  //   x: PropTypes.number,
  //   y: PropTypes.number,
  // }),
};

const StyledMain = styled.main`
  display: flex;
  margin-top: 60px;
  justify-content: center;
  background-color: navajowhite;
  overflow: hidden;
  user-select: none;
`;

export default Main;
