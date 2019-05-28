import reducer from '../reducers';
import {
  stateLoading,
  stateFetched,
  readingUpdating,
  readingStatusUpdated,
  stateFetchFailed,
  readingUpdationFailed,
  searchTextUpdated,
} from '../actions';

describe('Reducer', () => {
  const reading = {
    name: 'acceleration_x',
    active: true,
  };

  const initialDeviceState = { readings: [], loading: false };

  const initialState = {
    searchText: '',
    deviceState: initialDeviceState,
  };

  it('returns right state when searchTextUpdated action called', () => {
    const searchText = 'hello';
    const expectedState = {
      ...initialState,
      searchText,
    };
    expect(reducer(initialState, searchTextUpdated(searchText))).toEqual(
      expectedState
    );
  });

  it('returns right state when stateLoading action called', () => {
    const expectedState = {
      ...initialState,
      deviceState: { ...initialDeviceState, loading: true },
    };
    expect(reducer(initialState, stateLoading())).toEqual(expectedState);
  });

  it('returns right state when stateFetched action called', () => {
    const beginState = {
      ...initialState,
      deviceState: { ...initialDeviceState, loading: true },
    };
    const expectedState = {
      ...initialState,
      deviceState: {
        loading: false,
        readings: [reading],
      },
    };
    expect(reducer(beginState, stateFetched([reading]))).toEqual(expectedState);
  });

  it('returns right state when readingUpdating action called', () => {
    const beginState = {
      ...initialState,
      deviceState: { ...initialDeviceState, readings: [reading] },
    };
    const expectedState = {
      ...initialState,
      deviceState: {
        ...initialDeviceState,
        readings: [{ ...reading, updating: true }],
      },
    };
    expect(reducer(beginState, readingUpdating(reading.name))).toEqual(
      expectedState
    );
  });

  it('returns right state when readingStatusUpdated action called', () => {
    const beginState = {
      ...initialState,
      deviceState: {
        ...initialDeviceState,
        readings: [{ ...reading, active: true, updating: true }],
      },
    };
    const expectedState = {
      ...initialState,
      deviceState: {
        ...initialDeviceState,
        readings: [{ ...reading, updating: false, active: false }],
      },
    };
    expect(
      reducer(beginState, readingStatusUpdated(reading.name, false))
    ).toEqual(expectedState);
  });

  it('returns right state when stateFetchFailed action called', () => {
    const beginState = {
      ...initialState,
      deviceState: {
        ...initialDeviceState,
        loading: true,
      },
    };
    const expectedState = {
      ...initialState,
      deviceState: {
        ...initialDeviceState,
        loading: false,
      },
    };
    expect(reducer(beginState, stateFetchFailed())).toEqual(expectedState);
  });

  it('returns right state when readingUpdationFailed action called', () => {
    const beginState = {
      ...initialState,
      deviceState: {
        loading: false,
        readings: [{ ...reading, active: true, updating: true }],
      },
    };
    const expectedState = {
      ...initialState,
      deviceState: {
        loading: false,
        readings: [{ ...reading, updating: false, active: true }],
      },
    };
    expect(reducer(beginState, readingUpdationFailed(reading.name))).toEqual(
      expectedState
    );
  });
});
