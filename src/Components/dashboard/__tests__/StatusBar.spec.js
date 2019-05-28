import React from 'react';
import snapshot from 'check-snapshot';
import StatusBar from '../StatusBar';

describe('StatusBar', () => {
  it('Render status bar correctly', () => {
    snapshot(<StatusBar activeCount={5} inActiveCount={2} />);
  });
});
