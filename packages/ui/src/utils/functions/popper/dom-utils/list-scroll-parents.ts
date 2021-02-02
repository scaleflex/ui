import getScrollParent from './get-scroll-parent';
import getParentNode from './get-parent-node';
import getNodeName from './get-node-name';
import getWindow from './get-window';
import type { Window, VisualViewport, VirtualElement } from '../types';
import isScrollParent from './is-scroll-parent';

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
export default function listScrollParents(
  element: Node | Element | VirtualElement,
  list: Array<Element | Window> = []
): Array<Element | Window | VisualViewport> {
  const scrollParent = getScrollParent(element as Node);

  const isBody = getNodeName(scrollParent) === 'body';

  const win = getWindow(scrollParent);

  const target = isBody
    ? [win].concat(
      win.visualViewport || [],
      isScrollParent(scrollParent) ? scrollParent : []
    )
    : scrollParent;
  const updatedList = list.concat(target);

  return isBody
    ? updatedList
    : updatedList.concat(listScrollParents(getParentNode(target)));
}
