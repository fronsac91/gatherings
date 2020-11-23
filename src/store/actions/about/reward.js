import * as actionTypes from '../actionTypes';

export const setReward = (value) => {
  return {
    type: actionTypes.SET_REWARD,
    value: value
  };
}
