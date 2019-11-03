// Library Imports
import { all, spawn } from 'redux-saga/effects';

// Custom Imports
import watchFetchNews from './NewsFetch/NewsFetchWatcherSaga';

function *rootSagas() {
  yield all([
    spawn(watchFetchNews)
    ]);
};

// Exports
export default rootSagas;