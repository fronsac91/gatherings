import React from 'react';

import InputContainer from '../../UI/Layout/InputContainer';
import InputBox from '../../UI/Layout/InputBox';
import Label from '../../UI/Input/Label';
import Select from '../../UI/Input/Fields/Select';

const Category = ({ staticData, storeData, changeHandler, fetchHandler, submitAttr }) => {
  return (
    <InputContainer>
      <Label
        id={staticData.label}
        label={staticData.label} />

      <InputBox>
        <Select
          staticData={staticData.fields.category}
          storeData={storeData}
          changeHandler={(event) => changeHandler(event.target.value)}
          fetchHandler={fetchHandler}
          submitAttr={submitAttr} />
      </InputBox>
    </InputContainer>
  );
}

export default Category;
