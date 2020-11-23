import React from 'react';
import styled from 'styled-components';

const InputBoxElement = styled.div`
  display: inline-block;
  width: 100%;

  @media only screen and (min-width: 575px) {
    width: 70%;
    float: right;
  }

  @media only screen and (min-width: 800px) {
    width: 50%;
    float: none;
  }  
`;

const InputBox = ({ children }) => {
  return (
    <InputBoxElement>
      {children}
    </InputBoxElement>
  );
}

export default InputBox;
