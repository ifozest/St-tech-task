import {
  CELL_MARK_WORM_ENTER,
  GRID_INIT,
} from 'utils/constants/redux';

const wormEntrances = (state = [], action) => {
  switch (action.type) {
    case GRID_INIT: {
      return [];
    }
    case CELL_MARK_WORM_ENTER: {
      state.push(Object.assign({}, action.position));
      return [...state];
    }
    default:
      return state;
  }
};

export default wormEntrances;
