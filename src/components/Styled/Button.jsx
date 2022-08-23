import styled from 'styled-components';

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.1s ease-in-out;

  &:active {
    filter: brightness(0.7);
    transition: all 0.1s ease-in-out;
  }
`;

export default Button;
