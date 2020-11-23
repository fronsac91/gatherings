import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  display: block;
  width: 300px;
  margin: 12px auto 36px;
  padding: 12px;
  background-color: #3e7a37;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #2f612a;
  }

  &:disabled,
  &:hover:disabled,
  &:active:disabled {
    background-color: #fd8d1c;
    color: #white;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

const Button = ({ type, disabled, children }) => {
  return (
    <ButtonComponent type={type} disabled={disabled} >
      {children}        
    </ButtonComponent>
  );
}

export default Button;