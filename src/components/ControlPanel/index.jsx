import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  clearGrid: PropTypes.func.isRequired,
  findPath: PropTypes.func.isRequired,
  start: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  target: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
};

const defaultProps = {
  start: null,
  target: null,
};

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.clearGrid = this.clearGrid.bind(this);
    this.findPath = this.findPath.bind(this);
  }

  findPath() {
    const {
      start,
      target,
    } = this.props;

    if (start && target) {
      this.props.findPath();
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
