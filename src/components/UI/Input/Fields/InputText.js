import React from 'react';

import { InputElement, InputElementResized } from './StyleInput';


const InputText = ({ staticData, value, changeHandler, touchedHandler }) => {
  const args = {
    as: staticData.tagName,
    ...staticData.inputAttributes,
    value,
    onChange: changeHandler,
    onBlur: touchedHandler
  };

  let inputElement;
  if (staticData.widthPercent) {
    inputElement = <InputElementResized widthPercent={staticData.widthPercent} { ...args } />;
  } else {
    inputElement = <InputElement { ...args } />;
  }


  return inputElement;
}

export default InputText;