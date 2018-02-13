import { connect } from 'react-redux';

import ControlPanel from 'components/ControlPanel';
import { initGrid, buildPath } from 'actions/grid';

import { findPath } from 'services/algorithms/aStar';

const mapStateToProps = ({
  startElement, targetElement, cells, wormEntrances, wormExits,
}) => ({
  startElement,
  targetElement,
  wormEntrances,
  wormExits,
  cells,
});


const mapDispatchToProps = dispatch => ({
  clearGrid: () => {
    dispatch(initGrid());
  },
  findPath: (start, end, grid, wormEntrances, wormExits) => {
    const path = findPath(start, end, grid, wormEntrances, wormExits);
    dispatch(buildPath(path));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
