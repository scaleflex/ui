import getParentNode from './get-parent-node';
import isScrollParent from './is-scroll-parent';
import getNodeName from './get-node-name';
import { isHTMLElement } from './instance-of';

export default function getScrollParent(node: Node): HTMLElement {
  if (['html', 'body', '#document'].includes(getNodeName(node))) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
