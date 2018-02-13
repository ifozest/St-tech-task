import React from 'react';
import { shallow } from 'enzyme';

import { types } from 'services/element/types';
import { isSamePosition } from 'services/grid';

import Cell from './';

jest.mock('services/grid');
const placeElement = jest.fn();

describe('#components/Cell', () => {
  describe('#render', () => {
    it('should render Cell with css styles based on cell type', () => {
      const selectedElement = types.start;
      const cell = {
        type: types.boulder,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={placeElement}
        cell={cell}
        selectedElement={selectedElement}
      />);

      expect(wrapper.hasClass('cell')).toBe(true);
      expect(wrapper.hasClass('cell-boulder')).toBe(true);
    });

    it('should render Cell with css styles for path if cell is path', () => {
      const selectedElement = types.start;
      const cell = {
        type: types.boulder,
        x: 0,
        y: 0,
        path: true,
      };
      const wrapper = shallow(<Cell
        placeElement={placeElement}
        cell={cell}
        selectedElement={selectedElement}
      />);

      expect(wrapper.hasClass('path')).toBe(true);
    });
  });

  describe('#markCell', () => {
    it('should not trigger placeElement if current cell type is start', () => {
      const selectedElement = types.start;
      const cell = {
        type: types.start,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={placeElement}
        cell={cell}
        selectedElement={selectedElement}
      />);

      wrapper.simulate('mousedown');
      expect(placeElement).not.toBeCalled();
    });

    it('should not trigger placeElement if current cell type is target', () => {
      const selectedElement = types.start;
      const cell = {
        type: types.target,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={placeElement}
        cell={cell}
        selectedElement={selectedElement}
      />);

      wrapper.simulate('mousedown');
      expect(placeElement).not.toBeCalled();
    });

    it('should trigger placeElement with type = selectedElement if current cell type !== selectedElement', () => {
      const selectedElement = types.start;
      const cell = {
        type: types.simple,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={placeElement}
        cell={cell}
        selectedElement={selectedElement}
      />);

      wrapper.simulate('mousedown');
      expect(placeElement).toBeCalledWith(selectedElement, { x: 0, y: 0 });
    });

    it('should trigger placeElement with type = simple if current cell type === selectedElement', () => {
      const selectedElement = types.boulder;
      const cell = {
        type: types.boulder,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={placeElement}
        cell={cell}
        selectedElement={selectedElement}
      />);

      wrapper.simulate('mousedown');
      expect(placeElement).toBeCalledWith(types.simple, { x: 0, y: 0 });
    });
  });

  describe('#shouldComponentUpdate', () => {
    it('should return true if props.cell !== newProps.cell', () => {
      const cell = {
        type: types.boulder,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={placeElement}
        cell={cell}
      />);
      const newProps = {
        cell: Object.assign({}, cell),
      };
      const result = wrapper.instance().shouldComponentUpdate(newProps, {});
      expect(result).toBe(true);
    });

    it('should return true if state !== newState', () => {
      const cell = {
        type: types.boulder,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={placeElement}
        cell={cell}
      />);
      const newState = {};
      const result = wrapper.instance().shouldComponentUpdate({ cell }, newState);
      expect(result).toBe(true);
    });

    it('should return false if state === newState && props.cell === newProps.cell', () => {
      const cell = {
        type: types.boulder,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={placeElement}
        cell={cell}
      />);
      const state = wrapper.state();
      const result = wrapper.instance().shouldComponentUpdate({ cell }, state);
      expect(result).toBe(false);
    });
  });

  describe('#componentWillReceiveProps', () => {
    it('shoult not trigger placeElement if this cell is not start or target type', () => {
      const mock = jest.fn();
      isSamePosition.mockImplementation(() => true);
      const cell = {
        type: types.boulder,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={mock}
        cell={cell}
      />);
      const nextProps = {
        start: {
          type: types.start,
          x: 0,
          y: 0,
        },
        target: {
          type: types.target,
          x: 1,
          y: 2,
        },
      };
      wrapper.instance().componentWillReceiveProps(nextProps);
      expect(mock).not.toBeCalled();
    });

    it('shoult not trigger placeElement if start is not defined or start on the current cell', () => {
      const mock = jest.fn();
      isSamePosition.mockImplementation(() => true);
      const cell = {
        type: types.start,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={mock}
        cell={cell}
      />);
      let nextProps = {};
      wrapper.instance().componentWillReceiveProps(nextProps);
      expect(mock).not.toBeCalled();

      nextProps = {
        start: {
          type: types.start,
          x: 0,
          y: 0,
        },
      };
      wrapper.instance().componentWillReceiveProps(nextProps);
      expect(mock).not.toBeCalled();
    });

    it('shoult trigger placeElement if start on the another cell', () => {
      const mock = jest.fn();
      isSamePosition.mockImplementation(() => false);
      const cell = {
        type: types.start,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={mock}
        cell={cell}
      />);
      const nextProps = {
        start: {
          type: types.start,
          x: 1,
          y: 1,
        },
      };
      wrapper.instance().componentWillReceiveProps(nextProps);
      expect(mock).toBeCalledWith(types.simple, { x: 0, y: 0 });
    });

    it('shoult not trigger placeElement if target is not defined or target on the current cell', () => {
      const mock = jest.fn();
      isSamePosition.mockImplementation(() => true);
      const cell = {
        type: types.target,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={mock}
        cell={cell}
      />);
      let nextProps = {};
      wrapper.instance().componentWillReceiveProps(nextProps);
      expect(mock).not.toBeCalled();

      nextProps = {
        target: {
          type: types.target,
          x: 0,
          y: 0,
        },
      };
      wrapper.instance().componentWillReceiveProps(nextProps);
      expect(mock).not.toBeCalled();
    });

    it('shoult trigger placeElement if target on the another cell', () => {
      const mock = jest.fn();
      isSamePosition.mockImplementation(() => false);
      const cell = {
        type: types.target,
        x: 0,
        y: 0,
      };
      const wrapper = shallow(<Cell
        placeElement={mock}
        cell={cell}
      />);
      const nextProps = {
        target: {
          type: types.target,
          x: 1,
          y: 1,
        },
      };
      wrapper.instance().componentWillReceiveProps(nextProps);
      expect(mock).toBeCalledWith(types.simple, { x: 0, y: 0 });
    });
  });
});
