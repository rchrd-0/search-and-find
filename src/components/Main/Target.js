import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import target100 from '../../assets/images/target100.svg';
import cursor100 from '../../assets/images/cursor100.svg';

const Target = (props) => {
  const { target } = props;
  return <StyledTarget yAxis={target.y} xAxis={target.x} src={cursor100} />;
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
