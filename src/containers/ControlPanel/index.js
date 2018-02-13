import { connect } from 'react-redux';

import ControlPanel from 'components/ControlPanel';
import { initGrid, buildPath, clearPath } from 'actions/grid';

import { findPath } from 'services/algorithms/aStar';

const mapStateToProps = ({ startElement, targetElement }) => ({
  startElement,
  targetElement,
});


const findNewPath = () => (dispatch, getState) => {
  const {
    startElement,
    targetElement,
    cells,
    wormEntrances,
    wormExits,
    path,
  } = getState();
  dispatch(clearPath(path));
  const newPath = findPath(startElement, targetElement, cells, wormEntrances, wormExits);
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
