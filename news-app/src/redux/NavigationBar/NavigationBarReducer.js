// Custom Imports
import * as actionTypes from './NavigationBarActionType';


const initialState = {
  currentTabIndex: 0
};

const NavigationBarReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.TAB_CHANGE: {
      return Object.assign({}, state, {currentTabIndex: action.currentTabIndex});
    }
    default:
    {
      return state;
    }
  }
};

// Exports
export default NavigationBarReducer;