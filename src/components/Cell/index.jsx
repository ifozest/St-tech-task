import React from 'react';
import PropTypes from 'prop-types';

import { types } from 'services/element/types';
import { isSamePosition } from 'services/grid';

const cellStyleMap = {
  [types.simple]: '',
  [types.start]: 'cell-start',
  [types.target]: 'cell-target',
  [types.boulder]: 'cell-boulder',
  [types.gravel]: 'cell-gravel',
  [types.wormholeEntrance]: 'cell-worm-enter',
  [types.wormholeExit]: 'cell-worm-exit',
};

const propTypes = {
  placeElement: PropTypes.func.isRequired,
  selectedElement: PropTypes.string.isRequired,
  cell: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    path: PropTypes.bool,
  }).isRequired,
  startElement: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  targetElement: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
};

const defaultProps = {
  startElement: null,
  targetElement: null,
};

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.markCell = this.markCell.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { cell } = this.props;
    const { startElement, targetElement } = nextProps;

    if ((startElement && cell.type === types.start && !isSamePosition(cell, startElement)) ||
      (targetElement && cell.type === types.target && !isSamePosition(cell, targetElement))) {
      this.props.placeElement(types.simple, {
        x: cell.x,
        y: cell.y,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.props.cell === nextProps.cell
      && nextState === this.state);
  }

  markCell() {
    const { cell } = this.props;
    let elemType = this.props.selectedElement;
    if (cell.type !== types.start && cell.type !== types.target) {
      if (cell.type === elemType) {
        elemType = types.simple;
      }
      this.props.placeElement(elemType, {
        x: cell.x,
        y: cell.y,
      });
    }
  }

  render() {
    const styles = cellStyleMap[this.props.cell.type] + (this.props.cell.path ? ' path' : '');

    return (
      <div
        className={`cell ${styles}`}
        onMouseDown={this.markCell}
        role="none"
      />
    );
  }
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;
