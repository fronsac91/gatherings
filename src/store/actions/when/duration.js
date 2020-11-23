import * as actionTypes from '../actionTypes';

export const setDuration = (value) => {
  return {
    type: actionTypes.SET_DURATION,
    value: value
  };
};
