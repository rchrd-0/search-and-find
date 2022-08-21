import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import target100 from '../../assets/icons/target100.svg';
import * as cursorOffset from '../../helpers/cursorOffset';

const TargetFound = (props) => {
  const { characters } = props;
  const [relativeOffset, setRelativeOffset] = useState(0);
  const charactersFound = characters.filter((char) => char.found);

  const handleResize = () => {
    // Where 60px = header height;
    const referenceHeight = cursorOffset.getClientSize().height - 60;
    const relativeToHeader = cursorOffset.getHeaderRelative(referenceHeight);

    setRelativeOffset(relativeToHeader);
  };

  useEffect(() => {
    const referenceHeight = cursorOffset.getClientSize().height - 60;
    const relativeToHeader = cursorOffset.getHeaderRelative(referenceHeight);

    setRelativeOffset(relativeToHeader);
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      {charactersFound.map((char) => (
        <Reticle
          key={char.id}
          xPos={char.x * 100}
          yPos={char.y * 100 - relativeOffset}
          src={target100}
        />
      ))}
    </>
  );
};

TargetFound.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      found: PropTypes.bool,
    })
  ),
};

const Reticle = styled.div`
  position: absolute;
  top: ${(props) => props.yPos}%;
  left: ${(props) => props.xPos}%;
  width: 100px;
  height: 100px;
  margin-top: -50px;
  margin-left: -50px;
  background-image: url('${(props) => props.src}');
`;

export default TargetFound;
