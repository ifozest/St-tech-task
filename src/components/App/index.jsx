import React from 'react';

import Grid from 'containers/Grid';
import ControlPanel from 'containers/ControlPanel';
import Caption from 'components/Caption';
import Error from 'containers/Error';

/**
 * Entry point
 */
const App = () => (
  <div className="app">
    <Caption />
    <Error />
    <Grid />
    <ControlPanel />
  </div>
);

export default App;
