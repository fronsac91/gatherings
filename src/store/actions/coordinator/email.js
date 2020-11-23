import * as actionTypes from '../actionTypes';

export const setEmail = (value) => {
  return {
    type: actionTypes.SET_EMAIL,
    value: value
  };
}

export const touchEmail = () => {
  return {
    type: actionTypes.TOUCH_EMAIL
  };
}