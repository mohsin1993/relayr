export const filterReadings = ({ deviceState, searchText }) =>
  deviceState.readings.filter(reading =>
    reading.name.toLowerCase().includes(searchText.toLowerCase())
  );

export const getActiveCount = ({ deviceState }) =>
  deviceState.readings.filter(({ active }) => active).length;

export const getInActiveCount = ({ deviceState }) =>
  deviceState.readings.filter(({ active }) => !active).length;
