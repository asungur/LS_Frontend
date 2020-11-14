function displayAlert(event) {
  let message = document.getElementById('message').value;
  alert(message);
}

document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('alert');
  button.addEventListener('click', displayAlert);
});

// COMBINED
// document.addEventListener('DOMContentLoaded', () => {
//   let button = document.getElementById('alert');
//   button.addEventListener('click', event => {
//     let message = document.getElementById('message').value;
//     alert(message);
//   });
// });

