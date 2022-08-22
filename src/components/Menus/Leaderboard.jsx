import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Leaderboard = (props) => {
  const { data } = props;
  return (
    <Layout>
      <List>
        {data.map((item) => (
          <li key={item.id}>
            {item.name.toUpperCase()} {item.score}
          </li>
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

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default Leaderboard;
