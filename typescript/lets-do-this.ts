//TypeScript -

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
let coke: string = "Best soda in the world!";
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
const persistency: string = "One step at a time";
console.log(persistency);

//
const thanksgiving: string = "Happy thanksgiving";
const turkey: string = "Happy turkey day";

//
const experience: string[] = [
  "Interesting",
  "Testing my debugging skills",
  "Testing my knowledge of the terminal",
  "Focusing on the basics like I did JavaScript",
  "Researching and Clarification",
];

//
const bedTime: string[] = ["Time to go to bed"];
console.log(bedTime);

//Defining Types
const user = {
  name: "Davonne",
  id: 0,
};

interface User {
  name: string;
  id: number;
}

//Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

interface User {
  name: string;
  id: number;
}
