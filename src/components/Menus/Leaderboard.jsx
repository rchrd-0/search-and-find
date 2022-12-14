import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as Menu from '../Styled/Menu';
import * as formatTime from '../../helpers/formatTime';
import gold from '../../assets/icons/crown.svg';
import silver from '../../assets/icons/medal-silver.svg';
import bronze from '../../assets/icons/medal-bronze.svg';

const Leaderboard = (props) => {
  const { data } = props;

  const stylePodium = (position) => {
    if (position === 1) {
      return <Podium src={gold} />;
    }
    if (position === 2) {
      return <Podium src={silver} />;
    }
    if (position === 3) {
      return <Podium src={bronze} />;
    }
    return <Position>{position}</Position>;
  };

  return (
    <Layout>
      <Menu.Subheader>Leaderboard (Top 10)</Menu.Subheader>
      <List>
        {data.map((item, index) => (
          <ListItem key={item.id}>
            {stylePodium(index + 1)}
            <Name>{item.name.toUpperCase()}</Name>{' '}
            <Time>{formatTime.score(item.score)}</Time>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

Leaderboard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      score: PropTypes.number,
    })
  ),
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
  font-size: 1.3rem;
  padding: 0 42px;
`;

const Position = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
`;

const Podium = styled(Position)`
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Name = styled.h3`
  justify-self: center;
  font-weight: 500;
`;

const Time = styled.p`
  font-family: ${(props) => props.theme.font.mono};
  font-size: 1.2rem;
  align-self: center;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 30px 80px 1fr;
  column-gap: 8px;
`;

export default Leaderboard;
