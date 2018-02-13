import {
  CELL_MARK_WORM_EXIT,
  GRID_INIT,
} from 'utils/constants/redux';

const wormExits = (state = [], action) => {
  switch (action.type) {
    case GRID_INIT: {
      return [];
    }
    case CELL_MARK_WORM_EXIT: {
      state.push(Object.assign({}, action.position));
      return [...state];
    }
    default:
      return state;
  }
};

export default wormExits;
