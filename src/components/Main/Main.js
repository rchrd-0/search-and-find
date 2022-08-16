import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as getOffsets from '../../helpers/getOffsets';
import Image from './Image';
import Footer from './Footer';

const Main = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  // useEffect(() => {
  //   function foo(e) {
  //     console.log(e.target.scrollingElement.scrollTop);
  //   }
  //   window.addEventListener('scroll', (e) => foo(e));
  // });

  // Set y axis offset on window scroll
  useEffect(() => {
    const setYScroll = () => {
      const offsetY = getOffsets.findY();

      setOffset((prevState) => {
        return {
          ...prevState,
          y: offsetY,
        };
      });
    };

    document.addEventListener('scroll', setYScroll);

    return () => {
      document.removeEventListener('scroll', setYScroll);
    };
  });

  // Set y axis offset on window resize
  useEffect(() => {
    const setYResize = () => {
      const offsetY = getOffsets.findY();
      setOffset((prevState) => {
        return {
          ...prevState,
          y: offsetY,
        };
      });
    };

    document.addEventListener('resize', setYResize);

    return () => {
      document.removeEventListener('resize', setYResize);
    };
  });

  return (
    <StyledMain>
      <Image />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  background-color: navajowhite;
`;

export default Main;
