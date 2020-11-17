// When the user clicks on a navigation link (Articles 1-4), the browser scrolls to that article in the <main> element and adds the highlight class to it. If another element already has the highlight class, the browser removes the class from that element.

// When the user clicks on an article element or any of its child elements, the browser adds the highlight class to it. If another element already has the highlight class, the browser removes the class from that element.

// When the user clicks anywhere else on the page, the browser adds the highlight class to the main element. If another element already has the highlight class, the browser removes the class from that element.

document.addEventListener('DOMContentLoaded', () => {
  let listElement = document.querySelector('ul');
  let articleElements = Array.prototype.slice.call(document.querySelector('article'));
  let mainElement = document.querySelector('main');

  listElement.addEventListener('click', event => {
    let activeLink = event.target;
    let linkId = activeLink.href.slice(activeLink.href.length - 10);

    removeHighlight();
    highlight(linkId);
  });

  mainElement.addEventListener('click', event => {
    event.preventDefault();

    let selectedElement = event.target;

    if (selectedElement.tagName !== 'ARTICLE') {
      selectedElement = selectedElement.parentNode;
    }

    if(selectedElement.tagName === 'ARTICLE') {
      event.stopPropagation();

      removeHighlight();

      selectedElement.classList.add('highlight');
    }

  });
});

function highlight(id) {
  let initialArticle = document.querySelector(id);

  initialArticle.classList.add('highlight');
}

function removeHighlight() {
  let highlightedElement = document.querySelector('.highlight');

  console.log(highlightedElement)

  if (!!highlightedElement) {
    highlightedElement.classList.remove('highlight');
  }
}
