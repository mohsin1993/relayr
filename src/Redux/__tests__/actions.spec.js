import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as api from '../../Api';
import * as notifyToast from 'react-notify-toast';
import { loadState, toggleActive, updateSearchText } from '../action-creators';
import {
  stateLoading,
  stateFetched,
  readingUpdating,
  readingStatusUpdated,
  stateFetchFailed,
  readingUpdationFailed,
  searchTextUpdated,
} from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action creators', () => {
  notifyToast.notify = { show: () => {} };
  const reading = {
    name: 'acceleration_x',
    active: true,
  };
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('Update search text triggers correct action with right text', () => {
    const searchText = 'hello';

    store.dispatch(updateSearchText(searchText));
    const actions = store.getActions();

    expect(actions[0]).toEqual(searchTextUpdated(searchText));
  });

  it('Successful loadState triggers correct actions with right params', async () => {
    api.getDeviceState = jest.fn(() => ({ data: [reading] }));

    await store.dispatch(loadState());
    const actions = store.getActions();

    expect(actions.length).toEqual(2);
    expect(actions[0]).toEqual(stateLoading());
    expect(actions[1]).toEqual(stateFetched([reading]));
  });

  it('Failed loadState triggers correct actions', async () => {
    api.getDeviceState = jest.fn(() => Promise.reject());

    await store.dispatch(loadState());
    const actions = store.getActions();

    expect(actions.length).toEqual(2);
    expect(actions[0]).toEqual(stateLoading());
    expect(actions[1]).toEqual(stateFetchFailed());
  });

  it('Successful toggleActive triggers correct actions with right params', async () => {
    api.setActive = jest.fn();

    await store.dispatch(toggleActive(reading.name, !reading.active));
    const actions = store.getActions();

    expect(actions.length).toEqual(2);
    expect(actions[0]).toEqual(readingUpdating(reading.name));
    expect(actions[1]).toEqual(
      readingStatusUpdated(reading.name, !reading.active)
    );
  });

  it('Failed toggleActive triggers correct actions', async () => {
    api.setActive = jest.fn(() => Promise.reject());

    await store.dispatch(toggleActive(reading.name, !reading.active));
    const actions = store.getActions();

    expect(actions.length).toEqual(2);
    expect(actions[0]).toEqual(readingUpdating(reading.name));
    expect(actions[1]).toEqual(readingUpdationFailed(reading.name));
  });
});
