import {
  GRID_INIT,
  PATH_BUILD,
} from 'utils/constants/redux';

const path = (state = null, action) => {
  switch (action.type) {
    case PATH_BUILD:
      return [...action.path];
    case GRID_INIT:
      return null;
    default:
      return state;
  }
};

export default path;
