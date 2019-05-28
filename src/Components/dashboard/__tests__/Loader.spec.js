import React from 'react';
import snapshot from 'check-snapshot';
import Loader from '../Loader';

describe('Loader', () => {
  it('It renders loader correctly', () => {
    snapshot(<Loader />);
  });
});
