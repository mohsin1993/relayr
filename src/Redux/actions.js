import {
  DEVICE_STATE_LOADING,
  DEVICE_STATE_FETCHED,
  DEVICE_STATE_FETCH_FAILED,
  READING_STATUS_UPDATED,
  READING_UPDATION_FAILED,
  READING_UPDATING,
  SEARCH_TEXT_UPDATED,
} from './action-types';

export const searchTextUpdated = text => ({
  type: SEARCH_TEXT_UPDATED,
  payload: text,
});
export const stateLoading = () => ({ type: DEVICE_STATE_LOADING });
export const stateFetched = data => ({
  type: DEVICE_STATE_FETCHED,
  payload: data,
});
export const stateFetchFailed = () => ({ type: DEVICE_STATE_FETCH_FAILED });
export const readingUpdating = readingName => ({
  type: READING_UPDATING,
  payload: readingName,
});
export const readingUpdationFailed = readingName => ({
  type: READING_UPDATION_FAILED,
  payload: readingName,
});
export const readingStatusUpdated = (readingName, active) => ({
  type: READING_STATUS_UPDATED,
  payload: { readingName, active },
});
