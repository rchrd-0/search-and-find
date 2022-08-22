import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as formatTime from '../../helpers/formatTime';

const Leaderboard = (props) => {
  const { data } = props;

  return (
    <Layout>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            {item.name.toUpperCase()} {formatTime.score(item.score)}
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
`;

const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListItem = styled.li`
  /* &::marker {
    color: blue;
  } */
`;

export default Leaderboard;
