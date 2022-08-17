import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import target64 from '../../assets/icons/target64.svg';
// import cursor64 from '../../assets/icons/cursor64.svg';
import * as cursorOffset from '../../helpers/cursorOffset';

const Target = (props) => {
  const { target } = props;
  const offset = cursorOffset.getTargetOffset();
  return (
    <StyledTarget
      yAxis={target.y}
      yOffset={offset.y}
      xAxis={target.x}
      xOffset={offset.x}
      src={target64}
    />
  );
};

Target.propTypes = {
  target: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

const StyledTarget = styled.div`
  position: absolute;
  top: calc(${(props) => props.yAxis}% - ${(props) => props.yOffset}px);
  left: calc(${(props) => props.xAxis}% - ${(props) => props.xOffset}px);
  width: 64px;
  height: 64px;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  cursor: auto;
`;

export default Target;
