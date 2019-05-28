import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8888';

const urlFactory = base => path => `${base}/${path}`;
const url = urlFactory(BASE_URL);

export const getDeviceState = () =>
  axios.get(url('device')).then(({ data }) => data);

export const setActive = (readingName, active) =>
  axios.patch(
    url(`device/${readingName}`),
    {},
    {
      params: {
        active,
      },
    }
  );
