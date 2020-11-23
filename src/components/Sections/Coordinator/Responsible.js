import React from 'react';

import InputContainer from '../../UI/Layout/InputContainer';
import InputBox from '../../UI/Layout/InputBox';
import Label from '../../UI/Input/Label';
import Select from '../../UI/Input/Fields/Select';

const Responsible = ({ staticData, storeData, loggedInUser, changeHandler, fetchHandler }) => {
  return (
    <InputContainer>
      <Label
        id={staticData.label}
        label={staticData.label}
        isRequired={staticData.isRequired} />

      <InputBox>
        <Select
          staticData={staticData.fields.responsible}
          storeData={storeData}
          loggedInUser={loggedInUser}
          changeHandler={(event) => changeHandler(event.target.value)}
          fetchHandler={fetchHandler} />
      </InputBox>
    </InputContainer>
  );
}

export default Responsible;
