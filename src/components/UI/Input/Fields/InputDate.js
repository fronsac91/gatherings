import React from 'react';
import styled from 'styled-components';

import { InputElement } from './StyleInput';

export const InputDateElement = styled(InputElement)`
  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  display: inline-block;
  width: 30%;
  padding: 2px 4px;
`;

const InputDate = ({ staticData, value, changeHandler }) => {
  const args = {
    as: staticData.tagName,
    ...staticData.inputAttributes,
    value,
    onChange: changeHandler
  };

  return <InputDateElement { ...args } />;
}

export default InputDate;