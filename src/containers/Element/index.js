import { connect } from 'react-redux';

import Element from 'components/Element';
import { pickElement } from 'actions/grid';

const mapStateToProps = ({ selectedElement }) => ({
  selectedElement,
});

const mapDispatchToProps = dispatch => ({
  pickElement: (element) => {
    dispatch(pickElement(element));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Element);
