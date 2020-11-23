import React from 'react';
import styled from 'styled-components';

const ErrorLabelElement = styled.p`
  display: block;
  margin: 8px 0;
  padding: 3px 10px;
  border-radius: 2px;
  background-color: red;
  color: white;

  @media only screen and (min-width: 575px) {
    display: inline-block;
    float: right;
    width: 70%;
  }

  @media only screen and (min-width: 800px) {
    display: inline-block;
    margin: 0 0 0 2px;
    width: 28%;
  }
`;

const ErrorLabel = ({ errorText }) => {
  return (
    <ErrorLabelElement>
      {errorText}
    </ErrorLabelElement>
  );
}

export default ErrorLabel;
