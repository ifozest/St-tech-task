import {
  CELL_MARK_WORM_ENTER,
  CELL_MARK,
  CELL_MARK_WORM_EXIT,
  CELL_MARK_TARGET,
  CELL_MARK_START,
  PATH_CLEAR,
  GRID_INIT,
  PATH_BUILD,
  ELEMENT_PICK,
} from 'utils/constants/redux';
import { types } from 'services/element/types';
import { init } from 'services/grid';

import {
  clearPath,
  buildPath,
  initGrid,
  markCell,
  pickElement,
} from './';

jest.mock('services/grid');


describe('#actions/grid', () => {
  describe('#initGrid', () => {
    it('should return action with type INIT_GRID and specified cells', () => {
      const cells = [];
      init.mockImplementation(() => cells);
      expect(initGrid()).toEqual({
        type: GRID_INIT,
        cells,
      });
    });
  });

  describe('#clearPath', () => {
    it('should return action with type PATH_CLEAR and specified path', () => {
      const path = [];
      expect(clearPath(path)).toEqual({
        type: PATH_CLEAR,
        path,
      });
    });
  });

  describe('#buildPath', () => {
    it('should return action with type PATH_BUILD and specified path', () => {
      const path = [];
      expect(buildPath(path)).toEqual({
        type: PATH_BUILD,
        path,
      });
    });
  });

  describe('#pickElement', () => {
    it('should return action with type ELEMENT_PICK and specified path', () => {
      const element = {
        x: 0,
        y: 0,
      };
      expect(pickElement(element)).toEqual({
        type: ELEMENT_PICK,
        element,
      });
    });
  });

  describe('#markCell', () => {
    it('should return action with type CELL_MARK and specified elemType and position', () => {
      const elemType = types.simple;
      const position = {
        x: 0,
        y: 0,
      };
      expect(markCell(elemType, position)).toEqual({
        type: CELL_MARK,
        elemType,
        position,
      });
    });

    it('should return action with type CELL_MARK_START and specified elemType and position', () => {
      const elemType = types.start;
      const position = {
        x: 0,
        y: 0,
      };
      expect(markCell(elemType, position)).toEqual({
        type: CELL_MARK_START,
        elemType,
        position,
      });
    });

    it('should return action with type CELL_MARK_TARGET and specified elemType and position', () => {
      const elemType = types.target;
      const position = {
        x: 0,
        y: 0,
      };
      expect(markCell(elemType, position)).toEqual({
        type: CELL_MARK_TARGET,
        elemType,
        position,
      });
    });

    it('should return action with type CELL_MARK_WORM_ENTER and specified elemType and position', () => {
      const elemType = types.wormholeEntrance;
      const position = {
        x: 0,
        y: 0,
      };
      expect(markCell(elemType, position)).toEqual({
        type: CELL_MARK_WORM_ENTER,
        elemType,
        position,
      });
    });

    it('should return action with type CELL_MARK_WORM_EXIT and specified elemType and position', () => {
      const elemType = types.wormholeExit;
      const position = {
        x: 0,
        y: 0,
      };
      expect(markCell(elemType, position)).toEqual({
        type: CELL_MARK_WORM_EXIT,
        elemType,
        position,
      });
    });
  });
});

