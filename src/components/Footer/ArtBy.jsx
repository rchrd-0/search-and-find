import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CreditPill from './CreditPill';
import Link from './Link';
import instagram from '../../assets/icons/instagram.svg';
import instagramPurple from '../../assets/icons/instagram-purple.svg';
import instagramBlue from '../../assets/icons/instagram-blue.svg';

const ArtBy = (props) => {
  const { level } = props;

  const accentColor = level === 'snes' || level === 'n64' ? 'softRed' : level;
  const instaIcon = (lvl) => {
    if (level === 'ps1') {
      return instagramPurple;
    }
    if (level === 'dreamcast') {
      return instagramBlue;
    }
    return instagram;
  };

  return (
    <CreditPill>
      Illustrations & art by&nbsp;
      <Link
        textColor={accentColor}
        href="https://www.instagram.com/_itspear/"
        target="_blank"
      >
        <Instagram src={instaIcon(level)} />
        &nbsp;Pierre Roussel&nbsp;
      </Link>{' '}
    </CreditPill>
  );
};

ArtBy.propTypes = {
  level: PropTypes.string,
};

const Instagram = styled.img`
  width: 24px;
  height: auto;
`;

export default ArtBy;
