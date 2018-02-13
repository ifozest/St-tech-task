import { connect } from 'react-redux';

import Grid from 'components/Grid';
import { initGrid } from 'actions/grid';

const mapStateToProps = ({ cells }) => ({
  cells,
});

const mapDispatchToProps = dispatch => ({
  initGrid: () => {
    dispatch(initGrid());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
