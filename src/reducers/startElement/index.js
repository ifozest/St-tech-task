import {
  CELL_MARK_START,
  GRID_INIT,
} from 'utils/constants/redux';

const startElement = (state = null, action) => {
  switch (action.type) {
    case GRID_INIT: {
      return null;
    }
    case CELL_MARK_START:
      return Object.assign({}, action.position);
    default:
      return state;
  }
};

export default startElement;
