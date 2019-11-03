// Custom Imports
import * as actionTypes from './SelectedThemeActionType';

const initialState = {
  name: localStorage.getItem('colorTheme') || 'lightTheme'
};

const SelectedThemeReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_THEME: {
      return Object.assign({}, state, {name: action.name});
    }
    default:
    {
      return state;
    }
  }
};

// Exports
export default SelectedThemeReducer;