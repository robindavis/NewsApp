// Custom Imports
import * as actionTypes from './SelectedThemeActionType';

const initialState = {
  name: localStorage.getItem('colorTheme') || 'lightTheme'
};

const SelectedThemeReducer = (state = initialState, action) => {
  console.log('Started Selected Theme Reducer');
  switch(action.type) {
    case actionTypes.CHANGE_THEME: {
      return Object.assign({}, state, {name: action.name});
    }
    default:
    {
      return state;
    }
  }
  console.log('Ended Selected Theme Reducer');
};

// Exports
export default SelectedThemeReducer;