import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import importAll from '../../helpers/importAll';

const Dropdown = (props) => {
  const { characters, active } = props;
  const imgs = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <DropdownMenu active={active}>
      {characters.map((item) => (
        <Character key={item.id} found={item.found}>
          <Image img={imgs[`${item.img}.png`]} found={item.found} />
          {item.name}
        </Character>
      ))}
    </DropdownMenu>
  );
};

Dropdown.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      found: PropTypes.bool,
    })
  ),
  active: PropTypes.bool,
};

const DropdownMenu = styled.ul`
  position: fixed;
  top: 70px;
  right: 20px;
  padding: 12px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1;
  color: white;
  font-size: 1.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.darkGray};
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

const Image = styled.img`
  width: 36px;
  height: auto;
  content: url('${(props) => props.img}');
  filter: ${(props) => (props.found ? 'brightness(0.3)' : 'none')};
  transition: filter 0.3s ease-in-out;
`;

const Character = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: ${(props) => (props.found ? 'line-through' : 'none')};
  text-decoration-thickness: 3px;

  &:nth-of-type(1) {
    text-decoration-color: #df0024;
  }
  &:nth-of-type(2) {
    text-decoration-color: #f2c300;
  }
  &:nth-of-type(3) {
    text-decoration-color: #05ac9f;
  }
  &:nth-of-type(4) {
    text-decoration-color: #2e6db4;
  }
  &:nth-of-type(5) {
    text-decoration-color: black;
  }
`;

export default Dropdown;
