import { createReducer } from './utils';
import { combineReducers } from 'redux';
import {
  DEVICE_STATE_LOADING,
  DEVICE_STATE_FETCHED,
  DEVICE_STATE_FETCH_FAILED,
  READING_UPDATING,
  READING_STATUS_UPDATED,
  READING_UPDATION_FAILED,
  SEARCH_TEXT_UPDATED,
} from './action-types';

const updateReadingInDeviceState = (state, readingName, newReading) => {
  const { readings } = state;
  const index = readings.findIndex(({ name }) => name === readingName);
  readings[index] = { ...readings[index], ...newReading };
  return {
    ...state,
    loading: false,
    readings: [...readings],
  };
};

const deviceStateLoadingHandler = state => ({ ...state, loading: true });

const deviceStateFetchedHandler = (state, readings) => ({
  ...state,
  readings,
  loading: false,
});

const deviceStateFetchFailedHandler = state => ({
  ...state,
  loading: false,
});

const readingStatusUpdatedHandler = (state, { readingName, active }) => {
  const newReading = {
    active,
    updating: false,
  };
  return updateReadingInDeviceState(state, readingName, newReading);
};

const readingUpdatingHandler = (state, readingName) => {
  const newReading = {
    updating: true,
  };
  return updateReadingInDeviceState(state, readingName, newReading);
};

const readingUpdationFailedHandler = (state, readingName) => {
  const newReading = {
    updating: false,
  };
  return updateReadingInDeviceState(state, readingName, newReading);
};

const searchTextUpdatedHandler = (state, searchText) => searchText;

const deviceReducer = createReducer(
  { loading: true, readings: [] },
  {
    [DEVICE_STATE_LOADING]: deviceStateLoadingHandler,
    [DEVICE_STATE_FETCHED]: deviceStateFetchedHandler,
    [DEVICE_STATE_FETCH_FAILED]: deviceStateFetchFailedHandler,
    [READING_STATUS_UPDATED]: readingStatusUpdatedHandler,
    [READING_UPDATING]: readingUpdatingHandler,
    [READING_UPDATION_FAILED]: readingUpdationFailedHandler,
  }
);

const searchReducer = createReducer('', {
  [SEARCH_TEXT_UPDATED]: searchTextUpdatedHandler,
});

const rootReducer = combineReducers({
  deviceState: deviceReducer,
  searchText: searchReducer,
});

export default rootReducer;
