import styled from 'styled-components';

const CreditPill = styled.div`
  display: flex;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.menuBg};
  color: ${(props) => props.theme.color.menuText};
  box-shadow: ${(props) => props.theme.menuShadow};
  padding: 10px 12px;
  user-select: none;
`;

export default CreditPill;
