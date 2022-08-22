import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../Styled/Button';
import importAll from '../../helpers/importAll';
import getLevelManifest from '../../assets/levelManifest';

const LevelDetails = (props) => {
  const { charList } = props;

  const imgs = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <Details>
      <CharacterList>
        {charList.map((item) => (
          <Character key={item.id}>
            <CharacterImage img={imgs[`${item.img}.png`]} />
            {item.name}
          </Character>
        ))}
      </CharacterList>
    </Details>
  );
};

LevelDetails.propTypes = {
  charList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
    })
  ),
};

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 400px; */
  /* background-color: ${(props) => props.theme.color.gray}; */
  /* border-radius: 8px; */
  gap: 24px;
  /* box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px; */
`;

const CharacterList = styled.ul``;

const Character = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  gap: 20px;
`;

const CharacterImage = styled.img`
  content: url('${(props) => props.img}');
  width: 42px;
  height: auto;
`;

export default LevelDetails;
