import { getDeviceState, setActive } from '../Api';
import { notify } from 'react-notify-toast';
import {
  getReadingFetchFailError,
  getDeviceStateFetchFailError,
} from './error';
import {
  stateLoading,
  stateFetched,
  stateFetchFailed,
  readingUpdating,
  readingUpdationFailed,
  readingStatusUpdated,
  searchTextUpdated,
} from './actions';

export const loadState = () => async dispatch => {
  dispatch(stateLoading());
  try {
    const { data } = await getDeviceState();
    dispatch(stateFetched(data));
  } catch (e) {
    notify.show(getDeviceStateFetchFailError(), 'error');
    dispatch(stateFetchFailed());
  }
};

export const toggleActive = (readingName, active) => async dispatch => {
  dispatch(readingUpdating(readingName));
  try {
    await setActive(readingName, active);
    dispatch(readingStatusUpdated(readingName, active));
  } catch (e) {
    notify.show(getReadingFetchFailError(readingName), 'error');
    dispatch(readingUpdationFailed(readingName));
  }
};

export const updateSearchText = text => searchTextUpdated(text);
