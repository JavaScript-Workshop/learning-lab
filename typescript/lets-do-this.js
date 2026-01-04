"use strict";
// TypeScript -
Object.defineProperty(exports, "__esModule", { value: true });
// All notes, and examples steaming from: https://www.typescriptlang.org/docs/ taking info and putting it into practice
// Other Tools Used: Claude AI
// ! TypeScript code gets compiled or transpiled into regular JavaScript
// ! So it can run anywhere JavaScript runs, browsers, Node.js
//  Typescript offers all of JavaScript features
//Typescript is Javascript with added syntax for types
//a syntactic superset of JS which adds static typing
//Javascript with super powers
//essentially js, with a type system on top
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
// can serve as documentation, making it clearer what functions to expect and return
// - catches errors at compile time
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
var favoriteMovie = "Harry Potter"; //regular js
//Explicit
//writing out the type
//in this case a string
var gettingIntoTypeScript = "Hey Davonne did this work";
var water = "A must";
var videoGame = "Call of Duty";
var placeOfWork = "Amazon";
var goals = "Fullstack Web App";
//
var me = "Davonne";
console.log(typeof me);
var mySecondLineOfTypeScript = "This is a language being learned in a lot of companies";
console.log(typeof mySecondLineOfTypeScript); //expect string
var favoriteColor = "pink";
console.log(typeof favoriteColor);
//Array type
var whereIWantToVisit = [
    "Rome",
    "Washington DC",
    "Japan",
    "California",
    "Pennsylvania",
];
console.log(typeof whereIWantToVisit);
//
var favNumbers = [7, 15, 29, 21];
console.log(favNumbers);
//
var toDoList = ["TypeScript", "JavaScript", "Code Review"];
console.log(toDoList);
//
var myDogs = ["Maryjane", "Roxy", "Lexy", "Coco", "Daisy"];
console.log(typeof myDogs, myDogs);
//ts tells us if the type is wrong
// let failingGrade: string[] = [64, 63, 62, 61, 60, 59];
//
// Number type
var howManyFollowers = 1000;
console.log(howManyFollowers);
var age = 31;
var drinkingAge = 21;
console.log(drinkingAge);
var numberOfDog = 5;
//Boolean type
var isActive = true;
var isComplete = true;
var isLocked = false;
var isOpened = true;
//any type
//enables type checking and doesn't refer to any specific type of data
//allows any type really
//only used in extreme scenarios
var numberOfUsers = 10000;
//you can create an empty variable, with disabled type checking
var myRandomVariable;
//unknown type
//unknown is a safe alternative to any
//it is best used when you don't know the type of data being typed
//to add a type later, you'll need to cast it. Casting is when you
//use the "as" keyword to say property or variable is of the casted type
var testing123 = "Roger, checking in";
console.log(typeof testing123);
//you can also have an empty unknown
var thisIsUnknown;
function addThis(num1, num2) {
    return num1 + num2;
}
console.log(addThis(2, 2)); //since the parameters are any type, will return 4
//Otra vez
var hereWeGo = "again";
var oneMoreTime = "time";
var testing4321 = "did this work";
var answer = "yes it did, good job";
console.log(answer);
//
var learningTypescript = "Learning is a process";
var oneStep = "One step at a time";
console.log(oneStep);
//
var experienceSoFar = [
    "Self taught, Bootcamp",
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
var favoriteColors = ["pink", "black", "green", "purple"];
console.log("My favorite colors:", favoriteColors);
//
var favoriteMovies = [
    "Lord of The Rings",
    "Harry Potter",
    "Scream",
    "Twlight",
    "Like Mike",
    "Toy Story",
];
console.log("Favorite Movies: ", favoriteMovies);
//
var needToDos = ["React course", "Fullstack Project", "Java"];
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
    return "Hello ".concat(name.toUpperCase());
}
console.log(helloThere("Davonne007"));
// And were back..! Lets get into Typescript again
//strings
var foodTruck = "Ceviche Time";
console.log(foodTruck);
var myFreelanceBusiness = "Djvd Web Services";
//console.log(myFreelanceBusiness);
//more strings
var nickName = "Vonney";
var dogBreed = "Boxer";
var secondNickName = "Davonneizzle";
console.log("My Gamer Tag:", secondNickName);
//? means optional
//user must match the User description
//User defines what user must look like
var user = {
    name: "Davonne",
    email: "davonne007@gmail.com",
    age: 32,
}; // you can still only provide name and email
//functions
//function arguments
//return type
function sendEmail(email) {
    console.log("Sent To: ".concat(email));
}
sendEmail("davonne@007@gmail.com"); //it matches that type, string from line 255
//or you can do this
function sendThisEmail(user) {
    //pass in the whole user
    console.log("Send This Email: ".concat(user.email));
}
sendThisEmail({ name: "Davonne", email: "Did this work" });
//return ? we are just doing console log
function sendEmailOneMoreTime(user) {
    return "Email being sent to: ".concat(user.email);
}
console.log(sendEmailOneMoreTime({ name: "Jasmine Deleon", email: "didThisWork.com" }));
//an object that conforms the shape
//follow the shape
var airPods = {
    id: 1,
    name: "Ultimate Air",
    price: 300,
    deal: false,
    description: "Powerful headphones, ultimate listening, noise cancellation, AI powered",
    category: "headphones",
    imageUrl: "./images/test.webp",
};
function getPods(airPods) {
    return "We are purchasing the ".concat(airPods.name, " for ").concat(airPods.price, ".");
}
console.log(getPods({
    id: 2,
    name: "Stellar Air",
    price: 250,
    deal: true,
    description: "High-quality wireless earbuds",
    category: "headphones",
}));
console.log(getPods({
    id: 3,
    name: "Balling Air",
    price: 300,
    deal: false,
    description: "High-quality wireless AI powered earbuds",
    category: "headphones",
}));
//creating an object in Javascript
//TypeScript checks that it matches the type FoodOrder
var order = {
    combo: "Burger and Fries",
    quantity: 5,
};
function placeOrder(order) {
    return "My Order: ".concat(order.combo, " and I want ").concat(order.quantity, " of them!");
}
console.log(placeOrder({ combo: "Philly Cheesesteak", quantity: 19 }));
console.log(placeOrder({ combo: "Ceviche", quantity: 8 }));
console.log(placeOrder({ combo: "Hot Wings", quantity: 100 }));
var concertTicketSold = {
    name: "Lexy Vigil",
    age: 32,
    email: "goAllIn@cobra.com",
};
console.log("Concert ticket sold to:", concertTicketSold);
function sendConfirmationEmail(email) {
    return "Payment successful: Email confirmation sent to ".concat(email);
}
console.log(sendConfirmationEmail("jonasForever@live.com"));
var stellarPost = {
    title: "New Year, New Me",
    description: "going all in, whatever it takes to learn and grow!",
    id: 10,
    createdAt: new Date(),
};
console.log("Did This Work:", stellarPost);
function sendPost(title, description) {
    return "".concat(title, " and were ").concat(description);
}
console.log(sendPost("New Year, New Me 2026", "Taking it step by step and level up in web dev."));
//
//arrays
var dinnerItems = [
    "Sweet and Sour Shrimp",
    "Orange Chicken",
    "Chicken and Broccoli",
];
//dinnerItems.push(20); //throws an error, it knows it should be a string
// another way to see arrays in typescript
var chineseDinnerItems = [
    "Chicken Fried Rice",
    "Sememe Chicken",
    "Curry Chicken",
];
//or
var chineseTackOutDinnerItems = [
    "Shrimp Fried Rice",
    "Katsu and Rice",
    "Shrimp and Brocclii",
];
chineseDinnerItems.push("Combination Fried Rice");
console.log("Dinner Items:", chineseDinnerItems);
//another array
//numbers in an array
var lotteryTicketNumbers = [2, 4, 6, 8, 10, 12];
console.log(lotteryTicketNumbers);
var gradePercentages = [100, 90, 80, 70, 60, 50];
console.log(gradePercentages);
var scores = [150, 200, 350, 50];
scores.push(90, 400); //push adds elements
scores.pop(); //removes the last element in the array
console.log(scores);
