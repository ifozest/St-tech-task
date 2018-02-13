import {
  CELL_MARK,
  CELL_MARK_START,
  CELL_MARK_TARGET,
  CELL_MARK_WORM_ENTER,
  CELL_MARK_WORM_EXIT,
  GRID_INIT,
  PATH_BUILD,
} from 'utils/constants/redux';

import { copy2dArray } from 'utils/helper';

const cells = (state = [], action) => {
  switch (action.type) {
    case GRID_INIT:
      return copy2dArray(action.cells);
    case CELL_MARK_START:
    case CELL_MARK_TARGET:
    case CELL_MARK_WORM_ENTER:
    case CELL_MARK_WORM_EXIT:
    case CELL_MARK: {
      const cell = Object.assign({}, { type: action.elemType }, action.position);
      const newCells = copy2dArray(state);
      newCells[action.position.y][action.position.x] = cell;
      return newCells;
    }
    case PATH_BUILD: {
      const newCells = copy2dArray(state);
      const { path } = action;
      path.forEach((el) => {
        const cell = newCells[el.y][el.x];
        newCells[el.y][el.x] = Object.assign({}, cell, {
          path: true,
        });
      });
      return newCells;
    }
    default:
      return state;
  }
};

export default cells;
