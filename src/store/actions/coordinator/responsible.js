import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const setResponsible = (value) => {
  return {
    type: actionTypes.SET_RESPONSIBLE_PERSON,
    value: value
  };
}

export const fetchResponsible = (usersUrl) => {
  return dispatch => {
    axios.get(usersUrl)
      .then(response => {
        dispatch(loadResponsible(response.data));
      })
      .catch(error => {
        console.log("Responsible fetching error")
      });

  };
};

export const loadResponsible = (responsible) => {
  return {
    type: actionTypes.LOAD_ALL_USERS,
    responsible: responsible
  };
};