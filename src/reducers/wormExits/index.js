import {
  CELL_MARK_WORM_ENTER,
  CELL_MARK_WORM_EXIT,
  CELL_MARK_TARGET,
  CELL_MARK_START,
  CELL_MARK,
  GRID_INIT,
} from 'utils/constants/redux';
import { isSamePosition } from 'services/grid';


const wormExits = (state = [], action) => {
  switch (action.type) {
    case GRID_INIT: {
      return [];
    }
    case CELL_MARK_WORM_EXIT: {
      state.push(Object.assign({}, action.position));
      return [...state];
    }
    case CELL_MARK_START:
    case CELL_MARK_TARGET:
    case CELL_MARK_WORM_ENTER:
    case CELL_MARK:
      return state.filter(cell => !isSamePosition(cell, action.position));
    default:
      return state;
  }
};

export default wormExits;
