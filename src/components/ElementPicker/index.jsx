import React from 'react';

import Element from 'containers/Element';
import {
  start,
  target,
  boulder,
  gravel,
  wormholeEntrance,
  wormholeExit,
} from 'services/element/elements';

const elements = [
  start,
  target,
  boulder,
  gravel,
  wormholeEntrance,
  wormholeExit,
];

const ElementPicker = () => (
  <div className="element-picker">
    {elements.map(el => (
      <Element
        key={el.type}
        element={el}
      />
    ))}
  </div>
);

export default ElementPicker;
