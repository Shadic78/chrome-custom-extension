const body = document.querySelector('body');
const nodes = body.childNodes;

for (const node of nodes) {
  if (node.nodeType !== 1) continue;

  const className = node.getAttribute('class');
  const idName = node.getAttribute('id');

  if (className?.length > 40 && idName?.length > 20) {
    body.removeChild(node);
    break;
  }
}
