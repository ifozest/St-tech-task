import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  clearGrid: PropTypes.func.isRequired,
  findPath: PropTypes.func.isRequired,
  startElement: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  targetElement: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  cells: PropTypes.arrayOf(PropTypes.any).isRequired,
  wormEntrances: PropTypes.arrayOf(PropTypes.any).isRequired,
  wormExits: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const defaultProps = {
  startElement: null,
  targetElement: null,
};

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.clearGrid = this.clearGrid.bind(this);
    this.findPath = this.findPath.bind(this);
  }

  findPath() {
    const {
      startElement,
      targetElement,
      cells,
      wormEntrances,
      wormExits,
    } = this.props;

    if (this.props.startElement && this.props.targetElement) {
      this.props.findPath(startElement, targetElement, cells, wormEntrances, wormExits);
    }
  }

  clearGrid() {
    this.props.clearGrid();
  }

  render() {
    return (
      <div className="control-panel">
        <button className="btn" onClick={this.findPath}>Search!</button>
        <button className="btn" onClick={this.clearGrid}>Clear Grid</button>
      </div>
    );
  }
}

ControlPanel.propTypes = propTypes;
ControlPanel.defaultProps = defaultProps;

export default ControlPanel;
