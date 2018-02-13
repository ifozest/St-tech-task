import { connect } from 'react-redux';

import Cell from 'components/Cell';
import { markCell } from 'actions/grid';


const mapStateToProps = ({ selectedElement, start, target }) => ({
  selectedElement,
  start,
  target,
});

const mapDispatchToProps = dispatch => ({
  placeElement: (elemType, position) => {
    dispatch(markCell(elemType, position));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
