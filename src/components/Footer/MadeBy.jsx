import React from 'react';
import styled from 'styled-components';

import CreditPill from './CreditPill';
import Link from './Link';
import github from '../../assets/icons/github.svg';

const MadeBy = () => {
  return (
    <CreditPill>
      Made by&nbsp;
      <Link
        textColor="psGreen"
        href="https://github.com/rchrd-0"
        target="_blank"
      >
        <Github src={github} />
        &nbsp;RCHRD&nbsp;
      </Link>{' '}
      for&nbsp;
      <Link
        textColor="psGreen"
        href="https://theodinproject.com"
        target="_blank"
      >
        The Odin Project
      </Link>
    </CreditPill>
  );
};

const Github = styled.img`
  width: 24px;
  height: auto;
`;

export default MadeBy;
