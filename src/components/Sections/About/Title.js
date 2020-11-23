import React from 'react';

import InputContainer from '../../UI/Layout/InputContainer';
import InputBox from '../../UI/Layout/InputBox';
import Label from '../../UI/Input/Label';
import InputText from '../../UI/Input/Fields/InputText';
import ErrorLabel from '../../UI/Input/ErrorLabel';

const Title = ({ staticData, storeData, changeHandler, touchedHandler }) => {
  const { errorText } = staticData.fields.title;
  const { isTouched, isValid } = storeData;

  const errorMessage = !isValid && isTouched && <ErrorLabel errorText={errorText} />;

  return (
    <InputContainer>
      <Label
        id={staticData.label}
        label={staticData.label}
        isRequired={staticData.isRequired} />

      <InputBox>
        <InputText
          staticData={staticData.fields.title}
          value={storeData.inputAttributes.value}
          changeHandler={(event) => changeHandler(event.target.value)}
          touchedHandler={touchedHandler} />
      </InputBox>

      { errorMessage }
    </InputContainer>
  );
}

export default Title;
