import styled from "styled-components";

interface ButtonProps {
  active?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  color: ${(props) =>
    props.active ? "var(--bright-blue)" : "var(--list-color)"};
`;
export default Button;
