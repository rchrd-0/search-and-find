import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Image from './Image';
import Footer from './Footer';

const Main = (props) => {
  const { offset } = props;
  return (
    <StyledMain>
      <Image offset={offset} />
    </StyledMain>
  );
};

Main.propTypes = {
  offset: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  background-color: navajowhite;
  overflow: hidden;
`;

export default Main;
