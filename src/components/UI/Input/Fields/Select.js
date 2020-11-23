import React, { Fragment } from 'react';
import styled from 'styled-components';

import { InputElement } from './StyleInput';

const SelectElement = styled(InputElement)`
  position: relative;  
  margin-top: 3px;
  padding: 2px 4px;
  border: solid 1.5px #e0e0e0;
`;

const OptionGroupElement = styled.optgroup`
  background-color: #f0f0f0;
`;

const OptionElement = styled.option`
  background-color: #f0f0f0;
  color: #383838;
`;

const Select = ({ staticData, storeData, changeHandler, fetchHandler, submitAttr="id" }) => {
    React.useEffect(() => {
      fetchHandler(staticData.optionsUrl);
    }, [ fetchHandler, staticData.optionsUrl ]);
  
    let selectOptions;
    
    if (storeData.options) {
      selectOptions = (
        <Fragment>
          <option value="" disabled defaultValue hidden>
            { staticData.defaultOption }
          </option>
    
          {storeData.options.map(option =>
            <option key={option.id} value={option[submitAttr]}>
              {option.name}
            </option>
          )}
        </Fragment>
      );
    }

    if (storeData.optionsGroupData) {
      selectOptions = storeData.optionsGroupData
        .map(optionGroup => (
          <OptionGroupElement key={optionGroup.groupName} label={optionGroup.groupName}>
            {optionGroup.options.map(option =>
              <OptionElement
                key={option.id}
                value={option[submitAttr]}>
                {`${option.name} ${option.lastname}`}
              </OptionElement>
            )}
          </OptionGroupElement>)
        );
    }

    const selectElement = (
      <SelectElement
        as={ staticData.tagName }
        { ...staticData.inputAttributes }
        { ...storeData.inputAttributes }
        onChange={changeHandler}
        fetchHandler={fetchHandler}
      >
        { selectOptions }
      </SelectElement>
    );
  
    return selectElement;
  }

export default Select;