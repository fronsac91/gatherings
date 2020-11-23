import React from 'react';

import InputContainer from '../../UI/Layout/InputContainer';
import InputBox from '../../UI/Layout/InputBox';
import Label from '../../UI/Input/Label';
import InputText from '../../UI/Input/Fields/InputText';
import BlankLabel from '../../UI/Input/BlankLabel';

const Reward = ({ staticData, storeData, changeHandler }) => {
  const value = storeData.inputAttributes.value;
  const rewardFieldData = staticData.fields.reward;
  const pointsMessageData = staticData.fields.points;
  let pointsMessage;

  if (value === '' || value > 1) {
    pointsMessage = pointsMessageData.plural
  } else {
    pointsMessage = pointsMessageData.singular
  }

  const widthPercent = 100 - rewardFieldData.widthPercent;
  const blanklabelComponent = (
    <BlankLabel
      text={pointsMessage}
      widthPercent={widthPercent} />);

  return (
    <InputContainer>
      <Label
        id={staticData.label}
        label={staticData.label} />

      <InputBox>
        <InputText
          staticData={rewardFieldData}
          value={storeData.inputAttributes.value}
          changeHandler={(event) => changeHandler(event.target.value)} />

        { blanklabelComponent }
      </InputBox>
    </InputContainer>
  );
}

export default Reward;
