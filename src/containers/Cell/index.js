import { connect } from 'react-redux';

import Cell from 'components/Cell';
import { markCell } from 'actions/grid';


const mapStateToProps = ({ selectedElement, startElement, targetElement }) => ({
  selectedElement,
  startElement,
  targetElement,
});

const mapDispatchToProps = dispatch => ({
  placeElement: (elemType, position) => {
    dispatch(markCell(elemType, position));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
