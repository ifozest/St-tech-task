import { types } from 'services/element/types';
import { init } from 'services/grid';

import {
  CELL_MARK,
  CELL_MARK_START,
  CELL_MARK_TARGET,
  CELL_MARK_WORM_ENTER,
  CELL_MARK_WORM_EXIT,
  GRID_INIT,
  PATH_BUILD,
  PATH_CLEAR,
  ELEMENT_PICK,
} from 'utils/constants/redux';

const getActionType = (elemType) => {
  switch (elemType) {
    case types.start:
      return CELL_MARK_START;
    case types.target:
      return CELL_MARK_TARGET;
    case types.wormholeEntrance:
      return CELL_MARK_WORM_ENTER;
    case types.wormholeExit:
      return CELL_MARK_WORM_EXIT;
    default:
      return CELL_MARK;
  }
};

export const markCell = (elemType, position) => ({
  type: getActionType(elemType),
  elemType,
  position,
});

export const pickElement = element => ({
  type: ELEMENT_PICK,
  element,
});

export const initGrid = () => {
  const cells = init();
  return {
    type: GRID_INIT,
    cells,
  };
};

export const buildPath = path => ({
  type: PATH_BUILD,
  path,
});

export const clearPath = path => ({
  type: PATH_CLEAR,
  path,
});
