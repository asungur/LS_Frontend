## Using Web APIs to work with the DOM

**Document Object Model(DOM)** represents an HTML document as in-memory objects. The DOM makes interaction with a web page possible by using JavaScript. This forms the core functionality that is required to build interactive user experiences.

HTML that we code or the HTML source we review in the browser are not the DOM.

The HTML code we write is parsed by the browser and turned into DOM. The outcome of the parsing process (DOM nodes) are different than the HTML file. Browser can often add nodes or remove invalid nodes during this process.

DOM Nodes can have different types. 3 significant ones are :

1. **Elements** that *represent* HTML tags.
2. **Text nodes** that contain the text that appears in the HTML document
3. **Empty text nodes** that are inserted inserted by the browser while creating the DOM. Empty text nodes must be taken into account when interacting with the DOM to prevent bugs.
    - **`document`** node represents the entire HTML document.
    - Some important node properties:

	```jsx
        > p.nodeName
        = "P"
        > p.nodeType
        = 1
        > Node.ELEMENT_NODE
        = 1
        > Node.TEXT_NODE
        = 3
        > Node.COMMENT_NODE
        = 8
        > Node.DOCUMENT_NODE
        = 9
        > p.nodeType === Node.ELEMENT_NODE
        = true
        > p.nodeValue
        = null
        > t.nodeValue
        = "To receive our weekly emails, enter your email address below. "
        ```

DOM objects and their types:

- All DOM objects are **Nodes** which means they inherit(properties and methods) from Node type.
- **Elements**, **Text nodes** and **Comments** are other DOM objects that inherit from Nodes.
- Depending on object's node type we can use different methods and properties to interact with the DOM object.
- Determine the type of a DOM node:

        ```jsx
        > p.toString();
        = "[object HTMLParagraphElement]"
        > p instanceof HTMLElement;
        = true
        > p instanceof Element;
        = true
        > p instanceof Node;
        = true
        > p instanceof SVGElement;
        = false
        > p.tagName;
        = "P"
        ```
DOM Nodes

Some useful **Node** methods for traversing:

Node Methods

Recursive `walk` function with a callback for interacting with the DOM tree:

        ```jsx
        // walk() calls the function "callback" once for each node
        function walk(node, callback) {
          callback(node);                                                   // do something with node
          for (let index = 0; index < node.childNodes.length; index += 1) { // for each child node
            walk(node.childNodes[index], callback);                         // recursively call walk()
          }
        }

        walk(document.body, node => {                                // log nodeName of every node
          console.log(node.nodeName);
        });
        ```

Some important **Element** attributes (getter and setter):

        ```jsx
        > p.hasAttribute('class');
        = true
        > p.getAttribute('class');
        = "intro"
        > p.getAttribute('id');
        = "simple"
        > p.setAttribute('id', 'complex');
        > p
        = <p class="intro" id="complex">...</p>
        ```

Some special attributes `id`, `name`, `title` and `value` can be accessed through properties. Use `className`and/or `classList` for accessing element's class:

        ```jsx
        > p;
        = <p class="intro" id="simple">...</p>
        > p.id
        = "simple"
        > p.id = 'complex'
        > p;
        = <p class="intro" id="complex">...</p>
        > p.className;
        = "intro"
        > p.className = 'outro';
        > p.classList;           // array-like DOMTokenList object that contains different classes and can be interacted with:
        > p.classList.add(className);
        > p.classList.remove(className);
        > p.classList.toggle(className);
        > p.classList.contains(className);
        > p.classList.length;
        > p.style              // style attribute references to a CSSStyleDecleration Object
        = CSSStyleDecleartion { ...... }
        > p.style.color = 'red';
        ```

- **Finding DOM Nodes:**

        ```jsx
        > document.getElementById('content');               // Note that it returns a single element or null
        = <p id="content">...</p>
        > document.getElementsByTagname(tagName);
        > document.getElementsByClassName(className);      // Both return HTMLCollection or NodeList of matching elements(array-like objects)
        > document.querySelector(selector);               // CSS selector for a single element
        > document.querySelectorAll(selectors);           // NodeList of matching elements
        > document.querySelector('#divTwo, #divOne');
        = <div id="divOne"></div>
        > document.querySelectorAll('#divTwo, #divOne');
        = NodeList(2) [div#divOne, div#divTwo
        ```

- **Traversing Elements**

Since element methods won't include text nodes we use different methods to access text nodes within each

        ```jsx
        > document.querySelector('a').textContent;
        = "go back"
        > document.querySelector('a').textContent = 'step backward';
        = "step backward"
        ```

- **Creating DOM Nodes:**

        ```jsx
        let paragraph = document.createElement('p');
        paragraph.textContent = 'This is a test.';
        document.body.appendChild(paragraph);            // Using appendChild
        // Methods for creating elemenets:
        document.createElement(tagName);
        document.createTextNode(text);
        node.cloneNode(deepClone);                      // deepClone boolean true means all children will be cloned with the initial node.
        ```

- **Adding/removing nodes to the DOM:**

        ```jsx
        parent.appendChild(node);
        parent.insertBefore(node, targetNode);                // insert in parent.childNodes before targetNode
        parent.replaceChild(node, targetNode);                // replace targetNode in parent.childNodes with node
        element.insertAdjacentElement(position, newElement);  // insert newElement at position relative to element
        element.insertAdjacentText(position, text);           // insert text node that contains text at position relative to element
        position can be:
        "beforebegin"                                         // Before the element
        "afterbegin"                                          // Before the first child of the element
        "beforeend"                                           // After the last child of the element
        "afterend"                                            // After the element
        node.remove();                                       
        parent.removeChild(node);
        ```

## **Understanding event-driven programming for front-end development**
- **Sequential code** is executed by the browser in a line by line order. A line of code must wait until the previous line runs. JavaScript provides first-class functions, functions are objects that can be passed around as another data type. This allows us to pass-in or return functions as argument into other functions. This does not change the execution order, the code still runs sequentially. However, this provides the foundation for **asynchronous code** execution**.**
- **Asynchronous code** does not follow this logic. We can write code in a way that can a line runs before the lines that follows after it. In the first example we invoke `setTimeout` function with the arguments. A **callback function** and an **integer that represents time in milliseconds**. When  `setTimeout` is invoked the timer will be set and the code will keep executing other lines until the time elapses, then the callback function will be invoked.
- Asynchronous code execution order can not be determined by examining the code only. It requires familiarity with the functions that provide async. code execution. `setTimeout` is not part of the JavaScript specification.

    ```jsx
    setTimeout(() => {             // 1
      console.log('!');            // 5
    }, 3000);

    setTimeout(() => {             // 2
      console.log('World');        // 4
    }, 1000);

    console.log('Hello');          // 3

    function startCounting() {
      let count = 0;
      setInterval(() => {
        count += 1;
        console.log(count);
      }, 1000);
    }
    ```

- **Event** objects make use of asynchronous code in the browser environment. They represent details of an event occurrence such as what happened and where happened. This way we can design an application that responds to user interactions. For example, a program can pop-up an alert when a user click a button using events.
- To be able to do this, a program must register a behavior that responds to an event when it occurs. Interfaces will be drawn on screen and listen until the event occurs.
- We do this in two steps. For simplicity, in step 1 we mainly use HTML to set up and display the interface. In step 2, JavaScript will be responsible for handling these events with **event listeners**.
	1. Browser fully loads the page and evaluates the JavaScript within the script tag. The code registers the callback to handle the **event** when it **fires**.
        2. The browser waits for an event to fire.
        3. The browser invokes the event handler for the event.
        4. Step 2 and 3 repeats.
- Browser page loading process:
        1. HTML code received from server.
        2. HTML parsed and JavaScript evaluated.
        3. DOM constructed from parsed HTML.
        4. **DOMContentLoaded** event fires on **document.**
        5. Page displayed on screen.
        6. Embedded assets are loaded.
        7. **load** event fires on **window.**

There will be milliseconds to seconds difference between the loading DOM content and all the assets.

- Properties of the Event Object:

    ```jsx
    document.addEventListener('click', event => {
    	// respond to the click
    })
    ```

- `type` ⇒ the name of the event
- `currentTarget` ⇒ the current  object that the event object is on. In this case its `document`
- `target` ⇒ the initial object to receive the notification of the event.
- Check this codepen if confused: [https://codepen.io/launchschool/pen/jVPogP](https://codepen.io/launchschool/pen/jVPogP)
- Specific properties to Mouse Events:
        - `button`, `clientX` and `clientY`
- Specific properties to Keyboard events:
	- `key`, `shiftKey`, `altKey`, `ctrlKey`, `metaKey`

        ```jsx
        // currentTarget is the element that the event listener is added on
        event.currentTarget.id === this.id;
        ```

- **Capturing and Bubbling**
	- Capturing and Bubbling are the two consequent phases that occurs upon occurrence of an event. After an event occurs and it gets dispatched to `window` object, Capturing phase starts iterating from here through all containing elements until the element that the event is fired on. From here the reverse phase(Bubbling) iterates again on all containing elements from the initial element up to `window`. These two phases demonstrates that there are more elements involved in event occurrence than the element that we fire the event on. This principle forms the foundation of the **event delegation** in browser environment.
        - The event dispatched once in each phase. However, the actual event listener is called in only in bubbling phase by default, but we can set it to listen in capturing phase instead.
        - `event.stopPropagation` stops the `event` object from iterating through in both **capturing and bubbling** phases.
        - While adding an event listener we can set event object to stop from iterating in capturing phase:

        ```jsx
        document.querySelector('.outer').addEventListener('click',  callback, true);   
        ```

- We can also use `preventDefault` on the event object to disable the default behavior of the event object. For instance, anchor elements open the link that is in their `href` attributes by default. This can be prevented by using `event.preventDefault();` in the callback function of the event listener. It is important to understand that the default behavior prevention is going to be declared on the event object. Therefore, if the event is delegated via capturing and bubbling to another element the default behavior will still be prevented.
- **Event Delegation**
	- Event delegation allows us to structure the event listeners in a more efficient and a simpler way. Iterating over the elements and adding event listeners one by one has significant drawbacks:
            1. Modifying web applications (adding, removing, replacing elements) is a common practice. Doing so will require adding event listeners as we modify the page content.
            2. We must wait DOM content to finish loading before adding the event listeners which has performance drawbacks.
            3. Attaching duplicate(or similar) event listeners to similar elements will have performance drawbacks.
        - Event delegation addresses these problems by using **propagation**. By adding an event listener to a parent element we can perform the same interaction. The downside of this approach is that the listener will be responsible for dealing with different interactions and the code will require more logic to react each event differently. It is better practice to use event delegation as the project size and complexity increases.

        ```jsx
        // EXAMPLE: Instead of adding listener on each button the document contains the event listener:
        document.addEventListener('click', event => {  
          if (event.target.tagName === 'BUTTON') {
            let message = document.getElementById('message');
            message.textContent = `${event.target.textContent}  was clicked!`;
          }
        });
        ```

## **Communicating with the server through XHR and rendering the response to the page**
- HTTP provides request-response cycle that forms the foundation of web applications. A typical interaction cycle works like this:
	1. User's action(a new URL that sets the HTTP request)
        2. Browser sends the HTTP request to server.
        3. Server responds with relevant HTML content.
        4. Browser parses the information and displays the new page.

This flow is limited to sending links and rendering full pages in the viewport.

- **AJAX(Asynchronous JavaScript and XML)** is used for its ability to fetch data and update parts of a page.
- Instead of using a full page load, we use **JavaScript to initiate an AJAX request**. This can happen as a result of an event occurrence.
- The received response is parsed through JavaScript and added to the page as preferred.
- Example AJAX flow for displaying a pop-up:
        1. User action(event) fires an event listener JavaScript function
        2. JavaScript sends HTTP request to the server via `XMLHttpRequest`
        3. Server responds with the HTML information.
        4. JavaScript code inserts the HTML content into relevant parts of the existing page.
- A **single page application** refers to an application that is based on making requests outside of the main HTML page load. These applications run on client's browser and use JavaScript to retrieve data from server and to create the DOM.
- `XMLHttpRequest` is an object that is originally created to fetch XML files over HTTP. It is part of the **browser API** and today it is widely used to fetch HTML or JSON data.

    ```jsx
    let request = new XMLHttpRequest(); // Instantiate new XMLHttpRequest object
    request.open('GET', '/path');       // Set HTTP method and URL on request
    request.send();                     // Send request

    request.responseText;                       // body of response
    request.status;                             // status code of response
    request.statusText;                         // status text from response

    request.getResponseHeader('Content-Type');  // response header

    request.readyState;                         // more on this later...

    //OPTIONALLY SET IT TO MAKE SYNCHRONOUS REQUESTS
    var request = new XMLHttpRequest();

    request.open('GET', '/path', false);  // Don't make synchronous requests!

    request.open('GET', '/path', true);   // OK but redundant.

    request.open('GET', '/path');         // Best.
    ```

- There are a few events that allows us to handle `XMLHttpRequest` s.

    ```jsx
    let request = new XMLHttpRequest();

    request.addEventListener('load', event => {
      let xhr = event.target;   // the request is available as event.target
                                // if you can't access it from an outer scope.
    });
    ```

The order that events fire

All non-200 status code responses and responses with errors will be recognized as a successful response by the browser. In short, regardless of which event is fired in the middle, the browser will complete the response. It is developer's responsibility to identify whether the response was successful in terms of application logic. This can by inspecting the response inside of a `load` event handler. 

- **Data Serialization**
        - API communications are based on passing **a form of structured data** back and forth. This structured data follows a format and a media type that works well for representing hierarchical data. These formats are called **data serialization formats**. It demonstrates a way to convert data into a form so that the data can be transferred or stored. Knowing and pre-defining this, allows us to return the data into its original form when needed.
        - In JavaScript applications we are required to serialize the data for communicating with the remote systems. This way client-server communication can happen without interfering with the communication protocol.
        - A couple of these formats:
- **Query String/URL Encoding:** URL encoding for query strings(we've seen in the back-end portion) uses `name=value` pairs separated by `&` characters. The complexity comes from the requirement of encoding the non-alphanumeric characters. JavaScript's `encodeURIComponent` and `decodeURIComponent` allows us to do this easily. With POST request we can use URL encoding. However, we set `Content-Type` header to `application/x-www-form-urlencoded`. Example:

            ```jsx
            POST /path HTTP/1.1
            Host: example.test
            Content-Length: 54
            Content-Type: application/x-www-form-urlencoded; charset=utf-8
            Accept: */*

            title=Do%20Androids%20Dream%20of%20Electric%20Sheep%3F&year=1968  
            ```

    - **Multipart Forms:** This format is used by the POST requests that use `FormData` objects or includes file uploads. This format does not include an encoding and name, the value pairs are replaced in separate sections of the request body. We use **boundary delimiters** to define the boundaries between different sections which needs to be defined in the `Content-Type` header section with `multipart/form-data`. Example:

            ```jsx
            POST /path HTTP/1.1
            Host: example.test
            Content-Length: 267
            Content-Type: multipart/form-data; boundary=----WebKitFormBoundarywDbHM6i57QWyAWro
            Accept: */*

            ------WebKitFormBoundarywDbHM6i57QWyAWro
            Content-Disposition: form-data; name="title"

            Do Androids Dream of Electric Sheep?
            ------WebKitFormBoundarywDbHM6i57QWyAWro
            Content-Disposition: form-data; name="year"

            1968
            ------WebKitFormBoundarywDbHM6i57QWyAWro--
            ```

- **JSON(JavaScript Object Notation) :** It is widely used by APIs for exchanging simple data types such as arrays, objects, strings, numbers, booleans. Complex data types such as dates, times are not supported and requires alternative ways of simplifying them into strings and re-building them.
- `charset=utf-8` notifies the server that the data uses the UTF-8 character encoding. It is good practice to include this to ensure that the server parses the data correctly.

            ```jsx
            POST /path HTTP/1.1
            Host: example.test
            Content-Length: 62
            Content-Type: application/json; charset=utf-8
            Accept: */*

            {"title":"Do Androids Dream of Electric Sheep?","year":"1968"} ****
            ```

- Example; loading HTML with XHR:

            ```jsx
            document.addEventListener('DOMContentLoaded', () => {
              let store = document.getElementById('store');

              let request = new XMLHttpRequest();
              request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');

              request.addEventListener('load', event => store.innerHTML = request.response);
              request.send();

              store.addEventListener('click', event => {
                let target = event.target;
                if (target.tagName !== 'A') {
                  return;
                }

                event.preventDefault();

                let request = new XMLHttpRequest();
                request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));

                request.addEventListener('load', event => store.innerHTML = request.response);
                request.send();
              });
            });
            ```

- Submitting a form(using `FormData` API) with XHR:

            ```jsx
            let form = document.getElementById('form');

            form.addEventListener('submit', event => {
              // prevent the browser from submitting the form
              event.preventDefault();

              let data = new FormData(form);

              let request = new XMLHttpRequest();
              request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');

              request.addEventListener('load', () => {
                if (request.status === 201) {
                  console.log(`This book was added to the catalog: ${request.responseText}`);
                }
              });

              request.send(data);
            });

            // HTTP REQUEST:
            POST /books HTTP/1.1
            Host: ls-230-book-catalog.herokuapp.com
            Content-Length: 234
            Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryf0PCniJK0bw0lb4e
            Accept: */*

            ------WebKitFormBoundaryf0PCniJK0bw0lb4e
            Content-Disposition: form-data; name="title"

            Effective JavaScript
            ------WebKitFormBoundaryf0PCniJK0bw0lb4e
            Content-Disposition: form-data; name="author"

            David Herman
            ------WebKitFormBoundaryf0PCniJK0bw0lb4e--
            ```

- Loading JSON via XHR:

            ```jsx
            let request = new XMLHttpRequest();
            request.open('GET', 'http://ls-230-book-catalog.herokuapp.com/invalid_book');

            request.addEventListener('load', event => {
              try {
                let data = JSON.parse(request.response);
                // do something with the data
              } catch(e) {
                console.log('Cannot parse the received response as JSON.')
              }
            });

            request.send();
            ```

- Sending JSON via XHR:

            ```jsx
            let request = new XMLHttpRequest();
            request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');

            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            let data = { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' };
            let json = JSON.stringify(data);

            request.send(json);
            ```

- **Cross Domain XMLHttpRequests with CORS**:
    - Origin of a web page is defined by it's scheme/protocol, hostname and the port it uses. ( [`http://mysite.com:4000/doc1`](http://mysite.com:4000/doc1))
    - When a web page requests information from another origin we call this a cross-domain request. The requested information can be in many forms, the crucial part to understand is the different components that defines an origin. For example, requesting information from the same domain that uses a different protocol would still be a cross-domain request.
    - Cross-domain requests are vulnerable to security exploitations. Therefore, all browsers employ the same-origin policy by default. This prevents `XMLHttpRequest` from making cross-domain requests. To be able to do this we need to use **Cross-Origin Resource Sharing (CORS)** mechanism.
    - **CORS** specifies a set of rules for server-browser communication across origins. It consist of the following steps:
	1. The `XMLHttpRequest` must contain an `Origin` header that includes the origin of the requesting page. This introduction allows server to check the client in its records. The header will be added into our requests by default by the browser.
	2.  The server checks if the origin is within the allowed to request this. If so the response will contain `Access-Control-Allow-Origin` header with the requesting origin as the value. If the requested resource is publicly available the header value will be set to asterisk `*` .
	3. If the origin is not allowed to access the requested data or if the browser did not receive the correct value in the `Access-Control-Allow-Origin` header, the browser will raise an error.

            ```jsx
            // Example with express.js
            let express = require('express');
            let router = express.Router();

            router.get('/areas_of_continents', (req, res, next) => {
              let continents = {
                asia: 43820000,
                africa: 30370000,
                north_america: 24490000,
                south_america: 17840000,
                antarctica: 13720000,
                europe: 10180000,
                australia: 9008500
              };

              res.json(continents);
            });

            module.exports = router;

            // This will raise the below error:
            XMLHttpRequest cannot load http://localhost:3000/areas_of_continents.
            No 'Access-Control-Allow-Origin' header is present on the requested resource.
            Origin 'http://localhost:8080' is therefore not allowed access.

            // Add the header to notify the server
            router.get('/areas_of_continents', (req, res, next) => {
              // code omitted for brevity
              res.set('Access-Control-Allow-Origin', 'http://example.com');
              res.json(continents);
            });

            // Error explanation changes:
            XMLHttpRequest cannot load http://localhost:3000/areas_of_continents.
            The 'Access-Control-Allow-Origin' header has a value 'http://example.com' that is not equal to the supplied origin.
            Origin 'http://localhost:8080' is therefore not allowed access.

            // Add the port:
            router.get('/areas_of_continents', (req, res, next) => {
              // code omitted for brevity
              res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
              // the following line also works
              // res.set('Access-Control-Allow-Origin', '*');
              res.json(continents);
            });
            ```

## **jQuery (minimal coverage relative to above 3 bullets)**
- jQuery is a JavaScript library that provides a convenient API to manipulate elements, handle events, make AJAX requests and for other useful operations. It is originally created to solve compatibility issues between different browsers. It worked as a layer of abstraction to provide a consistent way of writing software that works in the browser environment.
- Although most of these inconsistencies are now standardized, jQuery is still useful and is used. Initially, jQuery is a wrapper function that combines **DOM elements collection** and **convenience methods** into an object. This allows us to call the function when needed for different purposes such as accessing the DOM elements, manipulating the objects itself.
- The function processes different inputs in different ways:
        - **DOM element arguments(or string selectors)** will be wrapped by jQuery objects and this collection will be returned.
        - **Function arguments** will be used as a callback and invoked when the document is ready.
        - We can use `jQuery` or `$` to call jQuery function where as the latter is preferred due to practicality and ease of reading. We also prepend `$` into variable names that reference to jQuery collections to be able to distinguish them from the other variables.

        ```jsx
        var $lis = $('li');
        ```

- Whether the above selects a single element or many, the return value of the jQuery function will be a **collection**. Collections are **array-like objects**, they support a few of the array properties, however some methods such as `Array.forEach` does not work on collections.

        ```jsx
        $(document).ready(function() {
          // DOM loaded and ready, referenced image on img tags are not ready
        });
        $(window).load(function() {
          // DOM loaded and ready, referenced image on img tags loaded and ready
        });
        $(function() {
          // DOM is now loaded   SHORTCUT
        });
        ```

- You can execute tasks on the selected objects by jQuery:

    ```jsx
    $content.css('font-size', '18px ');
    // Can work as a getter and/or setter:
    console.log($content.css('font-size'));    // getter
    $content.css('font-size', '18px');         // setter
    // ---------------------------------------------------------------
    $content.css('font-size', '18px');
    $content.css('color', '#b00b00');
    // NEST CALLS TO PREVENT ERRORS:
    $content.css('font-size', '18px').css('color', '#b00b00');
    // USE OBJECT ARGUMENT
    $content.css({
      'font-size': '18px',
      color: '#b00b00'
    });
    // TRAVERSING
    // Looking Outwards from an Object
    var $p = $('p');
    $p.parent().css('color', 'blue');
    // Limit the selected parents:
    $p.parent('.highlight').css('color', 'blue');
    // Next closest
    $('#javascript').closest('ul').addClass('categories');
    // --------------------------------------------------------
    // Looking inwards from an object
    $('ul#navigation').find('li').length;  // finds all
    // Finding siblings:
    // Find all list items after the CSS list item and hide them
    var $css = $('#css').closest('li');
    $css.nextAll().hide();
    // Find all list items before the CSS list item and hide them
    $css.prevAll().hide();
    // Find all sibling lis and show them
    $css.siblings().show();
    ```

- Example uses of jQuery selectors:

    ```jsx
    // Select all h1 elements
    $('h1');
    // Using element id to select
    $('#site_title');
    // Descendant selector(nesting)
    $('article li');
    // Finding the item with the index 2(3rd item) from a collection
    $('article li').eq(2);
    // Find all the odd-numbered table rows from a table element
    $('table').find('tr').filter(':odd');
    // or
    $('table').find('tr:odd');
    // Find the list item that contains the text "ac ante" then locate the parent li:
    $('li li').filter(":contains('ac ante')").parents('li');
    // or
    $("li li:contains('ac ante')").parents('li');
    // Find all the table cells and pick the last from it
    $('table td').last();
    // or
    $('table td').eq(-1);
    // Find all the table cells that do not have a class of "protected"
    $('td').not(".protected");
    // or
    $('td:not(".protected")');
    // Anchor elements that have an href value that begins with #
    $('a[href^=#]');
    // All elements that have a class name that contains "block"
    $('[class*=block]');
    ```

- **jQuery** provides a simple and powerful API for **handling the events:**

    ```jsx
    // Wait for page to load
    $(function() {
    	// Click handler
      $('a').on('click', function() {
    		event.preventDefault();
      });
    	// Handling form submit
    	$('form').on('submit', function(event) {
    	  event.preventDefault();
    	});
    	// Convenience methods click and submit that does the same
    	$('a').click(function(e) {
    	    e.preventDefault();
    	    var $event = $(this);
    	    $p.text(OUTPUT + $event.text());
    	  });
    	
    	  $('form').submit(function(e) {
    	    e.preventDefault();
    	    var $input = $(this).find('input[type=text]');
    	    $p.text(OUTPUT + $input.val());
    	  });
    	// Instead of binding an event handler to all anchors like this:
    	$('a').on('click', function(e) {
    	  e.preventDefault();
    	  $(this).closest('li').remove();
    	});
    	// We can define it in a parent element and limit it onto anchor elements like this:
    	$('ul').on('click', 'a', function(e) {
    	  e.preventDefault();
    	  $(e.target).closest('li').remove();
    	});
    });
    ```

- Example use of jQuery events:

    ```jsx
    // Unbind previous keypress events
    // Bind the new keypress event with the callback:
    $(document).off('keypress').on('keypress', function() { ...
    ```

- jQuery AJAX acts as a wrapper to `XMLHttpRequest` and solve cross-browser inconsistencies with a simple interface.
- From jQuery documentation:

    ```jsx
    // Using the core $.ajax() method
    $.ajax({
     
        // The URL for the request
        url: "post.php",
     
        // The data to send (will be converted to a query string)
        data: {
            id: 123
        },
     
        // Whether this is a POST or GET request
        type: "GET",
     
        // The type of data we expect back
        dataType : "json",
    })
      // Code to run if the request succeeds (is done);
      // The response is passed to the function
      .done(function( json ) {
         $( "<h1>" ).text( json.title ).appendTo( "body" );
         $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
      })
      // Code to run if the request fails; the raw request and
      // status codes are passed to the function
      .fail(function( xhr, status, errorThrown ) {
        alert( "Sorry, there was a problem!" );
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.dir( xhr );
      })
      // Code to run regardless of success or failure;
      .always(function( xhr, status ) {
        alert( "The request is complete!" );
      });
    ```

- It uses a configuration object that specifies the request parameters.
- Response handling is done by a callback that is passed into a chained method.

    ```jsx
    $.ajax({
      url: '/my-blog-post',
      type: "GET",
      dataType : "json",
    }).done(function(json) {
      // do something with the returned data
    });
    ```

- In the example above the configuration object sets `url`,  request type, and `dataType` for the request.
