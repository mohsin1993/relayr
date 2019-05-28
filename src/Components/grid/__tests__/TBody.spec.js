import React from 'react';
import { mount } from 'enzyme';
import TBody from '../TBody';

describe('TBody', () => {
  it('It renders TBody correctly', () => {
    const props = {
      toggleActive: jest.fn(),
      filteredReadings: [
        {
          name: 'acceleration_x',
          unit: 'm/s2',
          value: 25.993848858558,
          timestamp: 1558999341929,
          active: true,
        },
      ],
    };

    const wrapper = mount(
      <table>
        <TBody {...props} />
      </table>
    );
    expect(wrapper.find('tr').length).toEqual(1);
  });
});
