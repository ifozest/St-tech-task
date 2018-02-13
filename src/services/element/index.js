import { elementsMap } from './elements';

export const isWalkable = (type) => {
  const walkable = elementsMap[type] && elementsMap[type].walkable;
  return walkable !== false;
};

export const getWalkCost = (type) => {
  const walkCost = elementsMap[type] && elementsMap[type].walkCost;
  return walkCost || 1;
};
