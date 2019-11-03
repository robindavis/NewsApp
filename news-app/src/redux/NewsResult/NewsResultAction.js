// Custom Imports
import * as actionTypes from './NewsResultActionType';

export const fetchNewsResult = (searchParam, category) => ({
  type: actionTypes.FETCH_NEWS,
  payload: { searchParam, category }
});

export const openNewsCardModal = newsCardModalData => ({
  type: actionTypes.OPEN_NEWS_CARD_MODAL,
  newsCardModalData: newsCardModalData
});

export const closeNewsCardModal = () => ({
  type: actionTypes.CLOSE_NEWS_CARD_MODAL
});