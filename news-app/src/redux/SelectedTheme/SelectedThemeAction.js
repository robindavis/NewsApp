// Custom Imports
import * as actionTypes from './SelectedThemeActionType';

export const changeSelectedTheme = selectedTheme => ({
  type: actionTypes.CHANGE_THEME,
  name: selectedTheme
});