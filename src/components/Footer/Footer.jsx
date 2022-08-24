import React from 'react';
import styled from 'styled-components';

import MadeBy from './MadeBy';

const Footer = () => {
  return (
    <FooterLayout>
      <MadeBy />
    </FooterLayout>
  );
};

const FooterLayout = styled.footer`
  justify-content: flex-end;
  display: flex;
  position: fixed;
  bottom: 10px;
  right: 20px;
  gap: 40px;
`;

export default Footer;
