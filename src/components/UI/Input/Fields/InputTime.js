import React from 'react';
import styled from 'styled-components';

import { InputElement } from './StyleInput';

export const InputTimeElement = styled(InputElement)`
  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  display: inline-block;
  width: 15%;
  padding: 2px 4px;
`;

const InputTime = ({ staticData, value, changeHandler }) => {
  const args = {
    as: staticData.tagName,
    ...staticData.inputAttributes,
    value,
    onChange: changeHandler
  };

  return <InputTimeElement className="unstyled" { ...args } />;
}

export default InputTime;