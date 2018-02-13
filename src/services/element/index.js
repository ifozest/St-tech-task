import { elementsMap } from './elements';

/**
 * Check if element with given type is walkable, by default - true
 * @param {string} type
 * @return {boolean}
 */
export const isWalkable = (type) => {
  const walkable = elementsMap[type] && elementsMap[type].walkable;
  return walkable !== false;
};

/**
 * Returns walkCost for element with given type, by default 1
 * @param {string} type
 * @return {number}
 */
export const getWalkCost = (type) => {
  const walkCost = elementsMap[type] && elementsMap[type].walkCost;
  return walkCost || 1;
};
