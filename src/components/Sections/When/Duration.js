import React from 'react';

import InputContainer from '../../UI/Layout/InputContainer';
import InputBox from '../../UI/Layout/InputBox';
import Label from '../../UI/Input/Label';
import InputText from '../../UI/Input/Fields/InputText';
import BlankLabel from '../../UI/Input/BlankLabel';

const Duration = ({ staticData, storeData, changeHandler, touchedHandler }) => {
  //console.log("duration: " + JSON.stringify(storeData, null, 2));
  const value = storeData.inputAttributes.value;
  const durationFieldData = staticData.fields.duration;
  const hoursMessageData = staticData.fields.hours;
  
  let hoursMessage;
  if (value === '' || value > 1) {
    hoursMessage = hoursMessageData.plural
  } else {
    hoursMessage = hoursMessageData.singular
  }
  const widthPercent = 100 - durationFieldData.widthPercent;
  const blankLabelComponent = (
    <BlankLabel
      text={hoursMessage}
      widthPercent={widthPercent} />);

  return (
    <InputContainer>
      <Label
        id={staticData.label}
        label={staticData.label} />

      <InputBox>
        <InputText
          staticData={staticData.fields.duration}
          value={storeData.inputAttributes.value}
          changeHandler={(event) => changeHandler(event.target.value)}
          touchedHandler={touchedHandler} />

        { blankLabelComponent }
      </InputBox>
    </InputContainer>
  );
}

export default Duration;
