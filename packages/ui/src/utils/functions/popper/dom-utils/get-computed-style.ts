import getWindow from './get-window';

export default function getComputedStyle(
  element: Element
): CSSStyleDeclaration {
  return getWindow(element).getComputedStyle(element);
}
