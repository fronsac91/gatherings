import React, { Fragment } from 'react';

import InputContainer from '../../UI/Layout/InputContainer';
import InputBox from '../../UI/Layout/InputBox';
import Label from '../../UI/Input/Label';
import InputRadio from '../../UI/Input/Fields/InputRadio';
import InputText from '../../UI/Input/Fields/InputText';
import BlankLabel from '../../UI/Input/BlankLabel';
import ErrorLabel from '../../UI/Input/ErrorLabel';

const Payment = ({ staticData, storeData, changeIsPaidEventHandler, changeAmountHandler, touchAmountHandler }) => {
  let paymentAmount = null;
  if (storeData.inputAttributes.isPaidEvent) {
    const { isAmountValid, isAmountTouched } = storeData.inputAttributes;
    const { errorText } = staticData.fields.amount;

    const errorMessage = !isAmountValid && isAmountTouched && <ErrorLabel errorText={errorText} />;

    paymentAmount = (
      <Fragment>
        <InputText
          staticData={staticData.fields.amount}
          value={storeData.inputAttributes.amount}
          changeHandler={(event) => changeAmountHandler(event.target.value)}
          touchedHandler={touchAmountHandler} />
    
        <BlankLabel text={staticData.fields.blankLabel} />

        { errorMessage }
      </Fragment>
    );
  }

  return (
    <InputContainer>
      <Label
        id={staticData.label}
        label={staticData.label} />

      <InputBox>
        <InputRadio
          staticData={staticData.fields.isPaidEvent}
          value={storeData.inputAttributes.isPaidEvent}
          changeHandler={(event) => changeIsPaidEventHandler(event.target.value)} />

        { paymentAmount }
      </InputBox>
    </InputContainer>
  );
}

export default Payment;
