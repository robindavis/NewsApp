// Library Imports
import { call, put } from 'redux-saga/effects';

// Custom Imports
import { NewsApi } from '../../apiConfig/NewsApi/NewsApi';

const fetchNews = (searchParam, category) => fetch(NewsApi(searchParam, category)).then(result => result.json());

function *fetchNewsWorker(action) {
  console.log('Started Worker Saga');
  const { searchParam, category } = action.payload;
  try {
    yield put({type: 'START_FETCH_PROGRESS', fetchStatus: 'progress'});
    const results = yield call(fetchNews, searchParam, category);
    // Changed for testing mediaStack API
    // switch(results.status) {
    //   case "ok":
    //   {
    //     yield put({type: 'ADD_NEWS', totalResultsCount: results.totalResults,articles: results.articles});
    //     break;
    //   }
    //   default:
    //   {
    //     yield put({type: 'NEWS_FETCH_FAILURE', failureMessage: results.message});
    //   }
    // }
    // Start new api code
    let updatedNewsArticles = results.articles.map(newsInfo => ({
      author: '',
      content: newsInfo.content,
      description: newsInfo.description,
      publishedAt: newsInfo.publishedAt,
      source: newsInfo.source,
      title: newsInfo.title,
      url: newsInfo.url,
      urlToImage: newsInfo.image,
    }));
    if (!results.hasOwnProperty('error')) {
      yield put({type: 'ADD_NEWS', totalResultsCount: results.totalArticles,articles: updatedNewsArticles});
    } else {
      yield put({type: 'NEWS_FETCH_FAILURE', failureMessage: results.error.message});
    }
    // End new api code
    yield put({type: 'END_FETCH_PROGRESS', fetchStatus: 'completed'});
  } catch(e) {
    yield put({type: 'NEWS_FETCH_FAILURE', failureMessage: 'Error occurred during fetch method call'});
    yield put({type: 'END_FETCH_PROGRESS', fetchStatus: 'completed'});
  }
  console.log('Ended Worker Saga');
};


// Exports
export default fetchNewsWorker;