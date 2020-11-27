document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let firstNum = document.getElementById('first-number').value;
    let secondNum = document.getElementById('second-number').value;
    let operator = document.getElementById('operator').value;
    let result = document.querySelector('#result');
  
    let calcResult = (eval(`${firstNum} ${operator} ${secondNum}`));
  

    result.textContent = String(calcResult);
  });
});