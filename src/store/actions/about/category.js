import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const setCategory = (value) => {
  return {
    type: actionTypes.SET_CATEGORY,
    value: value
  };
}

export const fetchCategories = (optionsUrl) => {
  return dispatch => {
    axios.get(optionsUrl)
      .then(response => {
        dispatch(loadCategories(response.data));
      })
      .catch(error => {
        console.log("error")
      });
  };
};

export const loadCategories = (categories) => {
  return {
    type: actionTypes.LOAD_CATEGORIES,
    categories: categories
  };
};