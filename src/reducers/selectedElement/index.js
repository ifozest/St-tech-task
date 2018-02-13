import {
  CELL_MARK_START,
  CELL_MARK_TARGET,
  GRID_INIT,
  ELEMENT_PICK,
} from 'utils/constants/redux';

import { types } from 'services/element/types';

const selectedElement = (state = types.start, action) => {
  switch (action.type) {
    case ELEMENT_PICK:
      return action.element;
    case CELL_MARK_START:
      return types.target;
    case CELL_MARK_TARGET:
      return types.boulder;
    case GRID_INIT:
      return types.start;
    default:
      return state;
  }
};

export default selectedElement;
