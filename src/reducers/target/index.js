import {
  CELL_MARK_TARGET,
  GRID_INIT,
} from 'utils/constants/redux';

const target = (state = null, action) => {
  switch (action.type) {
    case GRID_INIT: {
      return null;
    }
    case CELL_MARK_TARGET:
      return Object.assign({}, action.position);
    default:
      return state;
  }
};

export default target;
