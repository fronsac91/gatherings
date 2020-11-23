import React from 'react';

import InputContainer from '../../UI/Layout/InputContainer';
import InputBox from '../../UI/Layout/InputBox';
import Label from '../../UI/Input/Label';
import InputText from '../../UI/Input/Fields/InputText';
import ErrorLabel from '../../UI/Input/ErrorLabel';
import CharLimit from '../../UI/Input/CharLimit';

const Description = ({ staticData, storeData, changeHandler, touchedHandler }) => {
  const { errorText } = staticData.fields.description;
  const { isTouched, isValid } = storeData;

  const errorMessage = !isValid && isTouched && <ErrorLabel errorText={errorText} />;
  
  const charLimitComponent = staticData.fields.description.charLimit
    ? <CharLimit
        limitValue={staticData.fields.description.charLimit}
        value={storeData.inputAttributes.value} />
    : null;

  return (
    <InputContainer>
      <Label
        id={staticData.label}
        label={staticData.label}
        isRequired={staticData.isRequired} />

      <InputBox>
        <InputText
          staticData={staticData.fields.description}
          value={storeData.inputAttributes.value}
          changeHandler={(event) => changeHandler(event.target.value)}
          touchedHandler={touchedHandler} />

        { charLimitComponent }
      </InputBox>

      { errorMessage }
    </InputContainer>
  );
}

export default Description;
