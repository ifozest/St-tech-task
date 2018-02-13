import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { markCell } from 'actions/grid';
import CellComponent from 'components/Cell';
import { CELL_MARK } from 'utils/constants/redux';
import { types } from 'services/element/types';
import Cell from './';

jest.mock('actions/grid');
jest.mock('components/Cell', () => () => (<div />));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('#containers/Cell', () => {
  const selectedElement = types.boulder;
  const start = { x: 1, y: 1 };
  const target = { x: 2, y: 2 };
  const initState = {
    selectedElement,
    start,
    target,
  };
  const store = mockStore(initState);
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><Cell /></Provider>);
  });

  describe('#placeElement', () => {
    it('should trigger deleteTask action', () => {
      markCell.mockImplementation(() => ({
        type: CELL_MARK,
      }));
      const elemType = types.simple;
      const position = { x: 0, y: 0 };
      wrapper.find(CellComponent).props().placeElement(elemType, position);
      expect(markCell).toBeCalledWith(elemType, position);
    });
  });

  describe('#placeElement', () => {
    it('should trigger deleteTask action', () => {
      const props = wrapper.find(CellComponent).props();
      expect(props.selectedElement).toEqual(selectedElement);
      expect(props.start).toEqual(start);
      expect(props.target).toEqual(target);
    });
  });
});
