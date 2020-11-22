// SERIALIZING
let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');

let data = { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' };
let json = JSON.stringify(data);

request.send(json);

// SETTING UP THE CONTENT-TYPE HEADER
let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');

request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

let data = { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' };
let json = JSON.stringify(data);

request.send(json);

// EXAMPLE RAW HTTP REQUEST
POST /books HTTP/1.1
Host: ls-230-book-catalog.herokuapp.com
Content-Type: application/json; charset=utf-8
// Accept: */*
{"title": "Eloquent JavaScript", "author": "Marijn Haverbeke"}

// Write some JavaScript to create a new product by sending a request to the JSON API on our web store. To create a product, make a POST request to https://ls-230-web-store-demo.herokuapp.com/v1/products. To make the post request, you'll need the following:
// Content-Type header set to application/json; charset=utf-8
// Authorization header set to token AUTH_TOKEN
// json object with with the following properties:
// name
// sku (must have 3 or more characters)
// price (must be an integer greater than 0)

function createProduct(productData) {
  let json = JSON.stringify(productData);
  let request = new XMLHttpRequest();

  request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

  request.addEventListener('load', () => {
    console.log(`This product was added: ${request.responseText}`);
  });

  request.send(json);
}

createProduct({
  name: 'HB pencil',
  sku: 'hbp100',
  price: 50,
});