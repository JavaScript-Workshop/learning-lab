/* Days of JavaScript

Resources:
- LeetCode 30 days of JavaScript 
- Shruti Kapoor Youtube 31 days of JavaScript Questions  
  - https://www.youtube.com/watch?v=sHfWwFtr4uE
  - https://www.youtube.com/watch?v=Ap76_UnPeH4&t=31s
- MDN 
 -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
- Claude AI, ChatGPT

*/

//Day 1:
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

function goGetIceCream() {
  return new Promise((resolve, reject) => {
    resolve("Go get ice cream at the ice cream store");
  });
}

goGetIceCream()
  .then((getToCoding) => {
    console.log("It's coding time!");
  })
  .finally(() => {
    console.log("go to sleep");
  });

//Claude AI Example
//use case for fetching data from an API

// fetch(`https://api.example.com/data`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

//shruti video on Promises
//https://www.youtube.com/watch?v=Ap76_UnPeH4&t=31s

//promise constructor
//takes two call backs, resolve and reject

const myPromise = new Promise((resolve, reject) => {
  const didThisWork = true;

  if (didThisWork) {
    resolve("Yes!");
  } else {
    reject("Aww, try again!");
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Error:", error);
  })

  .finally(() => {
    console.log("It is finished");
  });
console.log("Did this work?", myPromise);

//ChatGPT / Claude

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
    }, 2000);
  });
};

delayedHello().then((result) => console.log(result));

//another one
const waitThreeSeconds = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Done waiting 3 seconds");
  }, 3000);
});

waitThreeSeconds.then((myMessage) => {
  console.log(myMessage);
});

//Async/await is a nicer way to write code that uses Promises
//async/await is a way to write asynchronous Javascript code that looks and reads like synchronous code,
//where async makes a function return a Promise and await pauses execution until that Promise resolves.
//the async keyword for the function -
// the function always returns a Promise - in the function you use the await keyword

async function runThisCode() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

//

// async function goGetMyPhoneData() {
//   try {
//     const response = await fetch('url for api')'

//     if(!response.ok) {
//       throw new Error("Network error. Response not okay.")
//     }
//     const data = await response.json();
//     return data;

//   } catch (error){
//     console.error("Error:", error.message);
//   }
// }

//chat question

/*

Write an async function called getNumber() that waits 2 seconds and
then returns the number 10

*/

//async function
//setTimeout
//returns the number 10, waits 2 seconds
//call the function
//console.log 10

const getNumber = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });
};

async function didThisShow10() {
  const myNumber10 = await getNumber();
  console.log(myNumber10);
}

didThisShow10(); //expected 10

//another one

const delayedMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Maybe this worked, if it did great job!");
    }, 1000);
  });
};

async function whereAboutToFindOut() {
  const maybe = await delayedMessage();
  console.log(maybe);
}

whereAboutToFindOut(); //expected: 'Maybe this worked, if it did great job!'

//Review

//A promise is an object that represents something that will finish later
//pending - still waiting
//fulfilled - resolved
//rejected - rejected

const thisIsAPromise = new Promise((resolve, reject) => {
  //do something
  resolve("Yay this worked Davonne!");
});

//another one

/* 

Create a function called fetchNumber that:

Returns a Promise. After 1.5 seconds, it resolves with the number 25
Then, using async/await, log the result to the console. 

*/

//function fetch number, async function
//new promise, resolve as parameter
//set time out, resolve the number 25
//for 1.5 seconds

//await the fetchNumber function
//console.log it
//call it

const fetchNumber = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(25);
    }, 1500);
  });
};

const myFetchedNumber = async () => {
  const fetchedNumber = await fetchNumber();
  console.log(fetchedNumber);
};

myFetchedNumber(); //expected 25

//Day 2

// 30 days of JavaScript in LeetCode

/* 
  Write a function createHelloWorld. It should return a new function that
  always return "Hello World" 


*/

//create a function
//it should return a new function
//return hello world

function createWorld() {
  return () => "Hello did this work on January 8th 2025";
}

//other ways

//functional expression
const createWorld2 = () => {
  return function () {
    return "Hello World its January 8th 2026";
  };
};

const helloWorld = createWorld2();
console.log(helloWorld());

//side note in typescript

// function createHelloWorld2() {
//   return function(): string {
//     return "Hello World";
//   }
// }
