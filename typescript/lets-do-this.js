"use strict";
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
let gettingIntoTypeScript = "Hey Davonne did this work";
let coke = "Best soda in the world!";
let water = "A must";
let videoGame = "Call of Duty";
let placeOfWork = "Amazon";
//
let me = "Davonne";
console.log(typeof me);
let mySecondLineOfTypeScript = "This is a language being learned in a lot of companies";
console.log(typeof mySecondLineOfTypeScript); //expect string
let favoriteColor = "pink";
console.log(typeof favoriteColor);
//Array type
let whereIWantToVisit = [
    "Rome",
    "Washington DC",
    "Japan",
    "California",
    "Pennsylvania",
];
console.log(typeof whereIWantToVisit);
//
let favNumbers = [7, 15, 29, 21];
console.log(favNumbers);
//
let toDoList = ["TypeScript", "JavaScript", "Code Review"];
console.log(toDoList);
//
let myDogs = ["Maryjane", "Roxy", "Lexy", "Coco", "Daisy"];
console.log(typeof myDogs, myDogs);
//ts tells us if the type is wrong
// let failingGrade: string[] = [64, 63, 62, 61, 60, 59];
//
// Number type
let howManyFollowers = 1000;
console.log(howManyFollowers);
let age = 31;
let drinkingAge = 21;
console.log(drinkingAge);
let numberOfDog = 5;
//Boolean type
let isActive = true;
let isComplete = true;
//any type
//enables type checking and doesn't refer to any specific type of data
//allows any type really
//only used in extreme scenarios
let numberOfUsers = 10000;
//you can create an empty variable, with disabled type checking
let myRandomVariable;
//unknown type
//unknown is a safe alternative to any
//it is best used when you don't know the type of data being typed
//to add a type later, you'll need to cast it. Casting is when you
//use the "as" keyword to say property or variable is of the casted type
let testing123 = "Roger, checking in";
console.log(typeof testing123);
//you can also have an empty unknown
let thisIsUnknown;
function addThis(num1, num2) {
    return num1 + num2;
}
console.log(addThis(2, 2)); //since the parameters are any type, will return 4
//Otra vez
const hereWeGo = "again";
const oneMoreTime = "time";
const testing4321 = "did this work";
const answer = "yes it did, good job";
console.log(answer);
//
const learningTypescript = "Learning is a process";
const oneStep = "One step at a time";
console.log(oneStep);
//
const experienceSoFar = [
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
const favoriteColors = ["pink", "black", "green", "purple"];
console.log("My favorite colors:", favoriteColors);
//
const favoriteMovies = [
    "Harry Potter",
    "Lord of The Rings",
    "Scream",
];
console.log(favoriteMovies);
//
const needToDos = ["Resume", "Profile", "Fullstack Project"];
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
function helloThere(name) {
    return `Hello ${name.toUpperCase()}`;
}
console.log(helloThere("Davonne007"));
