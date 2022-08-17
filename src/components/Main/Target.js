import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import target100 from '../../assets/icons/target100.svg';

const Target = (props) => {
  const { target } = props;
  return <StyledTarget yAxis={target.y} xAxis={target.x} src={target100} />;
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
  width: 130px;
  height: 130px;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  cursor: auto;
`;

export default Target;
