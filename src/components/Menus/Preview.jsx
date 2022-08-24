import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';

const Preview = (props) => {
  const { img, nextLevel, prevLevel } = props;
  const [active, setActive] = useState(false);

  const fadeOut = () => setActive(false);

  const handleKeyUp = (e) => {
    const { code } = e;
    if (code === 'ArrowRight') {
      nextLevel();
    }

    if (code === 'ArrowLeft') {
      prevLevel();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  useEffect(() => {
    if (!active) {
      const fadeIn = setTimeout(() => {
        setActive(true);
      }, 100);

      return () => clearTimeout(fadeIn);
    }
  }, [active]);

  return (
    <LayoutPreview>
      <BackgroundImage levelImg={img} active={active} />
      <LevelSelectLeft
        chevron={chevronLeft}
        onClick={() => {
          fadeOut();
          prevLevel();
        }}
      />
      <LevelSelectRight
        chevron={chevronRight}
        onClick={() => {
          fadeOut();
          nextLevel();
        }}
      />
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
  grid-template-columns: 80px 1fr 80px;
  grid-template-rows: 1fr 100px;
  width: 500px;
  height: 700px;
  border-radius: 8px;
  /* background-color: ${(props) => props.theme.color.darkGray}; */
  /* background-color: #c2c2c2; */
  /* box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px; */
`;

const BackgroundImage = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  background-image: url('${(props) => props.levelImg}');
  /* background-color: ${(props) => props.theme.color.darkGray}; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 8px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;
`;

const LevelSelect = styled.button`
  grid-row: 1 / -1;
  background-color: initial;
  opacity: 0.4;
  transition: opacity 0.1s ease-in-out;
  background-image: url('${(props) => props.chevron}');
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;

  &:hover {
    opacity: 1;
    transition: opacity 0.1s ease-in-out;
  }
`;

const LevelSelectLeft = styled(LevelSelect)`
  grid-column: 1 / span 1;
  background-position: right center;
`;

const LevelSelectRight = styled(LevelSelect)`
  grid-column: 3 / span 1;
  background-position: left center;
`;

export default Preview;
