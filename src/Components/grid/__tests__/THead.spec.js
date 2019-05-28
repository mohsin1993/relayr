import React from 'react';
import snapshot from 'check-snapshot';
import THead from '../THead';

describe('THead', () => {
  it('It renders THead correctly', () => {
    snapshot(
      <table>
        <THead />
      </table>
    );
  });
});
