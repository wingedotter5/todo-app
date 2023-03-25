import React from "react";
import styled from "styled-components";

const StyledComponent = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: #333;
  position: relative;

  &:checked:after {
    content: "✔";
    color: white;
    width: 20px;
    height: 20px;
    background: var(--check-background);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`;

interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <StyledComponent type="checkbox" checked={checked} onChange={onChange} />
  );
};
export default Checkbox;
