import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({ loadState, searchText, updateSearchText }) => (
  <div className='toolbar'>
    <button type='button' onClick={loadState}>
      Reload
    </button>
    <input
      type='text'
      placeholder='Search'
      value={searchText}
      onChange={e => updateSearchText(e.target.value)}
    />
  </div>
);

Toolbar.propTypes = {
  searchText: PropTypes.string,
  loadState: PropTypes.func.isRequired,
  updateSearchText: PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  searchText: '',
};

export default Toolbar;
