import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  inputAttributes: {
    value: ''
  },
  options: []
};

const reducer = (state=initialState, action) => {
  let updatedInputAttributes;

  switch(action.type) {
    case (actionTypes.LOAD_CATEGORIES):
      return {
        ...state,
        options: action.categories
      };
    case (actionTypes.SET_CATEGORY):
      updatedInputAttributes = {
        ...state.inputAttributes,
        value: action.value
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
