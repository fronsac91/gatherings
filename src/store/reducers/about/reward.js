import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  inputAttributes: {
    value: ''
  }
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case (actionTypes.SET_REWARD):
      // workaround: using text instead of number
      //   and filter out '+', '-', 'e' characters
      let value = action.value.replace(/\D/g,'');
      value = (value === '') ? '' : parseInt(value);

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
