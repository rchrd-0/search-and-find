import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import importAll from '../../helpers/importAll';

const Image = (props) => {
  const { level } = props;

  const imgs = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );

  return <StyledImage src={imgs[`${level}.png`]} />;
};

Image.propTypes = {
  level: PropTypes.string,
};

const StyledImage = styled.img`
  min-width: 900px;
  width: 100%;
  height: auto;
  user-select: none;
  pointer-events: none;
`;

export default Image;
