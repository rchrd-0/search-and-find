import React from 'react';
import styled from 'styled-components';

import Image from './Image';
import Footer from './Footer';

const Main = () => {
  return (
    <StyledMain>
      <Image />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: navajowhite;
`;

export default Main;
