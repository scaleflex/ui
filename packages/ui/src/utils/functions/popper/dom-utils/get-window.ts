
export default function getWindow(node){
  if (node.toString() !== '[object Window]') {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
