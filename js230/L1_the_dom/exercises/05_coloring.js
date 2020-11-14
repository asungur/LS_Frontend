function colorGeneration(gen) {
  let originElement = document.getElementById('1');

  function extractGenElements(generation, initialElement, level) {
    if (level === generation) {
      initialElement.classList.add("generation-color");
    } else {
      let initialChildren = Array.prototype.slice.call(initialElement.children);

      initialChildren.forEach(child => extractGenElements(gen, child, level + 1));
    }
  }

  extractGenElements(gen, originElement, 1);
}

