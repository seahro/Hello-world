// -----***** HTTP REQUESTS *****-----
// Understand the basics of how your web browser communicates with the internet
// What is HTTP: HTTP stands for Hypertext Transfer Protocol and is used to structure requests and responses over the internet. HTTP requires data to be transferred from one point to another over the network
// The transfer of resources happens using TCP (Transmission Control Protocol). In viewing this webpage, TCP manages the channels between your browser and the server (in this case, codecademy.com). TCP is used to manage many types of internet connections in which one computer or device wants to send something to another

// HTTP & TCP: How it Works
// When you type an address such as www.codecademy.com into your browser, you are commanding it to open a TCP channel to the server that responds to that URL (or Uniform Resource Locator
// A URL is like your home address or phone number because it describes how to reach you
// In this  situation, your computer, which is making the request, is called the client. The URL you are requesting is the address that belongs to the server
// Once the TCP connection is established, the client sends a HTTP GET request to the server to retrieve the webpage it should display. After the server has sent the response, it closes the TCP connection
// If you open the website in your browser again, or if your browser automatically requests something from the server, a new connection is opened which follows the same process described above. GET requests are one kind of HTTP method a client can call.
// You can learn more about the other common ones (POST, PUT and DELETE) in this article.
// https://www.codecademy.com/articles/what-is-rest
// Let’s explore an example of how GET requests (the most common type of request) are used to help your computer (the client) access resources on the web

// ---- *** Introduction to Requests *** ---
// Have you ever wondered what happens after you click a “Submit” button on a web page? For instance, if you are submitting information, where does the information go? How is the information processed? The answer to the previous questions revolves around HTTP requests
// There are many types of HTTP requests. The four most commonly used types of HTTP requests are GET, POST, PUT, and DELETE. In this lesson, we’ll cover GET and POST requests. If you want to learn more about the different HTTP requests, we recommend the following documentation
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
// ** With a GET request, we’re retrieving, or getting, information from some source (usually a website)
// ** For a POST request, we’re posting information to a source that will process the information and send it back

// *** HTTP Requests***
// One of JavaScript’s greatest assets is its non-blocking properties, or that it is an asynchronous language
// Websites, like newspaper websites, take advantage of these non-blocking properties to provide a better user experience. Generally, a site’s code is written so that users don’t have to wait for a giant image to load before being allowed to read the actual article—rather, that text is rendered first and then the image can load in the background
// ** JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed
// Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. We’ll be exploring one system of technologies called Asynchronous JavaScript and XML, or AJAX
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

// XHR GET Requests
// Asynchronous JavaScript and XML (AJAX), enables requests to be made after the initial page load. Initially, AJAX was used only for XML formatted data, now it can be used to make requests that have many different formats
// https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction
// Similarly, the XMLHttpRequest (XHR) API, named for XML, can be used to make many kinds of requests and supports other forms of data

// XHR GET REQUESTS 2
// EXAMPLE https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/XHR%20GET%20diagram.svg

// We are going to reconstruct XHR GET request boilerplate code step-by-step until we have written a complete GET request

// *** XHR GET REQUEST EXAMPLE
// we need to create the XMLHttpRequest object using the new operator. Save this object in a const called xhr
const xhr = new XMLHttpRequest();
// save the following URL to a const called url. Make sure the URL is wrapped in quotes so that it is a string
const url = 'https://api-to-call.com/endpoint';
// Set the responseType property of the xhr object to equal 'json'
xhr.responseType = 'json';
// Set the xhr.onreadystatechange event handler equal to an anonymous arrow function. Leave the function empty
xhr.onreadystatechange = () => {
//In the code block of the function you created in the previous step, add this conditional statement
    if (xhr.readyState === XMLHttpRequest.DONE) {
// In the code block of the conditional statement, return the response property of xhr
    return xhr.response;
  }
};
// Below the function you created in the previous two steps, call the .open() method on the xhr object and pass it 'GET' and url as arguments
xhr.open('GET', url);
// On the following line, call the .send() method on the xhr object. Do not pass it any arguments
xhr.send()

// XHR GET Requests 3
// By this point, you have an idea of how to write the boilerplate code for an AJAX request using an XHR object

// XHR GET REQUEST EXAMPLE 
// Information to reach API
// **create a const named url and save to it the following URL (as a string)
const url = 'https://api.datamuse.com/words?';
// **Underneath const url, create another const named queryParams and assign it to 'rel_rhy='
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
    // ** In the function getSuggestions(), create a const named wordQuery and assign it to be inputField.value
 const wordQuery = inputField.value;
 // ** Now create another const named endpoint, and assign equal to a string that concatenates url, queryParams, and wordQuery
 const endpoint = (url + queryParams + wordQuery);
 // ** You can now start on the XMLHttpRequest object. Declare a const named xhr and use the new operator to create the XMLHttpRequest object
 const xhr = new XMLHttpRequest();
 // ** Set the responseType of xhr to 'json'
 xhr.responseType = 'json';
 // ** Assign an anonymous arrow function to the onreadystatechange event handler of xhr
 xhr.onreadystatechange = () => {
   if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response)
}
 }
 // ** Below the anonymous arrow function you just created (but still inside of getSuggestions()), call the .open() method on the XHR object and pass it 'GET' and endpoint as respective arguments. This method call will create a new request using the two arguments: 'GET' sets the method and endpoint sets the destination
 xhr.open ('GET', endpoint);
 // ** Underneath .open(), call the .send() method on xhr and pass it no arguments. The .send() method will send the request to the server
 xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

// -----***** XHR GET REQUESTS 4 ***---
// In this exercise, we will create a request to set a topic and find adjectives that describe the input word using query strings
// A query string contains additional information to be sent with a request. The Datamuse API allows us to retrieve more specific data with query strings attached to the request URL
// *** Remaking Exercise 3 with an additional query and paramater
/ Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics='

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

//-----***** XHR POST Requests *****-----
//Great! By this point, you’ve signed up for an API key and you know the essence of making a GET request
// The major difference between a GET request and POST request is that a POST request requires additional information to be sent through the request. This additional information is sent in the body of the post request
// Review the code from the diagram to construct your own POST request in the next lesson.

// -----*** XHR Post Requests *** ---
// https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/XHR%20POST%20diagram.svg

// Create a new XMLHttpRequest object using the new operator, and save it in a const called xhr
const xhr = new XMLHttpRequest();
//Next, save the following URL to a const called url. Make sure the URL is wrapped in quotes so that it is a string
const url = 'https://api-to-call.com/endpoint';
// Create a new const called data, and save this line of code to it
const data = JSON.stringify({id: '200'});
//Set the responseType property of the xhr object to be 'json'
xhr.responseType = 'json';
//Set the xhr.onreadystatechange event handler equal to an anonymous arrow function. Leave the function empty until the next step
// .onreadystatechange will contain the event handler that will be called when xhr‘s state changes
xhr.onreadystatechange = () => {
// n the code block of the function you created in the previous step, add a conditional statement that checks to see if the readyState of xhr is equal to XMLHttpRequest.DONE
  if (xhr.readyState === XMLHttpRequest.DONE) {
  //In the code block of the conditional statement, return the response property of xhr. The response property will contain the data that we’re getting back from the POST request
    return xhr.response;
  }
}
//Below the function you created in the previous two steps, call the .open() method on the xhr object and pass it 'POST' and url as arguments.
// .open() creates a new request and the arguments passed in determine what type of request is being made and where it’s being made to
xhr.open('POST', url);
// On the following line, call the .send() method on the xhr object and pass data as an argument.
//.send() will send the request to the server

xhr.send(data);

// XHR Post Requests III
// First Example Code
// Information to reach API
const apiKey = '3182b9e7d83d43e1a2a5d010774cf346';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
}
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}



// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

// -----***** MORE REQUESTS! *****-----
//In the previous lesson, we spent a lot of time dealing with asynchronous data (remember AJAX/ Asynchronous JavaScript And XML?). Many of our web page interactions rely on asynchronous events, so managing these events is essential to good web development
// To make asynchronous event handling easier, promises were introduced in JavaScript in ES6
// The great thing about promises is that once a promise is fulfilled or rejected, you can chain an additional method to the original promise
// In this lesson, we will explain how to use fetch(), which uses promises to handle requests. Then, we will simplify requests using async and await

// **** Fetch Example ****
const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

const generateJson = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
      changeButton();
    }
  } catch(error) {
    console.log(error);
  }
};
    
const formatJson = (resJson) => {
  resJson = JSON.stringify(resJson);
  let counter = 0;
  return resJson.split('')
  .map(char => {
    switch (char) {
      case ',':
        return `,\n${' '.repeat(counter * 2)}`;
      case '{':
        counter += 1;
        return `{\n${' '.repeat(counter * 2)}`;
      case '}':
        counter -= 1;
        return `\n${' '.repeat(counter * 2)}}`;
      default:
        return char;
    }
  })
  .join('');
};

const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
};

const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
};

jsonButton.addEventListener('click', generateJson);

// -----*****Fetch() GET Requests
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/fetch%20GET%20diagram.svg

// The fetch() function:
// Creates a request object that contains relevant information that an API needs
// Sends that request object to the API endpoint provided
// Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back

fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
} , networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
})

// -----***** Fetch GET Requests III *****-----
// In the previous exercise, you wrote the boilerplate code for a GET request using fetch() and .then(). In this exercise, you’re going to use that code and manipulate it to access the Datamuse API and render information in the browser
// If the request is successful, you’ll get back an array of words that sound like the word you typed into the input field
// You may get some errors as you complete each step. This is because sometimes we’ve split a single step into one or more steps to make it easier to follow. By the end, you should be receiving no errors

// Information to reach API
// At the top of main.js, create a const called url. Assign url to the following URL as a string
const url = 'https://api.datamuse.com/words';
//Below url, create another const and call it queryParams. Assign it a value of '?sl='
const queryParams = '?sl=';


// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function

const getSuggestions = () => {
// Inside the getSuggestions() function, create a const called wordQuery and assign it inputField.value
    const wordQuery = inputField.value;
//Create another const called endpoint, assign it value of a string that is url, queryParams, and wordQuery concatenated in that order
    const endpoint = `${url}${queryParams}${wordQuery}`;
// Call the fetch() function and pass in endpoint as an argument. For this API to work within the provided browser, add {cache: 'no-cache'} as the second argument.
    // Chain a .then() method to the fetch() function. Pass it a success arrow callback function as an argument. The callback function should take response as its single parameter
    fetch(endpoint, {cache:'no-cache'}).then(response => {
// Inside the success callback function, create a conditional statement that checks if the ok property of the response object evaluates to a truthy value. If so, call the function renderJsonResponse() and pass in response as an argument. Then, run your code
        if (response.ok) {
// Delete renderJsonResponse(response) and replace it with return response.json(). By returning response.json(), the next function that is .then() chained to it will receive a Promise with JSON data
            return response.json();
   }
//Below the condition’s code block, add this code to raise an exception if the request failed: throw new Error('Request failed!')
   throw new Error('Request failed!');
// Separate the success callback function and the error callback function with a comma. The error callback function will also be an arrow function that takes one parameter, networkError. In the code block of the arrow function, log networkError.message to the console
} , networkError => {
    console.log(networkError.message);
  }
  );
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

// -----***** Fetch GET Requests IV *****-----
// added additional callback coding
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message) 
    ////********Added from Previous Lesson */
  }).then(jsonResponse => {
    renderResponse(jsonResponse);
  } );
}
/////********END OF ADDED SECTION */
// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

// -----*****Fetch POST Requests*****-----
// Now, you’re going to learn how to use fetch() to construct POST requests
// https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/fetch%20POST%20diagram.svg

// Call the fetch() function, pass it the URL below as a string as its first argument, and pass it an empty object ({}) as its second argument
fetch ('https://api-to-call.com/endpoint', {
// //The settings object you passed to the fetch() function will contain two properties: method, with a value of 'POST', and body, with a value of JSON.stringify({id: '200'}) 
  method: 'POST',
  body: JSON.stringify({id: '200'})
// Chain a .then() method to the fetch() function and pass it the success callback function as its first parameter. Pass in response as an argument for the callback function  
}).then(response => {
// Inside the callback function’s code block, check the ok property of the response object inside of a conditional statement. In the code block of the conditional statement, return response.json()  
  if (response.ok) {
    return response.json();
  }
// Below the curly braces of the conditional statement, create a new error with this code  
  throw new Error ('Request failed!');
// Create the failure callback function. This function takes a single parameter, networkError. Separate the first callback function from the second with a comma. This function is still inside of the .then() method  
}, networkError => {
  console.log(networkError.message);
// Chain another .then() method to the end of the first .then() method. In the new .then() method, create an arrow callback function that takes jsonResponse as its parameter. Then in the code block return jsonResponse.The purpose of this step is to view the JSON that was returned from the previous .then()   
}).then(jsonResponse => {
  return jsonResponse;
  })

 // ---*** FETCH POST REQUESTS ***---
 // In the previous exercise, you created the boilerplate code for making a POST request using fetch() and .then(). In this exercise, you’re going to update that boilerplate code to allow you to shorten a URL using the Rebrandly URL Shortener API

 // Information to reach API
const apiKey = '3182b9e7d83d43e1a2a5d010774cf346';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten})
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json', 
      'apikey': apiKey
    },
     body: data  
  });
 
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

// -----***** fetch Post Request IV *****-----
// **In the previous exercise you’ve positioned yourself to make the POST request by providing the endpoint and the object containing all the necessary information. In this exercise you’ll handle the response
// **The request returns a Promise which will either be resolved or rejected. If the promise resolves, you can use that information and the ok status. Let’s implement that knowledge into your code

// Information to reach API
const apiKey = '3182b9e7d83d43e1a2a5d010774cf346';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten})
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json', 
      'apikey': apiKey
    },
     body: data  
  }).then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error ('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    renderResponse(jsonResponse)
  });
 
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

// -----***** Async GET Requests *****-----
// We are going to walk through and recreate the boilerplate code necessary to create a GET request using the async and await
// **Using an async function that will return a promise
// **await can only be used in an async function. await allows a program to run while waiting for a promise to resolve
// **In a try...catch statement, code in the try block will be run and in the event of an exception/error, the code in the catch statement will run
// Reference this diagram: https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/async%20await%20GET%20diagram.svg

// In main.js, create an arrow function using the async keyword and save it to a const getData. The async keyword will ensure that the function returns a promise
const getData = async() => {
    // In the code block for getData, we should add a try statement with an empty code block. Below the try statement’s code block, add a catch(error) statement. he code in the try block will send a request and handle the response. The catch statement will then take care of an error if it is thrown. 
      try {
      // Now we have to consider what to do inside of the code block of the try statement. We should start by using the await keyword before calling fetch(). Pass in the following URL, as a string, to the function as its first argument.  We’ll have to save the returned promise in a variable called response using the const keyword. response will save the response of endpoint once that information has been sent back 
        const response = await fetch('https://api-to-call.com/endpoint');
        //Under response, create a conditional statement that checks if the ok property of the response object evaluates to a truthy value
        if (response.ok) {
       // Inside the code block of the conditional statement, await the resolution of calling the .json() method on response. Save the returned object to a variable called jsonResponse using the keyword const. Since .json() is an asynchronous method we have to await until the promise status is resolved. Then we store the value to know what data the JSON holds
          const jsonResponse = await response.json();
          return jsonResponse
        }
        throw new Error ('Request failed!');
      // nside the catch code block, log error to the console. Since this exercise is an example, we’re using console.log() to view the error. Generally, developers create a more sophisticated way of handling the error, like redirecting their users to another page, but logging is fine for us at the moment
      } catch(error) {
        console.log(error)
      }
    };
    
// -----*****ASYNC GET Requests III *****-----
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// Code goes here
const getSuggestions = async() => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
   const response = await fetch(endpoint, {cache: 'no-cache'})
   if (response.ok) {
     const jsonResponse = await response.json();
     renderResponse(jsonResponse);
   }
  } catch(error) {
  console.log(error)
}
}


// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

// -----***** ASYNC POST Requests I *****-----
// Now that you’ve made an async GET request, let’s start on getting you familiar the async POST request
// async POST request with async and await
// https://content.codecademy.com/courses/intermediate-javascript-requests/diagrams/async%20await%20POST%20diagram.svg

const getData = async () => {
    try {
     const response = await fetch('https://api-to-call.com/endpoint', {
       method: 'POST',
       body: JSON.stringify({id: 200})
     });
     if (response.ok) {
       const jsonResponse = await response.json()
       return jsonResponse
     }
     throw new Error ('Request failed!');
    }
    catch(error) {
      console.log(error)
    }
  };

// ASYNC POST REQUEST COMPILATOIN EXAMPLE
// Expansion of POST Boilerplate code

// information to reach API
const apiKey = '3182b9e7d83d43e1a2a5d010774cf346';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
   const response = await fetch(url, {
     method: 'POST',
     body: data,
     headers: {
       'Content-type': 'application/json',
       'apikey': apiKey
     }
   });
  if (response.ok) {
    const jsonResponse = await response.json();
    renderResponse(jsonResponse);
  }
  } catch(error) {
    console.log(error)
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

// Review Requests II
// GET and POST requests can be created a variety of ways
// Use AJAX to asynchronously request data from APIs. fetch() and async/await are new functionalities developed in ES6 (promises) and ES8 respectively
// Promises are a new type of JavaScript object that represent data that will eventually be returned from a request
// fetch() is a web API that can be used to create requests. fetch() will return promises
// We can chain .then() methods to handle promises returned by fetch()
// The .json() method converts a returned promise to a JSON object
// async is a keyword that is used to create functions that will return promises
// await is a keyword that is used to tell a program to continue moving through the message queue while a promise resolves
//await can only be used within functions declared with async


// NOTE: wordSmith functions from lines 4 - 39
// NOTE: byteSize functions from lines 48 - 81 (remember to add your API key!)

// information to reach API
const dataMuseUrl = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';

// selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = dataMuseUrl + queryParams + wordQuery;

  try{
    const response =  await fetch(endpoint);
    if(response.ok){
      let jsonResponse = await response.json();
			renderWordResponse(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
  }
}

// clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

// information to reach Rebrandly API
const apiKey = '<Your API Key>';
const rebrandlyEndpoint = 'https://api.rebrandly.com/v1/links';

// element selector
const shortenButton = document.querySelector('#shorten');

// AJAX functions
const shortenUrl = async () =>{
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

  try{
    const response =  await fetch(rebrandlyEndpoint, {
      method: 'POST',
      body: data,
      headers: {
        "Content-type": "application/json",
        'apikey': apiKey
      }
    })
    if(response.ok){
      const jsonResponse = await response.json();
			renderByteResponse(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

