// Library Imports
import { call, put } from 'redux-saga/effects';

// Custom Imports
import { NewsApi } from '../../apiConfig/NewsApi/NewsApi';

const fetchNews = (searchParam, category) => fetch(NewsApi(searchParam, category)).then(result => result.json());

function *fetchNewsWorker(action) {
  const { searchParam, category } = action.payload;
  try {
    yield put({type: 'START_FETCH_PROGRESS', fetchStatus: 'progress'});
    const results = yield call(fetchNews, searchParam, category);
    switch(results.status) {
      case "ok":
      {
        yield put({type: 'ADD_NEWS', totalResultsCount: results.totalResults,articles: results.articles});
        break;
      }
      default:
      {
        yield put({type: 'NEWS_FETCH_FAILURE', failureMessage: results.message});
      }
    }
    yield put({type: 'END_FETCH_PROGRESS', fetchStatus: 'completed'});
  } catch(e) {
    yield put({type: 'NEWS_FETCH_FAILURE', failureMessage: 'Error occurred during fetch method call'});
    yield put({type: 'END_FETCH_PROGRESS', fetchStatus: 'completed'});
  }
};


// Exports
export default fetchNewsWorker;