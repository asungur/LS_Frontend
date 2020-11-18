const tracker = (() => {
  const events = [];
  return {
    list() {
      return events.slice();
    },
    elements() {
      return this.list().map(({target}) => target);
    },
    add(event) {
      events.push(event);
    },
    clear() {
      events.length = 0;
      return events.length;
    },
  };
})();

function track(callback) {
  function isEventTracked(events, event) {
    return events.includes(event);
  }

  return event => {
    if (!isEventTracked(tracker.list(), event)) {
      tracker.add(event);
    }

    callback(event);
  };
}


// SCENARIO
// Assume that the user clicks the elements in the following order: div#blue, div#red, div#orange, and div#green.

document.addEventListener('DOMContentLoaded', () => {
  let divRed = document.querySelector('#red');
  let divBlue = document.querySelector('#blue');
  let divOrange = document.querySelector('#orange');
  let divGreen = document.querySelector('#green');


  // divRed.addEventListener('click', track(event => {
  //   document.body.style.background = 'red';
  // }));

  divRed.addEventListener('click', event => {
    document.body.style.background = 'red';
  });
  
  // divBlue.addEventListener('click', track(event => {
  //   event.stopPropagation();
  //   document.body.style.background = 'blue';
  // }));
  
  // divOrange.addEventListener('click', track(event => {
  //   document.body.style.background = 'orange';
  // }));
  
  // divGreen.addEventListener('click', track(event => {
  //   document.body.style.background = 'green';
  // }));  
});

// tracker.list().length
// = 4
// tracker.elements()
// = [div#blue, div#red, div#orange, div#green]
// tracker.elements()[0] === document.querySelector('#blue')
// = true
// tracker.elements()[3] === document.querySelector('#green')
// = true
// tracker.clear()
// = 0
// tracker.list()
// = []
// tracker.list()[0] = 'abc'
// tracker.list().length
// = 0