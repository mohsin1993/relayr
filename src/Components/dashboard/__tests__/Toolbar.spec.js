import React from 'react';
import snapshot from 'check-snapshot';
import { mount } from 'enzyme';
import Toolbar from '../Toolbar';

describe('Toolbar', () => {
  const loadStateMock = jest.fn();
  const updateSearchText = jest.fn();

  it('Render toolbar correctly', () => {
    snapshot(
      <Toolbar
        searchText='acce'
        loadState={loadStateMock}
        updateSearchText={updateSearchText}
      />
    );
  });

  it('On click Triggers load device state func', () => {
    const wrapper = mount(
      <Toolbar loadState={loadStateMock} updateSearchText={updateSearchText} />
    );
    wrapper.find('button').simulate('click');
    expect(loadStateMock).toHaveBeenCalled();
  });

  it('On search input change Triggers updateSearchText with correct value', () => {
    const wrapper = mount(
      <Toolbar
        searchText=''
        loadState={loadStateMock}
        updateSearchText={updateSearchText}
      />
    );
    const newValue = 'Hello';
    wrapper.find('input').simulate('change', { target: { value: newValue } });
    expect(updateSearchText).toHaveBeenCalledWith(newValue);
  });
});
