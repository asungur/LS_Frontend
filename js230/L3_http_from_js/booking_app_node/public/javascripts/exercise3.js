function formDataToJson(formData) {
  const json = {};
  for (const pair of formData.entries()) {
    json[pair[0]] = pair[1];
  }

  return json;
}

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const request = new XMLHttpRequest();
  const formData = new FormData(form);
  const json = JSON.stringify(formDataToJson(formData));


  request.open('POST', form.action);
  request.setRequestHeader('Content-Type', 'application/json')
  request.send(json);
  
  request.addEventListener('load', event => {
    if (request.status === 201) {
      const data = JSON.parse(request.response);
      alert(`Staff with id: ${data.id} is created`);
      form.reset();
    } else if (request.status === 400) {
      alert(request.responseText);
    } else {
      alert('Something unexpected happened. Please try again.');
    }
  });
});