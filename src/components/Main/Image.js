import React from 'react';
import styled from 'styled-components';
import snes from '../../assets/images/snes.png';

const Image = () => {
  return <StyledImage src={snes} />;
};

const StyledImage = styled.img`
  width: 90vw;
  height: auto;
  content: url('${(props) => props.src}');
`;

export default Image;
