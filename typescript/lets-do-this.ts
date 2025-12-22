// TypeScript -

// All notes, and examples steaming from: https://www.typescriptlang.org/docs/ taking info and putting it into practice

// Other Tools Used: Claude AI

// ! TypeScript code gets compiled or transpiled into regular JavaScript
// ! So it can run anywhere JavaScript runs, browsers, Node.js

//  Typescript offers all of JavaScript features

//Typescript is Javascript with added syntax for types
//a syntactic superset of JS which adds static typing

//Javascript with super powers
//esentially js, with a type system on top
//extending javascript with types

//catch errors early in your editor

//prevents errors

//TS understands JavaScript and uses type inferences to give you great tooling

//This basically means that TypeScript adds syntax on
// top of JavaScript, allowing developers to add types.

//IN JS parameters and variables don't have any information.
//so developers need to look at documentation or guess
//based on the implementation. //like what type it is, string number,

//TS allows specifying the types of data being passed around
//within the code, and has the ability to report errors when
//the types don't match
//ex. TS will report an error when passing a string into a function
//that expects a number. JS will not.'

// let myMessage: string = "Hello World"
// myMessage = 42; // typescript error, myMessage is typed as a string not a number

// ! Typescript catches errors at compile time, before your code runs rather then at runtime

// Typescript -
// - catching errors and readability
// can servce as documentation, making it clearer what functions to expect and return
// - catches errors at complile time
// - transforms code before you run
// - a superset of Javascript
// - adds on top of javascript
// - adds types to Javascript
// - when you change a function signature, Typescript will show you
//everywhere that needs to be updated.

/* --------------------------------------------------------------------------------  */

//**There are two ways TypeScript assigns a type* */

//Implicit
//typescript will guess the type, based on the assigned value
//having TypeScript "guess" the type of a value is called infer ****
let favoriteMovie = "Harry Potter"; //regular js

//Explicit
//writing out the type
//in this case a string

let gettingIntoTypeScript: string = "Hey Davonne did this work";
let water: string = "A must";
let videoGame: string = "Call of Duty";
let placeOfWork: string = "Amazon";

//
let me: string = "Davonne";
console.log(typeof me);

let mySecondLineOfTypeScript: string =
  "This is a language being learned in a lot of companies";
console.log(typeof mySecondLineOfTypeScript); //expect string

let favoriteColor: string = "pink";
console.log(typeof favoriteColor);

//Array type
let whereIWantToVisit: string[] = [
  "Rome",
  "Washington DC",
  "Japan",
  "California",
  "Pennsylvania",
];

console.log(typeof whereIWantToVisit);

//
let favNumbers: number[] = [7, 15, 29, 21];
console.log(favNumbers);

//

let toDoList: string[] = ["TypeScript", "JavaScript", "Code Review"];

console.log(toDoList);

//

let myDogs: string[] = ["Maryjane", "Roxy", "Lexy", "Coco", "Daisy"];

console.log(typeof myDogs, myDogs);

//ts tells us if the type is wrong
// let failingGrade: string[] = [64, 63, 62, 61, 60, 59];

//

// Number type
let howManyFollowers = 1000;
console.log(howManyFollowers);

let age: number = 31;

let drinkingAge: number = 21;
console.log(drinkingAge);

let numberOfDog: number = 5;

//Boolean type

let isActive: boolean = true;
let isComplete: boolean = true;

//any type
//enables type checking and doesn't refer to any specific type of data
//allows any type really
//only used in extreme scenarios
let numberOfUsers: any = 10000;

//you can create an empty variable, with disabled type checking
let myRandomVariable: any;

//unknown type
//unknown is a safe alternative to any
//it is best used when you don't know the type of data being typed
//to add a type later, you'll need to cast it. Casting is when you
//use the "as" keyword to say property or variable is of the casted type

let testing123: unknown = "Roger, checking in";
console.log(typeof testing123);

//you can also have an empty unknown
let thisIsUnknown: unknown;

function addThis(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(addThis(2, 2)); //since the parameters are any type, will return 4

//Otra vez
const hereWeGo: string = "again";
const oneMoreTime: string = "time";
const testing4321: string = "did this work";
const answer: string = "yes it did, good job";
console.log(answer);

//
const learningTypescript: string = "Learning is a process";
const oneStep: string = "One step at a time";
console.log(oneStep);

//

const experienceSoFar: string[] = [
  "Selftaught, Bootcamp",
  "Frontend Development",
  "Building UI projects, Freelancing",
  "Collaborating",
  "JavaScript Deep Dive",
  "React.js 💙 ",
  "Git",
  "Tailwind CSS",
  "Officially TypeScript",
];

//dive deeper into: Backend, Java??!

console.log("Davonne:", experienceSoFar);

//otra vez
//you can also do an array this way. Array<string> syntax

const favoriteColors: Array<string> = ["pink", "black", "green", "purple"];
console.log("My favorite colors:", favoriteColors);

//

const favoriteMovies: Array<string> = [
  "Harry Potter",
  "Lord of The Rings",
  "Scream",
];
console.log(favoriteMovies);

//

const needToDos: Array<string> = ["Resume", "Profile", "Fullstack Project"];

console.log("A must:", needToDos);

//Why use Types?

//regular JavaScript - what do you see

// function greet(name) {
//   return "Hello " + name.toUpperCase();
// }
// //question: it is underlines
// //this is a ts file

// console.log(greet("Davonne")); //getting error - name
// //makes sense, theres no type

function helloThere(name: string): string {
  return `Hello ${name.toUpperCase()}`;
}

console.log(helloThere("Davonne007"));

// And were back..! Lets get into Typescript again

//strings
let foodTruck: string = "Ceviche Time";
console.log(foodTruck);

let myFreelanceBusiness: string = "Djvd Web Services";
console.log(myFreelanceBusiness);

//throws an error, type number is not assignable to type boolean

// let userIsLoggedIn = true;
// userIsLoggedIn = 29;

// console.log(userIsLoggedIn);
/*
  What is a type?
  
  A type is a label that describes what kind of value something is. 
  A type that describes what kind of value a variable can have. 
  ** A type defines the structure and data types of a value, and TS uses it
  to check that variables match that structure. 

  Type --> the rules 
  Variable --> the thing that must follow the rules 

  Claude: 
  Types = telling TypeScript what kind of data you're working with, so it
  can catch bugs early and help your editor give better suggestions.
  
*/

//Review

/*

  Primitive Types 

  string 
  number
  boolean 
  undefined - a variable exists but has no value 
  symbol 
  null - on purpose, set to nothing 
  bigint

*/

//Creating a custom type

//User describes the shape of the data
export type User = {
  name: string;
  email: string;
  age?: number;
  city?: string;
};

//? means optional

//user must match the User description
//User defines what user must look like
const user: User = {
  name: "Davonne",
  email: "davonne007@gmail.com",
  age: 32,
}; // you can still only provide name and email

//functions
//function arguments
//return type

function sendEmail(email: string) {
  console.log(`Sent To: ${email}`);
}

sendEmail("davonne@007@gmail.com"); //it matches that type, string from line 255

//or you can do this

function sendThisEmail(user: User) {
  //pass in the whole user
  console.log(`Send This Email: ${user.email}`);
}

sendThisEmail({ name: "Davonne", email: "Did this work" });

//return ? we are just doing console log

function sendEmailOneMoreTime(user: User): string {
  return `Email being sent to: ${user.email}`;
}

console.log(
  sendEmailOneMoreTime({ name: "Jasmine Deleon", email: "didThisWork.com" })
);

//my turn

//this is a blueprint
//it does nothing at run time
//tells typescript combo is a string, quantity is a number etc.
//reuseable blueprint for many orders, functions etc.
export type FoodOrder = {
  combo: string;
  quantity: number;
  drink?: string;
};

//creating an object in Javascript
//TypeScript checks that it matches the type FoodOrder
const order: FoodOrder = {
  combo: "Burger and Fries",
  quantity: 5,
};

function placeOrder(order: FoodOrder) {
  return `My Order: ${order.combo} and I want ${order.quantity} of them!`;
}

console.log(placeOrder({ combo: "Philly Cheesesteak", quantity: 8 }));
console.log(placeOrder({ combo: "Ceviche", quantity: 20 }));
console.log(placeOrder({ combo: "Hot Wings", quantity: 50 }));

//

//another one

//define the shape of product data
export type OurProduct = {
  id: number;
  name: string;
  price: number;
  deal: boolean;
  description: string;
  category: string;
  imageUrl?: string;
};

//an object that conforms the shape
//follow the shape
const airPods: OurProduct = {
  id: 1,
  name: "Ultimate Air",
  price: 300,
  deal: false,
  description:
    "Powerful headphones, ultimate listening, noise cancellation, AI powered",
  category: "headphones",
  imageUrl: "./images/test.webp",
};

function getPods(airPods: OurProduct) {
  return `We are purchasing the ${airPods.name} for ${airPods.price}.`;
}

console.log(
  getPods({
    id: 2,
    name: "Stellar Air",
    price: 250,
    deal: true,
    description: "High-quality wireless earbuds",
    category: "headphones",
  })
);

console.log(
  getPods({
    id: 3,
    name: "Balling Air",
    price: 300,
    deal: false,
    description: "High-quality wireless AI powered earbuds",
    category: "headphones",
  })
);
