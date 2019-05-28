import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid';
import Notifications from 'react-notify-toast';
import Loader from './dashboard/Loader';
import Toolbar from './dashboard/Toolbar';
import StatusBar from './dashboard/StatusBar';

const Dashboard = ({
  loading,
  searchText,
  filteredReadings,
  activeCount,
  inActiveCount,
  loadState,
  toggleActive,
  updateSearchText,
}) => {
  useEffect(() => {
    loadState();
  }, []);

  return (
    <div>
      <Notifications />
      <Toolbar
        loadState={loadState}
        searchText={searchText}
        updateSearchText={updateSearchText}
      />
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <StatusBar activeCount={activeCount} inActiveCount={inActiveCount} />
          <Grid
            searchText={searchText}
            updateSearchText={updateSearchText}
            filteredReadings={filteredReadings}
            toggleActive={toggleActive}
          />
        </React.Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  loading: PropTypes.bool,
  searchText: PropTypes.string,
  activeCount: PropTypes.number,
  inActiveCount: PropTypes.number,
  filteredReadings: PropTypes.array.isRequired,
  loadState: PropTypes.func.isRequired,
  toggleActive: PropTypes.bool.isRequired,
  updateSearchText: PropTypes.string.isRequired,
};

Dashboard.defaultProps = {
  loading: false,
  searchText: '',
  activeCount: 0,
  inActiveCount: 0,
};

export default Dashboard;
