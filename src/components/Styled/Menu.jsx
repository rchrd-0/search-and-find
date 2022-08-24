import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  justify-content: center;
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`;

const Subheader = styled.h2`
  font-size: 1.7rem;
  font-weight: 500;
`;

const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

export { Page, Header, Container, Subheader };
