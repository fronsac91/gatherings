import React, { Fragment } from 'react';
import styled from 'styled-components';

import { InputElement } from './StyleInput';

export const InputRadioElement = styled(InputElement)`
  display: inline-block;
  width: 40px;
  margin: 0 0 0 -7px;
  position: relative;  
  margin-top: 3px;
`;

const RadioButtonContainer = styled(InputElement)`
  display: inline-block;
  width: 120px;
  position: relative;
  top: 3px;
  border: none;
`;

const InputRadio = ({ staticData, value, changeHandler }) => {
    const radioElements = staticData.radioElementData.options
      .map(option => {
        return (
          <Fragment key={`${staticData.inputAttributes.id}-${option.labelText}`}>
            <InputRadioElement
              type={staticData.inputAttributes.type}
              id={option.labelText}
              name={staticData.radioElementData.name}
              value={option.value}
              checked={value === option.value}
              onChange={() => {}}
            />

            <label htmlFor={option.labelText}>
              {option.labelText}
            </label>
          </Fragment>
        );
      });
  
    const inputElement = (
      <RadioButtonContainer as="div" onChange={changeHandler}>
        { radioElements }
      </RadioButtonContainer>
    );
  
    return inputElement;
  }

export default InputRadio;