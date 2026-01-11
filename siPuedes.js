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

// 30 days of JavaScript in LeetCode

//This section is about closures in JavaScript

/*

Chat

Closures are a feature where a function remembers and can access variables from the place it was created, even after the outer function has finished running. 

** A closure is when a function 

 A closure is created when:
  - a function is defined inside another function 
  - the inner function uses variables from the outer function 


Closures help you:
 - keep things private
 - remember state between function calls 
- create things like counters, timers, and configurable functions 

*/

function outer() {
  let thisIsMyCount = 1050;

  //in this function inner remembers thisIsMyCount, even though outer() is done, thisIsMyCount still exists, that memory is a closure
  function inner() {
    thisIsMyCount++;
    console.log("Did this work 1051:", thisIsMyCount);
  }
  return inner;
}

const didThisWork20 = outer();
didThisWork20();

// private variable example

function secret() {
  let myPassword = 1234;

  return function () {
    return myPassword;
  };
}

const getPassword = secret();
console.log("Password:", getPassword()); //1234

//with this example, myPassword cannot be accessed directly.
//only the returned function can access it

// Day 1

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

// Day 2

/*

Given an integer n, return a counter function. This counter
function initially returns n and then returns 1 more than 
the previous value every subsequent time it is called. 

*/

//function takes n as a parameter
//store n in a variable
//return function return count + 1

function createCounter(n) {
  let count = n;

  return function () {
    return count++;
  };
}

const myCounter = createCounter(50);
console.log(myCounter()); //50
console.log(myCounter()); //51
console.log(myCounter()); //52

//another way

function getMyCount(numberOfDonuts) {
  let count = numberOfDonuts;

  return () => count++;
}

const myNumberOfDonuts = getMyCount(100);
console.log(myNumberOfDonuts()); //100
console.log(myNumberOfDonuts()); //101

//claude ai

//closures
// a closure is when a function remembers variables from where it was created even after it leaves that place.

function secretIngredient(secret) {
  return function () {
    return secret; // remembers the secret
  };
}

const theSecretIngredient = secretIngredient("Custom Stellar Sauce");
console.log(theSecretIngredient()); //the function remembers even though secretIngredient finished running already

//with closures, the variables stay alive

//chat

//A closure is created when a function remembers and can access variables from its outer parent scope, even after that outer function has finished running.

//closures are used all the time in JavaScipt

//Javascript remembers closures but only remembers whats still reachable

function createUser(name) {
  let usersPin = 2026;

  return {
    getName() {
      return name; //getName() uses name so JS keeps alive in memory
    },
  };
}

const user = createUser("Davonne");
console.log(user.getName()); // Davonne

//compared to

function createNewUser(name) {
  let usersCode = 4033;

  return {
    getUsersName() {
      return name;
    },
    getCode() {
      return usersCode;
    },
  };
}

const ourNewUser = createNewUser("Lexy");
console.log(ourNewUser.getCode()); //expected 4033, usersCode is remembered because a function references it

//Day 3

/*

  Write a function that helps developers test their code. It should take in any value val and return an object with the following two functions. 

  toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".

  notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
  
*/

//a function that takes in any value
//return an object with two functions
//function 1, toBe, accepts a value, returns true if values === each other or else throw an error not equal

//function 2 notToBe, accepts a value, returns true if the two values !-- each other, else throw an error equal

function helpDevelopers(value) {
  return {
    toBe: function (areTheyEqual) {
      if (value === areTheyEqual) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: function (notEqual) {
      if (value !== notEqual) {
        return true;
      }
      throw new Error("Equal");
    },
  };
}

console.log("This is true:", helpDevelopers(10).toBe(10)); //true
// console.log("This is true:", expect(2).toBe(10)) //throws an error

//Day 4 on LeetCode

/*

Write a function. It should accept an initial integer init. It should return an object with three functions

The three functions:
- increment() increase the current state value by 1 and 
then returns it 

- decrement() reduces the current value by 1 and returns 
it

- reset() sets the current value to init and returns it 

*/

//a function that accepts an initial integer init
//define a variable to init
//returns an object the three functions
//increment, increase state by 1, return it
//decrement, decrease the state by 1, return it
//reset back to init

function createCounterExample(init) {
  let current = init;
  return {
    increment: function () {
      current = current + 1;
      return current;
    },
    decrement: function () {
      current = current - 1;
      return current;
    },
    reset: function () {
      current = init;
      return current;
    },
  };
}

const day4ExampleCounter = createCounterExample(10);
console.log(day4ExampleCounter.increment()); //expected 11

//another way to do this

const thisIsAnotherCounterExample = (init) => {
  let current = init;
  return {
    increment: () => ++current,
    decrement: () => --current,
    reset: () => (current = init),
  };
};

const didThisCounterWork = thisIsAnotherCounterExample(10);

console.log(didThisCounterWork.increment()); //expected 11
