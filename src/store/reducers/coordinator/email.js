import * as actionTypes from '../../actions/actionTypes';
import { validate } from '../../../utils/validators';
import * as formData from '../../../formData';

const initialState = {
  inputAttributes: {
    value: ''
  },
  isTouched: false,
  isValid: true
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case (actionTypes.SET_EMAIL):
      const isValid = action.value.length === 0 || validate(action.value, formData.email.fields.email.validators);

      const updatedInputAttributes = {
        ...state.inputAttributes,
        value: action.value
      };

      return {
        ...state,
        inputAttributes: updatedInputAttributes,
        isValid: isValid
      };
    case (actionTypes.TOUCH_EMAIL):
      return {
        ...state,
        isTouched: true
      };
    default:
      return state;
  }
}

export default reducer;