import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';
import importAll from '../../helpers/importAll';

const Preview = (props) => {
  const { img, nextLevel, prevLevel } = props;

  const imgs = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <LayoutPreview levelImg={img}>
      <LevelSelectLeft chevron={chevronLeft} onClick={prevLevel} />
      <LevelSelectRight chevron={chevronRight} onClick={nextLevel} />
    </LayoutPreview>
  );
};

Preview.propTypes = {
  img: PropTypes.string,
  nextLevel: PropTypes.func,
  prevLevel: PropTypes.func,
};

const LayoutPreview = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  grid-template-rows: 1fr 100px;
  width: 470px;
  height: 630px;
  border-radius: 8px;
  background-image: url('${(props) => props.levelImg}');
  background-position: center;
  background-size: cover;
  background-color: ${(props) => props.theme.color.darkGray};
  background-repeat: no-repeat;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const LevelSelect = styled.button`
  grid-row: 1 / -1;
  background-color: initial;
  opacity: 0.4;
  transition: opacity 0.1s ease-in-out;
  background-image: url('${(props) => props.chevron}');
  background-size: 70px;
  background-repeat: no-repeat;

  &:hover {
    opacity: 1;
    transition: opacity 0.1s ease-in-out;
  }
`;

const LevelSelectLeft = styled(LevelSelect)`
  background-position: right center;
`;

const LevelSelectRight = styled(LevelSelect)`
  grid-column: 3 / span 1;
  background-position: left center;
`;

export default Preview;
