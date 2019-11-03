// Library Imports
import { takeLatest } from 'redux-saga/effects';

// Custom Imports
import fetchNewsWorker from './NewsFetchWorkerSaga';

function *watchFetchNews() {
  yield takeLatest('FETCH_NEWS', fetchNewsWorker);
};

// Exports
export default watchFetchNews;