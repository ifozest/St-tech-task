import { types } from 'services/element/types';
import { isWalkable } from 'services/element';

/**
 * Hardcoded
 * @type {number}
 */
const rows = 20;
const columns = 30;
/**
 * Init cells for grid
 * cell can be found by cells[y][x]
 * where y - point on yAxis
 *       x - point on xAxis
 *
 */
export const init = () => {
  const cells = [];
  let row = [];
  for (let i = 0; i < rows; i += 1) {
    row = [];
    for (let j = 0; j < columns; j += 1) {
      row.push({
        y: i,
        x: j,
        type: types.simple,
      });
    }
    cells.push(row);
  }
  return cells;
};

/**
 * Check if two cells are placed on the same position on the grid
 * both cells should contain their coordinates
 * @param {Object} cell1
 * @param {Object} cell2
 */
export const isSamePosition = (cell1, cell2) => cell1.x === cell2.x && cell1.y === cell2.y;

/**
 * generates unique key for cell based on their coordinates
 * @param cell
 */
export const generateKey = cell => `x${cell.x}y${cell.y}`;

/**
 * Check if cell's coordinates are inside the grid
 * @param x
 * @param y
 */
export const isCellExistsAt = (x, y) => x >= 0 && x < columns && y >= 0 && y < rows;

export const isCellWalkableAt = (x, y, grid) => {
  if (isCellExistsAt(x, y)) {
    const cell = grid[y][x];
    return isWalkable(cell.type);
  }
  return false;
};

/**
 * Returns array of walkable neighbors for current cell
 * @param cell
 * @param grid
 * @return {Array}
 */
export const getNeighbors = (cell, grid) => {
  const { x, y } = cell;
  const neighbors = [];
  // top
  if (isCellWalkableAt(x, y - 1, grid)) {
    neighbors.push(grid[y - 1][x]);
  }

  // right
  if (isCellWalkableAt(x + 1, y, grid)) {
    neighbors.push(grid[y][x + 1]);
  }
  // bottom
  if (isCellWalkableAt(x, y + 1, grid)) {
    neighbors.push(grid[y + 1][x]);
  }
  // left
  if (isCellWalkableAt(x - 1, y, grid)) {
    neighbors.push(grid[y][x - 1]);
  }

  return neighbors;
};
