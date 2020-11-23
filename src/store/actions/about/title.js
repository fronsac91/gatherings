import * as actionTypes from '../actionTypes';

export const setTitle = (value) => {
  return {
    type: actionTypes.SET_TITLE,
    value: value
  };
}

export const touchTitle = () => {
  return {
    type: actionTypes.TOUCH_TITLE
  };
}