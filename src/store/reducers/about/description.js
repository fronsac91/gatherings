import * as actionTypes from '../../actions/actionTypes';
import { validate } from '../../../utils/validators';
import * as formData from '../../../formData';

const initialState = {
  inputAttributes: {
    value: ''
  },
  isTouched: false,
  isValid: false
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case (actionTypes.SET_DESCRIPTION):
      const description = formData.description.fields.description;
      const isValid = validate(action.value, description.validators);

      const value = action.value.length > description.charLimit
        ? action.value.slice(0, description.charLimit)
        : action.value;

      const updatedInputAttributes = {
        ...state.inputAttributes,
        value: value
      };

      return {
        ...state,
        inputAttributes: updatedInputAttributes,
        isValid: isValid
      };
    case (actionTypes.TOUCH_DESCRIPTION):
      return {
        ...state,
        isTouched: true
      };
    default:
      return state;
  }
}

export default reducer;