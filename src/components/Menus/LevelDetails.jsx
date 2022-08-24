import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as Menu from '../Styled/Menu';
import importAll from '../../helpers/importAll';

const LevelDetails = (props) => {
  const { charList } = props;

  const imgs = importAll(
    require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <Details>
      <Menu.Subheader>Characters</Menu.Subheader>
      <CharacterList>
        {charList.map((item) => (
          <Character key={item.id}>
            <CharacterImage img={imgs[`${item.img}-1.png`]} />
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
`;

const CharacterList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 12px;
`;

const Character = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  gap: 32px;
`;

const CharacterImage = styled.img`
  content: url('${(props) => props.img}');
  width: 50px;
  height: auto;
`;

export default LevelDetails;
