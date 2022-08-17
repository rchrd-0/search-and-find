import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import target64 from '../../assets/icons/target64.svg';
// import cursor64 from '../../assets/icons/cursor64.svg';

const Target = (props) => {
  const { target } = props;
  return <StyledTarget yAxis={target.y} xAxis={target.x} src={target64} />;
};

Target.propTypes = {
  target: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

const StyledTarget = styled.div`
  position: absolute;
  top: ${(props) => props.yAxis}px;
  left: ${(props) => props.xAxis}px;
  width: 64px;
  height: 64px;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  cursor: auto;
`;

export default Target;
