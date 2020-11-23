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
    case (actionTypes.SET_TITLE):
      const isValid = validate(action.value, formData.title.fields.title.validators);

      const updatedInputAttributes = {
        ...state.inputAttributes,
        value: action.value
      };

      return {
        ...state,
        inputAttributes: updatedInputAttributes,
        isValid: isValid
      };
    case (actionTypes.TOUCH_TITLE):
      return {
        ...state,
        isTouched: true
      };
    default:
      return state;
  }
}

export default reducer;
