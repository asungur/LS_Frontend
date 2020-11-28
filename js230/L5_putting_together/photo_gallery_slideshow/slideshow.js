document.addEventListener('DOMContentLoaded', () => {
  let figures = document.querySelectorAll('figure');
  let figuresList = Array.prototype.slice.call(figures);
  let nav = document.querySelector('ul');
  let navList = Array.prototype.slice.call(nav.children);

  
  nav.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.tagName === 'IMG') {
      let imageIndex = navList.indexOf(e.target.closest('li'));

      figuresList.forEach((figure, index) => {
        if (index === imageIndex) {
          figure.style.display = 'block';
        } else {
          figure.style.display = 'none';
        }
      });
    }
  });
});