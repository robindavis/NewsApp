// Library Imports
import { all, spawn } from 'redux-saga/effects';

// Custom Imports
import watchFetchNews from './NewsFetch/NewsFetchWatcherSaga';

function *rootSagas() {
  console.log('Started root saga');
  yield all([
    spawn(watchFetchNews)
    ]);
  console.log('Ended root saga');
};

// Exports
export default rootSagas;