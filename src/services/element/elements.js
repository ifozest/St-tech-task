import { types } from './types';

export const simple = {
  type: types.simple,
  label: 'Default',
};

export const start = {
  type: types.start,
  label: 'START',
};

export const target = {
  type: types.target,
  label: 'TARGET',
};

export const boulder = {
  type: types.boulder,
  label: 'BOULDER',
  walkable: false,
};

export const gravel = {
  type: types.gravel,
  label: 'GRAVEL',
  walkCost: 2,
};

export const wormholeEntrance = {
  type: types.wormholeEntrance,
  label: 'WORMHOLE ENTRANCE',
};

export const wormholeExit = {
  type: types.wormholeExit,
  label: 'WORMHOLE EXIT',
};

export const elementsMap = {
  simple,
  start,
  target,
  boulder,
  gravel,
  wormholeEntrance,
  wormholeExit,
};
