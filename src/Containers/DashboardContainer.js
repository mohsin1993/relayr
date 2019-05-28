import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  filterReadings,
  getInActiveCount,
  getActiveCount,
} from '../Redux/selectors';
import Dashboard from '../Components/Dashboard';
import {
  loadState,
  toggleActive,
  updateSearchText,
} from '../Redux/action-creators';

const mapStateToProps = (state, ownProps) => ({
  activeCount: getActiveCount(state),
  inActiveCount: getInActiveCount(state),
  loading: state.deviceState.loading,
  searchText: state.searchText,
  filteredReadings: filterReadings(state),
  totalReadings: state.deviceState.readings.length,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadState,
      toggleActive,
      updateSearchText,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
