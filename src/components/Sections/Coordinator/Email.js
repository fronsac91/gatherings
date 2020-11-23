import React from 'react';

import InputContainer from '../../UI/Layout/InputContainer';
import InputBox from '../../UI/Layout/InputBox';
import Label from '../../UI/Input/Label';
import InputText from '../../UI/Input/Fields/InputText';
import ErrorLabel from '../../UI/Input/ErrorLabel';

const Email = ({ staticData, storeData, changeHandler, touchedHandler }) => {
  const { errorText } = staticData.fields.email;
  const { isValid } = storeData;
  const value = storeData.inputAttributes.value;

  const errorMessage = value.length > 0 && !isValid && <ErrorLabel errorText={errorText} />;

  return (
    <InputContainer>
      <Label
        id={staticData.label}
        label={staticData.label} />

      <InputBox>
        <InputText
          staticData={staticData.fields.email}
          value={storeData.inputAttributes.value}
          changeHandler={(event) => changeHandler(event.target.value)}
          touchedHandler={touchedHandler} />
      </InputBox>

      { errorMessage }
    </InputContainer>
  );
}

export default Email;
