import getWindowScroll from './get-window-scroll';
import getWindow from './get-window';
import { isHTMLElement } from './instance-of';
import getHTMLElementScroll from './get-html-element-scroll';
import type { Window } from '../types';

export default function getNodeScroll(node: Node | Window) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  }
  return getHTMLElementScroll(node as HTMLElement);
}
