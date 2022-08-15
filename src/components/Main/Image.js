import React from 'react';
import styled from 'styled-components';
import snes from '../../assets/images/snes.png';
import cursor from '../../assets/images/cursor.svg';

const Image = () => {
  return <StyledImage src={snes} customCursor={cursor} />;
};

const StyledImage = styled.img`
  width: 90vw;
  height: auto;
  content: url('${(props) => props.src}');
  cursor: url('${(props) => props.customCursor}') 50 50, auto;
`;

export default Image;
