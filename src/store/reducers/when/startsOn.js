import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  inputAttributes: {
    date: "",
    isDateValid: false,
    time: "",
    isTimeValid: false,
    isAm: true
  },
  isValid: false
};

const reducer = (state=initialState, action) => {
  let updatedInputAttributes, isDateValid, isTimeValid, isSectionValid;
  switch(action.type) {
    case (actionTypes.SET_DATE):
      isDateValid = action.value.toString().length > 0 ? true : false;
  
      updatedInputAttributes = {
        ...state.inputAttributes,
        date: action.value,
        isDateValid: isDateValid
      };

      isSectionValid = state.inputAttributes.isTimeValid && isDateValid;

      return {
        ...state,
        inputAttributes: updatedInputAttributes,
        isValid: isSectionValid
      };
    case (actionTypes.SET_TIME):
      let currentMinute;
      let newIsAm = state.inputAttributes.isAm;

      let [ newHour, newMinute ] = action.value.split(':');
      newHour = parseInt(newHour);
      if (newHour > 12) {
        newHour = newHour - 12;
        newIsAm = false;
      }      
      newHour = newHour.toString();
      newHour = newHour.length === 1 ? `0${newHour}` : newHour;

      const currentTime = state.inputAttributes.time;
      if (currentTime) {
        currentMinute = currentTime.split(':')[1];
        currentMinute = parseInt(currentMinute);

        if (currentMinute < 6) {
          newMinute = newMinute.slice(1);
          newMinute = `${currentMinute}${newMinute}`;
        }
      }

      const newTime = `${newHour}:${newMinute}`;
      isTimeValid = newTime.toString().length > 0 ? true : false;

      updatedInputAttributes = {
        ...state.inputAttributes,
        time: newTime,
        isTimeValid: isTimeValid,
        isAm: newIsAm
      };

      isSectionValid = state.inputAttributes.isDateValid && isTimeValid;

      return {
        ...state,
        inputAttributes: updatedInputAttributes,
        isValid: isSectionValid
      };
    case (actionTypes.SET_IS_AM):
      updatedInputAttributes = {
        ...state.inputAttributes,
        isAm: action.value === "true" ? true : false
      };

      return {
        ...state,
        inputAttributes: updatedInputAttributes
      };
    default:
      return state;
  }
}

export default reducer;
