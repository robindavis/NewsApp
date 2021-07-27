// Library Imports
import { takeLatest } from 'redux-saga/effects';

// Custom Imports
import fetchNewsWorker from './NewsFetchWorkerSaga';

function *watchFetchNews() {
  console.log('Started Watcher Saga');
  yield takeLatest('FETCH_NEWS', fetchNewsWorker);
  console.log('Ended Watcher Saga');
};

// Exports
export default watchFetchNews;