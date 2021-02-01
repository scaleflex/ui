import type { State, SideObject, Padding } from '../types';
import type {
  Placement, Boundary, RootBoundary, Context
} from '../enums';
import getBoundingClientRect from '../dom-utils/get-bounding-client-rect';
import getClippingRect from '../dom-utils/get-clipping-rect';
import getDocumentElement from '../dom-utils/get-document-element';
import computeOffsets from './compute-offsets';
import rectToClientRect from './rect-to-client-rect';
import {
  clippingParents,
  reference,
  popper,
  bottom,
  top,
  right,
  basePlacements,
  viewport,
} from '../enums';
import { isElement } from '../dom-utils/instance-of';
import mergePaddingObject from './merge-padding-object';
import expandToHashMap from './expand-to-has-map';

// eslint-disable-next-line import/no-unused-modules
export type Options = {
  placement: Placement,
  boundary: Boundary,
  rootBoundary: RootBoundary,
  elementContext: Context,
  altBoundary: boolean,
  padding: Padding,
};

export default function detectOverflow(
  state: State,
  options: Option = {}
): SideObject {
  const {
    placement = state.placement,
    boundary = clippingParents,
    rootBoundary = viewport,
    elementContext = popper,
    altBoundary = false,
    padding = 0,
  } = options;

  const paddingObject = mergePaddingObject(
    typeof padding !== 'number'
      ? padding
      : expandToHashMap(padding, basePlacements)
  );

  const altContext = elementContext === popper ? reference : popper;

  const referenceElement = state.elements.reference;
  const popperRect = state.rects.popper;
  const element = state.elements[altBoundary ? altContext : elementContext];

  const clippingClientRect = getClippingRect(
    isElement(element)
      ? element
      : element.contextElement || getDocumentElement(state.elements.popper),
    boundary,
    rootBoundary
  );

  const referenceClientRect = getBoundingClientRect(referenceElement);

  const popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement,
  });

  const popperClientRect = rectToClientRect({
    ...popperRect,
    ...popperOffsets,
  });

  const elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;

  // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect
  const overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom:
      elementClientRect.bottom
      - clippingClientRect.bottom
      + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right:
      elementClientRect.right - clippingClientRect.right + paddingObject.right,
  };

  const offsetData = state.modifiersData.offset;

  // Offsets can be applied only to the popper element
  if (elementContext === popper && offsetData) {
    const offset = offsetData[placement];

    Object.keys(overflowOffsets).forEach((key) => {
      const multiply = [right, bottom].includes(key) ? 1 : -1;
      const axis = [top, bottom].includes(key) ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
