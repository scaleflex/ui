import type { Rect, VirtualElement, Window } from '../types';
import getBoundingClientRect from './get-bounding-client-rect';
import getNodeScroll from './get-node-scroll';
import getNodeName from './get-node-name';
import { isHTMLElement } from './instance-of';
import getWindowScrollBarX from './get-window-scroll-bar-x';
import getDocumentElement from './get-document-element';
import isScrollParent from './is-scroll-parent';

// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
export default function getCompositeRect(
  elementOrVirtualElement: Element | VirtualElement,
  offsetParent: Element | Window,
  isFixed = false
): Rect {
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(elementOrVirtualElement);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);

  let scroll = { scrollLeft: 0, scrollTop: 0 };
  let offsets = { x: 0, y: 0 };

  if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
    if (
      getNodeName(offsetParent) !== 'body' || isScrollParent(documentElement)
    ) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height,
  };
}
