import styled from 'styled-components';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  /* border-radius: 8px; */
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px; */
  align-self: center;
  gap: 30px;
`;

export { Page, Header, Container };
