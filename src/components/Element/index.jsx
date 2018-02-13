import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  pickElement: PropTypes.func.isRequired,
  selectedElement: PropTypes.string.isRequired,
  element: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};


class Element extends React.Component {
  constructor(props) {
    super(props);
    this.selectElement = this.selectElement.bind(this);
  }

  selectElement(e) {
    this.props.pickElement(e.target.value);
  }

  render() {
    const { element } = this.props;
    const id = `radio_${element.type}`;
    return (
      <div className="">
        <label htmlFor={id}>
          <input
            id={id}
            type="radio"
            name="element"
            value={element.type}
            onChange={this.selectElement}
            checked={element.type === this.props.selectedElement}
          />
          {element.label}
        </label>
      </div>
    );
  }
}

Element.propTypes = propTypes;

export default Element;
