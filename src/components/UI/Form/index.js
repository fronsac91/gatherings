import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  font-size: 14px;
  max-width: 800px;

  @media only screen and (min-width: 575px) {
    width: 75%;
    margin: 0 auto;
  }
`;

const Form = ({ children, submitHandler }) => {
  return (
    <FormContainer onSubmit={submitHandler}>
       { children }
    </FormContainer>
  );
}

export default Form;