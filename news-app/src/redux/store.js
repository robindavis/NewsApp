// Library Imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger  } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Custom Imports
import NavigationBarReducer from './NavigationBar/NavigationBarReducer';
import NewsResultReducer from './NewsResult/NewsResultReducer';
import SelectedThemeReducer from './SelectedTheme/SelectedThemeReducer';
import rootSagas from '../redux-saga/rootSagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware(); 
const store = createStore(combineReducers(
{
  navigationBar: NavigationBarReducer,
  newsResults: NewsResultReducer,
  selectedTheme: SelectedThemeReducer
}), applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSagas);

// Exports
export default store;