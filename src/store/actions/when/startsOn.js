import * as actionTypes from '../actionTypes';

export const setDate = (value) => {
  return {
    type: actionTypes.SET_DATE,
    value: value
  };
};

export const setTime = (value) => {
  return {
    type: actionTypes.SET_TIME,
    value: value
  };
};

export const setIsAm = (value) => {
  return {
    type: actionTypes.SET_IS_AM,
    value: value
  };
};
    