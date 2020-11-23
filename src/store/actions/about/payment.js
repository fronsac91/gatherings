import * as actionTypes from '../actionTypes';

export const setIsPaidEvent = (value) => {
  return {
    type: actionTypes.SET_PAYMENT_IS_PAID,
    value: value
  };
};

export const setPaymentAmount = (value) => {
  return {
    type: actionTypes.SET_PAYMENT_AMOUNT,
    value: value
  };
};

export const touchPaymentAmount = () => {
  return {
    type: actionTypes.TOUCH_PAYMENT_AMOUNT
  };
};
