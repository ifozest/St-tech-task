import { generateKey, isSamePosition, getNeighbors } from 'services/grid';
import { types } from 'services/element/types';
import { getWalkCost } from 'services/element';


export const directDistEstimation = (start, end) =>
  Math.abs(end.x - start.x) + Math.abs(end.y - start.y);

export const closestWormHoleDistEstimation = (node, wormholes) =>
  Math.min(...wormholes.map(wormhole => directDistEstimation(node, wormhole)));

export const distEstimation = (start, end, wormEntrances, wormExits) => {
  const direct = directDistEstimation(start, end);
  const toWormEntrance = closestWormHoleDistEstimation(start, wormEntrances);
  const fromWormExit = closestWormHoleDistEstimation(end, wormExits);
  return Math.min(direct, toWormEntrance + fromWormExit);
};

export const getTotalPath = (node, cameFrom) => {
  const totalPath = [node];
  let key = generateKey(node);
  while (key in cameFrom) {
    const current = cameFrom[key];
    totalPath.push(current);
    key = generateKey(current);
  }
  return totalPath;
};

export const findPath = (start, end, grid, wormEntrances, wormExits) => {
  const closedSet = {};

  const openSet = [start];

  const cameFrom = {};

  const gScore = {
    [generateKey(start)]: 0,
  };

  const fScore = {
    [generateKey(start)]: distEstimation(start, end, wormEntrances, wormExits),
  };


  while (openSet.length) {
    openSet.sort((a, b) => (
      fScore[generateKey(b)] - fScore[generateKey(a)]
    ));

    const node = openSet.pop();
    const nodeKey = generateKey(node);

    if (isSamePosition(node, end)) {
      return getTotalPath(node, cameFrom);
    }
    closedSet[nodeKey] = node;

    let neighbors = getNeighbors(node, grid);
    if (node.type === types.wormholeEntrance) {
      neighbors = [...wormExits, ...neighbors];
    }

    neighbors.forEach((neighbor) => {
      const nKey = generateKey(neighbor);
      if (closedSet[nKey]) {
        return;
      }

      if (!openSet.includes(neighbor)) {
        openSet.push(neighbor);
      }

      const tG = gScore[nodeKey] + getWalkCost(neighbor.type);
      if (tG >= gScore[nKey]) {
        return;
      }

      cameFrom[nKey] = node;
      gScore[nKey] = tG;
      fScore[nKey] = gScore[nKey] + distEstimation(neighbor, end, wormEntrances, wormExits);
    });
  }
  return [];
};
