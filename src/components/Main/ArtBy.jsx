import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CreditPill from '../Footer/CreditPill';
import Link from '../Footer/Link';
import instagram from '../../assets/icons/instagram.svg';

const ArtBy = (props) => {
  const { level } = props;

  const accentColor = level === 'snes' || level === 'n64' ? 'softRed' : level;

  return (
    <CarouselPill>
      Illustrations & art by&nbsp;
      <Link
        textColor={accentColor}
        href="https://www.instagram.com/_itspear/"
        target="_blank"
      >
        <Instagram src={instagram} filter={accentColor} />
        &nbsp;Pierre Roussel&nbsp;
      </Link>
    </CarouselPill>
  );
};

ArtBy.propTypes = {
  level: PropTypes.string,
};

const CarouselPill = styled(CreditPill)`
  grid-area: 3 / 2 / span 1 / span 1;
`;

const Instagram = styled.img`
  width: 24px;
  height: auto;
  filter: ${(props) => props.theme.iconFilter[props.filter]};
  transition: filter 0.2s ease-in-out;
`;

export default ArtBy;
