import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import importAll from '../../helpers/importAll';

const Dropdown = (props) => {
  const { characters } = props;
  const imgs = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <DropdownMenu>
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
};

const DropdownMenu = styled.ul`
  position: fixed;
  top: 70px;
  right: 10px;
  border-radius: 8px;
  background-color: pink;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 18px;
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
`;

export default Dropdown;
