import styled from 'styled-components';

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.darkText};
  background-color: #c7c9d3;
  transition: all 0.1s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  &:active {
    filter: brightness(0.7);
    transition: all 0.1s ease-in-out;
  }
`;

export default Button;
