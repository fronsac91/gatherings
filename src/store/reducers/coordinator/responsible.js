import * as actionTypes from '../../actions/actionTypes';
import { loggedInUser } from '../../../formData';

const initialState = {
  inputAttributes: {
    value: ''
  },
  options: [],
  optionsGroupData: [],
  selectedUserObject: {}
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case (actionTypes.LOAD_ALL_USERS):
      const loggedInUserData = action.responsible
        .filter(user => user.id === loggedInUser.id)[0];
      const otherUsersData = action.responsible
        .filter(user => user.id !== loggedInUser.id);

      const usersOptionsGroupData = [
        {
          groupName: "Me",
          options: [ loggedInUserData ]
        },
        {
          groupName: "Others",
          options: otherUsersData
        }
      ];

      return {
        ...state,
        options: action.responsible,
        optionsGroupData: usersOptionsGroupData
      };
    case (actionTypes.SET_RESPONSIBLE_PERSON):
      const selectedUserObject = state.options.filter(user => 
        `${user.name} ${user.lastname}` === action.value);

      const updatedInputAttributes = {
        ...state.inputAttributes,
        value: action.value
      };

      return {
        ...state,
        inputAttributes: updatedInputAttributes,
        selectedUserObject: selectedUserObject
      };
    default:
      return state;
  }
}

export default reducer;