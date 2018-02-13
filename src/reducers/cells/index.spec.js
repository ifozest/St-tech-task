import { copy2dArray } from 'utils/helper';
import { types } from 'services/element/types';

import {
  CELL_MARK_WORM_EXIT,
  CELL_MARK_WORM_ENTER,
  CELL_MARK_TARGET,
  CELL_MARK_START,
  CELL_MARK,
  PATH_BUILD,
  PATH_CLEAR,
  GRID_INIT,
} from 'utils/constants/redux';

import cells from './';

jest.mock('utils/helper');

describe('#reducers/cells', () => {
  describe('#handle default action', () => {
    it('should return initial state', () => {
      const state = [];
      expect(cells(undefined, {})).toEqual(state);
    });

    it('should return previous state if type is not specified', () => {
      const state = [
        [{ x: 0, y: 0 }],
      ];
      expect(cells(state, {})).toEqual(state);
    });
  });

  describe('#handle GRID_INIT action', () => {
    it('should return new cells', () => {
      const copiedState = [[]];
      copy2dArray.mockImplementation(() => copiedState);
      expect(cells(undefined, {
        type: GRID_INIT,
        cells: copiedState,
      })).toEqual(copiedState);
    });
  });

  describe('#handle MARK_CELL action', () => {
    it('should return new cells with marked cell', () => {
      const copiedState = [[
        { x: 0, y: 0, type: types.simple },
      ]];
      copy2dArray.mockImplementation(() => copiedState);
      const elemType = types.start;
      const position = { x: 0, y: 0 };
      const result = [[{
        x: 0,
        y: 0,
        type: elemType,
      }]];

      expect(cells(undefined, {
        type: CELL_MARK,
        elemType,
        position,
      })).toEqual(result);
      expect(cells(undefined, {
        type: CELL_MARK_START,
        elemType,
        position,
      })).toEqual(result);
      expect(cells(undefined, {
        type: CELL_MARK_TARGET,
        elemType,
        position,
      })).toEqual(result);
      expect(cells(undefined, {
        type: CELL_MARK_WORM_ENTER,
        elemType,
        position,
      })).toEqual(result);
      expect(cells(undefined, {
        type: CELL_MARK_WORM_EXIT,
        elemType,
        position,
      })).toEqual(result);
    });
  });

  describe('#handle PATH_BUILD action', () => {
    it('should return new cells with marked path', () => {
      const copiedState = [[
        { x: 0, y: 0, type: types.start },
        { x: 1, y: 0, type: types.simple },
        { x: 2, y: 0, type: types.simple },
      ], [
        { x: 0, y: 1, type: types.simple },
        { x: 1, y: 1, type: types.gravel },
        { x: 2, y: 1, type: types.target },
      ]];
      copy2dArray.mockImplementation(() => copiedState);

      const path = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ];
      expect(cells(undefined, {
        type: PATH_BUILD,
        path,
      })).toEqual([[
        {
          x: 0, y: 0, type: types.start, path: true,
        },
        {
          x: 1, y: 0, type: types.simple, path: true,
        },
        { x: 2, y: 0, type: types.simple },
      ], [
        { x: 0, y: 1, type: types.simple },
        {
          x: 1, y: 1, type: types.gravel, path: true,
        },
        {
          x: 2, y: 1, type: types.target, path: true,
        },
      ]]);
    });
  });

  describe('#handle PATH_CLEAR action', () => {
    it('should return new cells with marked path', () => {
      const copiedState = [[
        {
          x: 0, y: 0, type: types.start, path: true,
        },
        {
          x: 1, y: 0, type: types.simple, path: true,
        },
        { x: 2, y: 0, type: types.simple },
      ], [
        { x: 0, y: 1, type: types.simple },
        {
          x: 1, y: 1, type: types.gravel, path: true,
        },
        {
          x: 2, y: 1, type: types.target, path: true,
        },
      ]];
      copy2dArray.mockImplementation(() => copiedState);

      const path = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ];
      expect(cells(undefined, {
        type: PATH_CLEAR,
        path,
      })).toEqual([[
        {
          x: 0, y: 0, type: types.start, path: false,
        },
        {
          x: 1, y: 0, type: types.simple, path: false,
        },
        { x: 2, y: 0, type: types.simple },
      ], [
        { x: 0, y: 1, type: types.simple },
        {
          x: 1, y: 1, type: types.gravel, path: false,
        },
        {
          x: 2, y: 1, type: types.target, path: false,
        },
      ]]);
    });
  });
});
