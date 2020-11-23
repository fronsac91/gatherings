import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  inputAttributes: {
    isPaidEvent: false,
    amount: ''
  },
  isValid: true,
  isAmountTouched: false
};

const reducer = (state=initialState, action) => {
  let updatedInputAttributes;
  let isValid;
  let {isPaidEvent, amount} = state.inputAttributes;

  switch(action.type) {
    case (actionTypes.SET_PAYMENT_IS_PAID):
      updatedInputAttributes = {
        ...state.inputAttributes,
        isPaidEvent: action.value === "true" ? true : false
      };

      let newState = {
        ...state,
        inputAttributes: updatedInputAttributes
      };

      isPaidEvent = newState.inputAttributes.isPaidEvent;
      isValid = !isPaidEvent || amount.length > 0;

      return {
        ...newState,
        isValid: isValid
      };
    case (actionTypes.SET_PAYMENT_AMOUNT):
      // workaround: using text instead of number
      //   and filter out '+', '-', 'e' characters
      let value = action.value.replace(/\D/g,'');

      isValid = !state.inputAttributes.isPaidEvent || value.length > 0;

      updatedInputAttributes = {
        ...state.inputAttributes,
        amount: value
      };

      return {
        ...state,
        inputAttributes: updatedInputAttributes,
        isValid: isValid
      };
    case (actionTypes.TOUCH_PAYMENT_AMOUNT):
      updatedInputAttributes = {
        ...state.inputAttributes
      };

      return {
        ...state,
        inputAttributes: updatedInputAttributes,
        isAmountTouched: true
      };
    default:
      return state;
  }
}

export default reducer;