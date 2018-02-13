import { connect } from 'react-redux';

import ControlPanel from 'components/ControlPanel';
import { initGrid, buildPath, clearPath } from 'actions/grid';

import { findPath } from 'services/algorithms/aStar';

const mapStateToProps = ({ start, target }) => ({
  start,
  target,
});


const findNewPath = () => (dispatch, getState) => {
  const {
    start,
    target,
    cells,
    wormEntrances,
    wormExits,
    path,
  } = getState();
  dispatch(clearPath(path));
  const newPath = findPath(start, target, cells, wormEntrances, wormExits);
  dispatch(buildPath(newPath));
};


const mapDispatchToProps = dispatch => ({
  clearGrid: () => {
    dispatch(initGrid());
  },
  findPath: () => {
    dispatch(findNewPath());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
