import { connect } from 'react-redux';

import Error from 'components/Error';

const mapStateToProps = ({ path }) => ({
  path,
});

export default connect(mapStateToProps)(Error);
