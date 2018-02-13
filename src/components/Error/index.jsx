import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  path: PropTypes.arrayOf(PropTypes.any),
};

const defaultProps = {
  path: null,
};

const Error = ({ path }) => {
  let error;
  if (path && !path.length) {
    error = (
      <div className="error">
        Unable to calculate a route!
      </div>
    );
  }
  return (
    <div>
      {error}
    </div>
  );
};

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
