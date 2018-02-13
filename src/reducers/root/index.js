import { combineReducers } from 'redux';

import selectedElement from 'reducers/selectedElement';
import start from 'reducers/start';
import target from 'reducers/target';
import wormEntrances from 'reducers/wormEntrances';
import wormExits from 'reducers/wormExits';
import cells from 'reducers/cells';
import path from 'reducers/path';

const rootReducer = combineReducers({
  selectedElement,
  start,
  target,
  wormEntrances,
  wormExits,
  cells,
  path,
});

export default rootReducer;
