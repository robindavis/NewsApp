// Custom Imports
import * as actionTypes from './NewsResultActionType';

const initialState = {
  totalResultsCount: 0,
  articles: [],
  failureMessage: '',
  fetchStatus: 'completed',
  isNewsCardModalOpen: false,
  newsCardModalData: {}
};

const NewsResultReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_NEWS: {
      return Object.assign({}, state, {totalResultsCount: action.totalResultsCount, articles: action.articles});
    }
    case actionTypes.NEWS_FETCH_FAILURE: {
      return Object.assign({}, state, {totalResultsCount: 0, articles: [], failureMessage: action.failureMessage});
    }
    case actionTypes.START_FETCH_PROGRESS: {
      return Object.assign({}, state, {fetchStatus: action.fetchStatus, totalResultsCount: 0, articles: []});
    }
    case actionTypes.END_FETCH_PROGRESS: {
      return Object.assign({}, state, {fetchStatus: action.fetchStatus});
    }
    case actionTypes.OPEN_NEWS_CARD_MODAL: {
      return Object.assign({}, state, {isNewsCardModalOpen: true, newsCardModalData: action.newsCardModalData});
    }
    case actionTypes.CLOSE_NEWS_CARD_MODAL: {
      return Object.assign({}, state, {isNewsCardModalOpen: false, newsCardModalData: {}});
    }
    default:
    {
      return state;
    }
  }
};

// Exports
export default NewsResultReducer;