import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

const Tr = ({
  name,
  unit,
  value,
  timestamp,
  active,
  updating,
  toggleActive,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{unit}</td>
      <td>{value}</td>
      <td>{format(new Date(timestamp), 'DD-MM-YYYY HH:mm')}</td>
      <td className='actions'>
        <input
          type='checkbox'
          checked={active}
          disabled={updating}
          onChange={() => toggleActive(name, !active)}
        />
        {updating && <span>{active ? 'deactivating' : 'activating'}...</span>}
      </td>
    </tr>
  );
};

Tr.propTypes = {
  name: PropTypes.string,
  unit: PropTypes.string,
  value: PropTypes.number,
  timestamp: PropTypes.number,
  active: PropTypes.bool,
  updating: PropTypes.bool,
  toggleActive: PropTypes.func.isRequired,
};

Tr.defaultProps = {
  name: '',
  unit: '',
  value: 0,
  timestamp: 0,
  active: false,
  updating: false,
};

export default Tr;
