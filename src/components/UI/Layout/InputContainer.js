import React from 'react';
import styled from 'styled-components';

const InputContainerElement = styled.div`
  margin: 24px 0;

  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const InputContainer = (props) => {
  return (
    <InputContainerElement>
      {props.children}
    </InputContainerElement>
  );
}

export default InputContainer;
