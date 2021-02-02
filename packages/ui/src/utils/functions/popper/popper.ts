// @flow
import { popperGenerator } from './create-popper';

import eventListeners from './modifiers/event-listeners';
import popperOffsets from './modifiers/popper-offsets';
import computeStyles from './modifiers/compute-styles';
import applyStyles from './modifiers/apply-styles';
import offset from './modifiers/offset';
import flip from './modifiers/flip';
import preventOverflow from './modifiers/prevent-overflow';
import arrow from './modifiers/arrow';
import hide from './modifiers/hide';

export * from './types';

const defaultModifiers = [
  eventListeners,
  popperOffsets,
  computeStyles,
  applyStyles,
  offset,
  flip,
  preventOverflow,
  arrow,
  hide,
];

const createPopper = popperGenerator({ defaultModifiers });

// eslint-disable-next-line import/no-unused-modules
export {
  createPopper, popperGenerator, defaultModifiers
};
// eslint-disable-next-line import/no-unused-modules

// eslint-disable-next-line import/no-unused-modules
export * from './modifiers';
