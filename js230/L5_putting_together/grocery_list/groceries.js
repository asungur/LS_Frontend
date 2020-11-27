// Clear the form's contents.

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector("form");
  let ulList = document.querySelector('#grocery-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let quantity = document.querySelector('#quantity').value || "1";

    let listItem = document.createElement("li");
    listItem.append(`${quantity} ${name}`);

    ulList.append(listItem);

    form.reset();
  });
})