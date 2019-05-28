import React from 'react';
import PropTypes from 'prop-types';

const StatusBar = ({ activeCount, inActiveCount }) => (
  <div className='status-bar'>
    <span>
      <label>Active: </label>
      <span className='value success'>{activeCount}</span>
    </span>
    <span>
      <label>Inactive: </label>
      <span className='value error'>{inActiveCount}</span>
    </span>
  </div>
);

StatusBar.propTypes = {
  activeCount: PropTypes.number,
  inActiveCount: PropTypes.number,
};

StatusBar.defaultProps = {
  activeCount: 0,
  inActiveCount: 0,
};

export default StatusBar;
