import { filterReadings, getActiveCount, getInActiveCount } from '../selectors';

describe('Selectors', () => {
  it('filterReadings filters correctly!', () => {
    const state = {
      deviceState: {
        readings: [{ name: 'acceleration_x' }, { name: 'rotation_alpha' }],
      },
      searchText: 'acceleration',
    };
    const filteredReadings = filterReadings(state);
    expect(filteredReadings.length).toEqual(1);
    expect(filteredReadings[0].name).toEqual('acceleration_x');
  });

  it('getActiveCount works correctly!', () => {
    const state = {
      deviceState: {
        readings: [
          { name: 'acceleration_x', active: true },
          { name: 'rotation_alpha', active: false },
        ],
      },
      searchText: 'acceleration',
    };
    const activeCount = getActiveCount(state);
    expect(activeCount).toEqual(1);
  });

  it('getActiveCount works correctly!', () => {
    const state = {
      deviceState: {
        readings: [
          { name: 'acceleration_x', active: true },
          { name: 'rotation_alpha', active: false },
        ],
      },
      searchText: 'acceleration',
    };
    const inActiveCount = getInActiveCount(state);
    expect(inActiveCount).toEqual(1);
  });
});
