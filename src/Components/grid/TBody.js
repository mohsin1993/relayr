import React from 'react';
import PropTypes from 'prop-types';
import Tr from './Tr';

const TBody = ({ filteredReadings, toggleActive }) => (
  <tbody>
    {filteredReadings.map(reading => (
      <Tr key={reading.name} {...reading} toggleActive={toggleActive} />
    ))}
  </tbody>
);

TBody.propTypes = {
  filteredReadings: PropTypes.array.isRequired,
  toggleActive: PropTypes.func.isRequired,
};

export default TBody;
