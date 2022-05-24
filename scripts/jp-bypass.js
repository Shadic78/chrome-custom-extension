const links = document.getElementById('res').value;

const referenceNode = document.querySelector('h2');
const parentNode = referenceNode.parentNode;

const newNode = document.createElement('textarea');
newNode.value = links;
newNode.setAttribute('style', 'width: 50%; height: 200px; padding: 1em;');
newNode.setAttribute('disabled', 'true');

parentNode.insertBefore(newNode, referenceNode);
