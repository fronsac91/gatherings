import React from 'react';

import InputContainer from '../../UI/Layout/InputContainer';
import InputBox from '../../UI/Layout/InputBox';
import Label from '../../UI/Input/Label';
import InputDate from '../../UI/Input/Fields/InputDate';
import InputTime from '../../UI/Input/Fields/InputTime';
import InputRadio from '../../UI/Input/Fields/InputRadio';
import BlankLabel from '../../UI/Input/BlankLabel';

const StartsOn = ({ staticData, storeData, changeDateHandler, changeTimeHandler, changeIsAmHandler }) => {
  return (
    <InputContainer>
      <Label
        id={staticData.label}
        label={staticData.label} 
        isRequired={staticData.isRequired} />

      <InputBox>
        <InputDate
          staticData={staticData.fields.date}
          value={storeData.inputAttributes.value}
          changeHandler={(event) => changeDateHandler(event.target.value)} />

        <BlankLabel text={staticData.fields.atLabel.text} />

        <InputTime
          staticData={staticData.fields.time}
          value={storeData.inputAttributes.time}
          changeHandler={(event) => changeTimeHandler(event.target.value)} />

        <InputRadio
          staticData={staticData.fields.isAm}
          value={storeData.inputAttributes.isAm}
          changeHandler={(event) => changeIsAmHandler(event.target.value)} />
      </InputBox>
    </InputContainer>
  );
}

export default StartsOn;
