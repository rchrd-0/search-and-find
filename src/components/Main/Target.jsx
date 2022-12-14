import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import target64 from '../../assets/icons/target64.svg';

const Target = (props) => {
  const { target } = props;

  return <StyledTarget target={target} src={target64} />;
};

Target.propTypes = {
  target: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

const StyledTarget = styled.div`
  position: absolute;
  top: ${(props) => props.target.y}%;
  left: ${(props) => props.target.x}%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  cursor: auto;
`;

export default Target;
