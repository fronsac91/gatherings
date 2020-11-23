import * as actionTypes from '../../actions/actionTypes';
import { duration } from '../../../formData';

const initialState = {
  inputAttributes: {
    value: ''
  }
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case (actionTypes.SET_DURATION):
      // workaround: using text instead of number
      //   and filter out '+', '-', 'e' characters
      let value = action.value.replace(/\D/g,'');

      value = (value === '') ? '' : parseInt(value);

      if (duration.max && value > duration.max) {
        value = duration.max
      } else if (duration.min && value < duration.min) {
        value = duration.min
      }      

      const updatedInputAttributes = {
        ...state.inputAttributes,
        value: value
      };

      return {
        ...state,
        inputAttributes: updatedInputAttributes
      };
    default:
      return state;
  }
}

export default reducer;
