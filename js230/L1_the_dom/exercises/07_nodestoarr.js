function nodesToArr(node = document.body) {
  let childrenArray = Array.prototype.slice.call(node.children);
  return [node.tagName, childrenArray.map(nodesToArr)];
}