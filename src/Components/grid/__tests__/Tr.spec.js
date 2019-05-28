import React from 'react';
import { mount } from 'enzyme';
import snapshot from 'check-snapshot';
import Tr from '../Tr';

describe('Tr', () => {
  let toggleActive = jest.fn();
  let props;
  beforeEach(() => {
    props = {
      name: 'acceleration_x',
      unit: 'm/s2',
      value: 25.993848858558,
      timestamp: 1558999341929,
      active: true,
      updating: false,
      toggleActive: toggleActive,
    };
  });

  it('It renders table row correctly', () => {
    snapshot(
      <table>
        <tbody>
          <Tr {...props} />
        </tbody>
      </table>
    );
  });

  it('It renders table row correctly', () => {
    snapshot(
      <table>
        <tbody>
          <Tr {...props} updating />
        </tbody>
      </table>
    );
  });

  it('onCheckbox change triggers toggleActive', () => {
    const wrapper = mount(
      <table>
        <tbody>
          <Tr {...props} />
        </tbody>
      </table>
    );
    wrapper
      .find('input[type="checkbox"]')
      .simulate('change', { target: { checked: !props.active } });
    expect(toggleActive).toHaveBeenCalledWith(props.name, !props.active);
  });
});
