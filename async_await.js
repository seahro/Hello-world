// -----***** async await*****-----
// **Introduction**
// Often in web development, we need to handle asynchronous actions— actions we can wait on while moving on to other tasks. We make requests to networks, databases, or any number of similar operations. JavaScript is non-blocking: instead of stopping the execution of code while it waits, JavaScript uses an event-loop which allows it to efficiently execute other tasks while it awaits the completion of these asynchronous actions
// Originally, JavaScript used callback functions to handle asynchronous actions. The problem with callbacks is that they encourage complexly nested code which quickly becomes difficult to read, debug, and scale. With ES6, JavaScript integrated native promises which allow us to write significantly more readable code. JavaScript is continually improving, and ES8 provides a new syntax for handling our asynchronous action, async...await. The async...await syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs
// The async...await syntax is syntactic sugar— it doesn’t introduce new functionality into the language, but rather introduces a new syntax for using promises and generators. Both of these were already built in to the language. Despite this, async...await powerfully improves the readability and scalability of our code. Let’s learn how to use it
// First Example:
const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile');
      
// Here we use fs.readfile() and callback functions:
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./file2.txt',  'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile('./file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8');
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8');
  let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8');
  console.log(firstSentence, secondSentence);
}

readFiles();

// -----*****ASYNC KEYWORD*****-----
// The async keyword is used to write functions that handle asynchronous actions. We wrap our asynchronous logic inside a function prepended with the async keyword. Then, we invoke that function
async function myFunc() {
    // Function body here
  };
   
  myFunc();

// We’ll be using async function declarations throughout this lesson, but we can also create async function expressions
const myFunc = async () => {
    // Function body here
  };
   
  myFunc();

// async functions always return a promise. This means we can use traditional promise syntax, like .then() and .catch with our async functions. An async function will return in one of three ways
// If there’s nothing returned from the function, it will return a promise with a resolved value of undefined
// If there’s a non-promise value returned from the function, it will return a promise resolved to that value
// If a promise is returned from the function, it will simply return that promise
async function fivePromise() { 
    return 5;
  }
   
  fivePromise()
  .then(resolvedValue => {
      console.log(resolvedValue);
    })  // Prints 5

// In the example above, even though we return 5 inside the function body, what’s actually returned when we invoke fivePromise() is a promise with a resolved value of 5

function withConstructor(num){
    return new Promise((resolve, reject) => {
      if (num === 0){
        resolve('zero');
      } else {
        resolve('not zero');
      }
    });
  }
  
  withConstructor(0)
    .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
  });
  
  // Write your code below: Write an async function, withAsync() which reproduces the functionality of withConstructor(). Though your function will return a promise, it should not construct the promise using the new keyword. 
  //**** Instead, it should rely on the fact that an async function automatically returns a promise****
  async function withAsync(num){
    if (num === 0){
        return 'zero';
      } else {
        return 'not zero';
      }
  }
  
  withAsync(100)
    .then((resolveValue) => {
    console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
  })

// -----***** The AWAIT Operator *****-----
// In the last exercise, we covered the async keyword. By itself, it doesn’t do much; async functions are almost always used with the additional keyword await inside the function body
// The await keyword can only be used inside an async function. await is an operator: it returns the resolved value of a promise. Since promises resolve in an indeterminate amount of time, await halts, or pauses, the execution of our async function until a given promise is resolved
// In most situations, we’re dealing with promises that were returned from functions. Generally, these functions are through a library, and, in this lesson, we’ll be providing them. We can await the resolution of the promise it returns inside an async function. In the example below, myPromise() is a function that returns a promise which will resolve to the string "I am resolved now!"
// AWAIT EXAMPLE
async function asyncFuncExample(){
    let resolvedValue = await myPromise();
    console.log(resolvedValue);
  }
   
  asyncFuncExample(); // Prints: I am resolved now!
// Within our async function, asyncFuncExample(), we use await to halt our execution until myPromise() is resolved and assign its resolved value to the variable resolvedValue. Then we log resolvedValue to the console. We’re able to handle the logic for a promise in a way that reads like synchronous code

// **** AWAIT OPERATOR EXAMPLE ****
const brainstormDinner = require('./library.js');


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}


// async/await version:
async function announceDinner() {
  let meal = await brainstormDinner();
 	  console.log(`I'm going to make ${meal} for dinner.`);
   
  
}

announceDinner();

  // Writing ASYNC Functions
  // We’ve seen that the await keyword halts the execution of an async function until a promise is no longer pending. Don’t forget the await keyword! It may seem obvious, but this can be a tricky mistake to catch because our function will still run— it just won’t have the desired results
  // We’re going to explore this using the following function, which returns a promise that resolves to 'Yay, I resolved!' after a 1 second delay
  let myPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Yay, I resolved!')
      }, 1000);
    });
  }

  // Now we’ll write two async functions which invoke myPromise()
  async function noAwait() {
    let value = myPromise();
    console.log(value);
   }
    
   async function yesAwait() {
    let value = await myPromise();
    console.log(value);
   }
    
   noAwait(); // Prints: Promise { <pending> }
   yesAwait(); // Prints: Yay, I resolved!

   // In the first async function, noAwait(), we left off the await keyword before myPromise(). In the second, yesAwait(), we included it. The noAwait() function logs Promise { <pending> } to the console. Without the await keyword, the function execution wasn’t paused. The console.log() on the following line was executed before the promise had resolved
   // Remember that the await operator returns the resolved value of a promise. When used properly in yesAwait(), the variable value was assigned the resolved value of the myPromise() promise, whereas in noAwait(), value was assigned the promise object itself

   // *** WRITING ASYNC FUNCTIONS example ***
   const shopForBeans = require('./library.js');
// The keyword async goes before the function keyword
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  // the await operator precedes a promise
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

// Handling Dependent Promises //

//The true beauty of async...await is when we have a series of asynchronous actions which depend on one another. For example, we may make a network request based on a query to a database. In that case, we would need to wait to make the network request until we had the results from the database. With native promise syntax, we use a chain of .then() functions making sure to return correctly each one
function nativePromiseVersion() {
  returnsFirstPromise()
  .then((firstValue) => {
    console.log(firstValue);
    return returnsSecondPromise(firstValue);
  })
 .then((secondValue) => {
    console.log(secondValue);
  });
}
// Let’s break down what’s happening in the nativePromiseVersion() function
// Within our function we use two functions which return promises: returnsFirstPromise() and returnsSecondPromise()
// We invoke returnsFirstPromise() and ensure that the first promise resolved by using .then()
// In the callback of our first .then(), we log the resolved value of the first promise, firstValue, and then return returnsSecondPromise(firstValue)
// We use another .then() to print the second promise’s resolved value to the console

// Here’s how we’d write an async function to accomplish the same thing

async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}
//Let’s break down what’s happening in our asyncAwaitVersion() function
// We mark our function as async
// Inside our function, we create a variable firstValue assigned await returnsFirstPromise(). This means firstValue is assigned the resolved value of the awaited promise
// Next, we log firstValue to the console
// Then, we create a variable secondValue assigned to await returnsSecondPromise(firstValue). Therefore, secondValue is assigned this promise’s resolved value
// Finally, we log secondValue to the console

// Though using the async...await syntax can save us some typing, the length reduction isn’t the main point. Given the two versions of the function, the async...await version more closely resembles synchronous code, which helps developers maintain and debug their code. The async...await syntax also makes it easy to store and refer to resolved values from promises further back in our chain which is a much more difficult task with native promise syntax. Let’s create some async functions with multiple await statements
// -----***** Handling Dependent Promises EXERCISE *****-----
// ****** FROM LIBRARY REFERENCE FOR EXERCISE

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5);
    let beanType = beanTypes[randomIndex];
    console.log(`I bought ${beanType} beans because they were on sale.`);
   resolve(beanType);
  }, 1000)
})
}

let soakTheBeans = (beanType) => {
   return new Promise((resolve, reject) => {
     console.log('Time to soak the beans.');
    setTimeout(()=>{
      console.log(`... The ${beanType} beans are softened.`);
      resolve(true);
      }, 1000);
  });
}

let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log('Time to cook the beans.');
    setTimeout(()=>{
      if (isSoftened) {
        console.log('... The beans are cooked!');
        resolve('\n\nDinner is served!');
      }
    }, 1000);
  });
}

  
module.exports = {shopForBeans, soakTheBeans, cookTheBeans};
//-----Main Page for Exercise -----
const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function makeBeans() {
  //Inside your function, declare a variable, type, assigned to the resolved value of shopForBeans()
  let type = await shopForBeans();
  //Next inside your function, declare a variable, isSoft, assigned to the resolved value of soakTheBeans(). Don’t forget: the soakTheBeans() function expects an argument. Make sure to pass the expected value into soakTheBeans()
  let isSoft = await soakTheBeans(type);
  //Next inside your function, declare a variable, dinner, assigned to the resolved of cookTheBeans(). Don’t forget: the cookTheBeans() function also expects an argument. Make sure to pass the expected value into cookTheBeans()
  let dinner = await cookTheBeans(isSoft);
  //  log your dinner variable to the console
  console.log(dinner);
}
// Beneath your function declaration, invoke the makeBeans() function
makeBeans();

// -----***** Handling Errors*****-----
// When .catch() is used with a long promise chain, there is no indication of where in the chain the error was thrown. This can make debugging challenging
// With async...await, we use try...catch statements for error handling. By using this syntax, not only are we able to handle errors in the same way we do with synchronous code, but we can also catch both synchronous and asynchronous errors. This makes for easier debugging

// ***** Using trycatch...to find problems *****
async function usingTryCatch() {
  try {
    let resolveValue = await asyncFunction('thing that will fail');
    let secondValue = await secondAsyncFunction(resolveValue);
  } catch (err) {
    // Catches any errors in the try block
    console.log(err);
  }
 }
  
 usingTryCatch();
//
// Remember, since async functions return promises we can still use native promise’s .catch() with an async function
async function usingPromiseCatch() {
  let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
})

// This is sometimes used in the global scope to catch final errors in complex code

// ***** Handling Errors Exercise *****
// Handling Errors Library Page
// This function returns true 50% of the time.
let randomSuccess = () => {
  let num = Math.random();
  if (num < .5 ){
    return true;
  } else {
    return false;
  }
 };
 
 // This function returns a promise that resolves half of the time and rejects half of the time
 let cookBeanSouffle = () => {
  return new Promise((resolve, reject) => {
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
    setTimeout(()=>{
      let success = randomSuccess();
      if(success){
        resolve('Bean Souffle');
      } else {
        reject('Dinner is ruined!');
      }
    }, 1000);
  });
 };
 
 module.exports = cookBeanSouffle;
// The Handling Errors Main Code Page
const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  //Declare an async function, hostDinnerParty(). Inside your function, create a try...catch statement. The catch statement should specify an identifier, error. You can leave both the try and catch blocks empty
  try {
    //Inside your try block, log a string in the following format: '[resolved value of cookBeanSouffle() promise] is served!' ie. 'Bean Souffle is served!'. Make sure to await the cookBeanSouffle() promise. For more guidance, check out the hint
    //You can declare a variable, we called ours dinner, assigned to the resolved value of the promise returned by cookBeanSouffle(). Then use string interpolation and the dinner variable to log the string 'Bean Souffle is served!' to the console
    let dinner = await cookBeanSouffle();
     console.log(`${dinner} is served!`);
  } catch (error) {
    //Now let’s fill in the catch block! First log the error to the console, and then log the string: 'Ordering a pizza!' to the console
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();

// -----***** Handling Independent Promises- CONCURRENCY ***** -----
// Remember that await halts the execution of our async function. This allows us to conveniently write synchronous-style code to handle dependent promises. But what if our async function contains multiple promises which are not dependent on the results of one another to execute

// Code Example 
async function waiting() {
  const firstValue = await firstAsyncThing();
  const secondValue = await secondAsyncThing();
  console.log(firstValue, secondValue);
 }
  
 async function concurrent() {
  const firstPromise = firstAsyncThing();
  const secondPromise = secondAsyncThing();
 console.log(await firstPromise, await secondPromise);
 }

// In the waiting() function, we pause our function until the first promise resolves, then we construct the second promise. Once that resolves, we print both resolved values to the console
// In our concurrent() function, both promises are constructed without using await. We then await each of their resolutions to print them to the console
// With our concurrent() function both promises’ asynchronous operations can be run simultaneously. If possible, we want to get started on each asynchronous operation as soon as possible! Within our async functions we should still take advantage of concurrency, the ability to perform asynchronous actions at the same time

// ******* Note: if we have multiple truly independent promises that we would like to execute fully in parallel, we must use individual .then() functions and avoid halting our execution with await

// *** Concurrency Example ***

let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

// Write your code below:
//Declare an async function, serveDinner(). Create four variables
async function serveDinner() {
  // vegetablePromise which should be assigned the return value of steamBroccoli()
  const vegetablePromise = steamBroccoli();
  // starchPromise which should be assigned the return value of cookRice()
  const starchPromise = cookRice();
  // proteinPromise which should be assigned the return value of bakeChicken()
  const proteinPromise = bakeChicken();
  // sidePromise which should be assigned the return value of cookBeans()
  const sidePromise = cookBeans();
  // One option is to create a second set of variables with assigned values of await-ing the promise variables you made in the last checkpoint and then using string concatenation or string interpolation with those values. Another is to use the await operator directly inside your string construction
  // `Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

serveDinner()

// -----***** AWAIT PROMISE.ALL () *****-----
// Another way to take advantage of concurrency when we have multiple promises which can be executed simultaneously is to await a Promise.all()
// We can pass an array of promises as the argument to Promise.all(), and it will return a single promise. This promise will resolve when all of the promises in the argument array have resolved. This promise’s resolve value will be an array containing the resolved values of each promise from the argument array
// AWAIT PROMISE.ALL Example
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}

// n our above example, we await the resolution of a Promise.all(). This Promise.all() was invoked with an argument array containing four promises (returned from required-in functions). Next, we loop through our resultArray, and log each item to the console. The first element in resultArray is the resolved value of the asyncTask1() promise, the second is the value of the asyncTask2() promise, and so on
// Promise.all() allows us to take advantage of asynchronicity— each of the four asynchronous tasks can process concurrently. Promise.all() also has the benefit of failing fast, meaning it won’t wait for the rest of the asynchronous actions to complete once any one has rejected. 
// As soon as the first promise in the array rejects, the promise returned from Promise.all() will reject with that reason. As it was when working with native promises, Promise.all() is a good choice if multiple asynchronous tasks are all required, but none must wait for any other before executing

// *** AWAIT PROMISE ALL EXERCISE ***

let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
// Create an async function serveDinnerAgain(). Inside your function, declare a variable foodArray and assign it the resolved value of the promise returned from Promise.all()
// Remember that Promise.all() takes in an array of promises. Pass in an array containing the steamBroccoli(), cookRice(), bakeChicken(), and cookBeans() functions in that orde
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
//Next console.log() a string in the following format: Dinner is served. We’re having [first item in foodArray ], [second item in foodArray ], [third item in foodArray], and [fourth item in foodArray ]. eg. ‘Dinner is served. We’re having broccoli, rice, chicken, and beans.’
console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}

serveDinnerAgain();
