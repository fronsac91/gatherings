import * as actionTypes from '../actionTypes';

export const setDescription = (value) => {
  return {
    type: actionTypes.SET_DESCRIPTION,
    value: value
  };
}

export const touchDescription = () => {
  return {
    type: actionTypes.TOUCH_DESCRIPTION
  };
}