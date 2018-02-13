import { combineReducers } from 'redux';

import selectedElement from 'reducers/selectedElement';
import startElement from 'reducers/startElement';
import targetElement from 'reducers/targetElement';
import wormEntrances from 'reducers/wormEntrances';
import wormExits from 'reducers/wormExits';
import cells from 'reducers/cells';
import path from 'reducers/path';

const rootReducer = combineReducers({
  selectedElement,
  startElement,
  targetElement,
  wormEntrances,
  wormExits,
  cells,
  path,
});

export default rootReducer;
