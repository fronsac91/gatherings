import React from 'react';
import styled from 'styled-components';

const LabelElement = styled.label`
  display: block;
  margin: 4px 0;
  color: #B6B6B6;
  vertical-align: top;
  position: relative;
  top: 3px;

  @media only screen and (min-width: 575px) {
    display: inline-block;
    width: 110px;
    margin: 0 auto;
  }
`;

const Label = ({ id, label, isRequired }) => {
  return (
    <LabelElement
      htmlFor={id}
    >
      {label.toUpperCase()}
      {isRequired ? "*" : null}
    </LabelElement>
  );
}

export default Label;
