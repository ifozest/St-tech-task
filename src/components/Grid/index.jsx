import React from 'react';
import PropTypes from 'prop-types';

import Cell from 'containers/Cell';
import { generateKey } from 'services/grid';

const propTypes = {
  initGrid: PropTypes.func.isRequired,
  cells: PropTypes.arrayOf(PropTypes.any).isRequired,
};

class Grid extends React.Component {
  componentDidMount() {
    this.props.initGrid();
  }

  render() {
    const cells = [];

    this.props.cells.forEach((row) => {
      row.forEach((cell) => {
        cells.push(<Cell
          cell={cell}
          key={generateKey(cell)}
        />);
      });
    });

    return (
      <div className="grid">
        {cells}
      </div>
    );
  }
}

Grid.propTypes = propTypes;

export default Grid;
