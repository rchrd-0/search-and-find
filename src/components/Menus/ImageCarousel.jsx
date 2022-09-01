import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import ArtBy from '../Main/ArtBy';
import { getIndex } from '../../helpers/levelSelection';
import snes from '../../assets/images/snes.png';
import n64 from '../../assets/images/n64.png';
import ps1 from '../../assets/images/ps1.png';
import ps2 from '../../assets/images/ps2.png';
import dreamcast from '../../assets/images/dreamcast.png';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },

  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },

  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    };
  },

  transition: {
    x: {
      type: 'spring',
      stiffness: 400,
      damping: 30,
    },
    opacity: {
      duration: 0.2,
    },
  },
};

const ImageCarousel = (props) => {
  const { level, nextLevel, prevLevel } = props;
  const [[page, direction], setPage] = useState([getIndex(level), 0]);
  const [...images] = [snes, n64, ps1, ps2, dreamcast];

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleKeyUp = (e) => {
    const { code } = e;
    if (code === 'ArrowRight') {
      paginate(1);
      nextLevel();
    }

    if (code === 'ArrowLeft') {
      paginate(-1);
      prevLevel();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  return (
    <Container>
      <Overlay>
        <LevelSelectLeft
          chevron={chevronLeft}
          onClick={() => {
            paginate(-1);
            prevLevel();
          }}
        />
        <LevelSelectRight
          chevron={chevronRight}
          onClick={() => {
            paginate(1);
            nextLevel();
          }}
        />
        <AnimatePresence initial={false} custom={direction}>
          <Image
            key={page}
            img={images[imageIndex]}
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={variants.transition}
          />
        </AnimatePresence>
        <ArtBy level={level} />
      </Overlay>
    </Container>
  );
};

ImageCarousel.propTypes = {
  level: PropTypes.string,
  nextLevel: PropTypes.func,
  prevLevel: PropTypes.func,
};

const Container = styled.div`
  position: relative;
  width: 500px;
  height: 750px;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  grid-template-rows: 1fr min-content;
  justify-items: center;
`;

const LevelSelect = styled.button`
  width: 100%;
  grid-row: 1 / 2;
  background-color: initial;
  opacity: 0.4;
  transition: opacity 0.1s ease-in-out;
  background-image: url('${(props) => props.chevron}');
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 2;

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

const Image = styled(motion.div)`
  position: absolute;
  grid-area: 1 / 1 / span 1 / -1;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  justify-self: center;
`;

export default ImageCarousel;
