// Custom Imports
import * as actionTypes from './NavigationBarActionType';

export const updateSelectedTabIndex = currentTabIndex => ({
  type: actionTypes.TAB_CHANGE,
  currentTabIndex: currentTabIndex 
});