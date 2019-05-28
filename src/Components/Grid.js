import React from 'react';
import PropTypes from 'prop-types';
import THead from './grid/THead';
import TBody from './grid/TBody';

const Grid = ({ filteredReadings, toggleActive }) => {
  return (
    <div className='grid'>
      <table>
        <THead />
        <TBody
          filteredReadings={filteredReadings}
          toggleActive={toggleActive}
        />
      </table>
    </div>
  );
};

Grid.propTypes = {
  filteredReadings: PropTypes.array.isRequired,
  toggleActive: PropTypes.func.isRequired,
};

export default Grid;
