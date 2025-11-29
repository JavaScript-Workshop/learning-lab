/* 31 days of JavaScript

Resources:

- Shruti Kapoor Youtube 31 days of JavaScipt Questions  
- Calude AI, ChatGPT

*/

//Day 1
//Promises

/*
- Claude says: A Promise is an object that represents the eventual completion
 (or failure) of an asynchronous operation and its resulting value
- An object that something will happen later
- Used for asynchronous code, things that take time like
 - fetching data from an API
 - reading a file
 - waiting for a timer

 Three states of a promise:

 1. pending - initial state, neither fulfilled nor rejected
 2. fulfilled - the operation completed successfully
 3. rejected - the operation failed, rejected
 4. finally

- Claude says: Once a Promise is fulfilled or rejected, it's considered "settled" 
and cannot change states again.
 
*/

//Examples
//Shruti Kapoor Youtube
// https://www.youtube.com/watch?v=sHfWwFtr4uE

function goGetIceCream() {
  return new Promise((resolve, reject) => {
    resolve("Go get ice cream at the ice cream store");
  });
}

goGetIceCream()
  .then((watchStrangerThings) => {
    console.log("Watch Stranger Things");
  }, 2000)
  .finally(() => {
    console.log("go to sleep");
  });

//Claude AI Example
//use case for fetching data from an API

fetch(`https://api.example.com/data`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//ChatGPT Question

/*
  Create a function called delayedHello that returns a Promise.
  After 1 second, the Promise should resolve with the string "Hello!".
  Then, call the function and use .then() to log the result. 
  
*/

//create a function
//returns a promise
//resolve with string hello
//after 1 second, setTimeout... lets make it 3
//.then() log the result

const delayedHello = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello did this work");
    }, 3000);
  });
};

delayedHello().then((result) => console.log(result));
