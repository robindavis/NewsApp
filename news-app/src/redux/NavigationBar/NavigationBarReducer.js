// Custom Imports
import * as actionTypes from './NavigationBarActionType';


const initialState = {
  currentTabIndex: 0
};

const NavigationBarReducer = (state = initialState, action) => {
  console.log('Started Navigation Bar Reducer');
  switch(action.type) {
    case actionTypes.TAB_CHANGE: {
      return Object.assign({}, state, {currentTabIndex: action.currentTabIndex});
    }
    default:
    {
      return state;
    }
  }
  console.log('Ended Navigation Bar Reducer');
};

// Exports
export default NavigationBarReducer;