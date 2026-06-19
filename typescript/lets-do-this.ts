// TypeScript -

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
let favoriteMovie = "Harry Potter"; //regular js

//Explicit
//writing out the type
//in this case a string

let gettingIntoTypeScript: string = "Hey Davonne did this work";
let water: string = "A must";
let videoGame: string = "Call of Duty";
let placeOfWork: string = "Amazon";
let goals: string = "Fullstack Web App";
let letsCode: string = "here we go!";
let codeTime: string = "its now or never";

console.log(codeTime);

//
let me: string = "Davonne";
console.log(typeof me);

let mySecondLineOfTypeScript: string =
  "This is a language being learned in a lot of companies";
console.log(typeof mySecondLineOfTypeScript); //expect string

let favoriteColor: string = "pink";
console.log(typeof favoriteColor);

let menu: string = "This is our menu";
let customMenu: string = "Custom menu for our app users";

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
let favoriteMovies2: string[] = ["Grease", "Grease 2", "Smart House", "Zeon"];

console.log("Some of my favorite movies:", favoriteMovies2);

//

let toDoList: string[] = ["TypeScript", "JavaScript", "Code Review"];

console.log(toDoList);

//

let myDogs: string[] = ["Maryjane", "Roxy", "Lexy", "Coco", "Daisy"];

console.log(typeof myDogs, myDogs);

//
let cheeseBurgerReciepe: string[] = [
  "burger",
  "cheese",
  "mayo",
  "tomatoe",
  "lettuce",
];

console.log("Cheeseburger Reciepe:", cheeseBurgerReciepe);
console.log(typeof cheeseBurgerReciepe); //yess it is an array but in javascript, arrays are objects. so the type of expected is object

let neverGiveUp: string[] = [
  "focus",
  "plan",
  "determination",
  "mindset",
  "gaols",
  "support",
];

//if you really wanna see if its an array
//do this

const isThisAnArray = Array.isArray(cheeseBurgerReciepe);
console.log(isThisAnArray); //expected true;

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

let numberOfDeals: number = 20;

//Boolean type

let isActive: boolean = true;
let isComplete: boolean = true;
<<<<<<< HEAD
let isLocked: boolean = false;
let isOpened: boolean = true;
=======
let isOnSale: boolean = true;
let isNotOnSale: boolean = false;
let isLocked: boolean = false;
let isOpened: boolean = true;
let hasDeal: boolean = true;
let openForTheHolidays: boolean = false;
let openFor24Hours: boolean = true;
>>>>>>> b9a0ac5 (lets go: working on typescript)

//any type
//enables type checking and doesn't refer to any specific type of data
//allows any type really
//only used in extreme scenarios
let numberOfUsers: any = 10000;
let coupon: any = "Unlimited";
let anyDiscount: any = "Discounted Price";

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

const rideAlong: string =
  "cops giving a celevberity a ride in thier cop car and daily route";
const loveBug: string = "Song: Jonas Brothers";

//
const learningTypescript: string = "Learning is a process";
const oneStep: string = "One step at a time";
console.log(oneStep);

//

const experienceSoFar: string[] = [
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

//

const topFastFoodRestaurants: string[] = [
  "McDonalds",
  "Wendys",
  "Taco Bell",
  "KFC",
  "Pizza Hut",
];

const myFavFastFoodRestaurants = topFastFoodRestaurants[0];
const mySecondFavFastFoodRestaurants = topFastFoodRestaurants[0];

console.log("My favorite fast food place:", myFavFastFoodRestaurants);

//for funzzies
const didThisWork3 = topFastFoodRestaurants.forEach((restaurant) => {
  if (restaurant === "KFC") {
    console.log(restaurant);
  }
});

//otra vez
//you can also do an array this way. Array<string> syntax

const favoriteColors: Array<string> = ["pink", "black", "green", "purple"];
console.log("My favorite colors:", favoriteColors);

//
<<<<<<< HEAD

const favoriteMovies: Array<string> = [
  "Lord of The Rings",
  "Harry Potter",
  "Scream",
  "Twlight",
  "Like Mike",
  "Toy Story",
];
console.log("Favorite Movies: ", favoriteMovies);

//

=======
const favoriteDisneyMovies: Array<string> = [
  "Halowween Town Movies",
  "Twtiches",
  "Don't look under the bed",
  "Cheetah Girls",
  "Brink!",
  "The Luck of the Irish",
  "Zeon Movies",
];

console.log("My favorite Disney Movies:", favoriteDisneyMovies);

//

const halowweenTown4Theory: Array<string> = [
  "the cromwell family are really powerful",
  "aggie father is mervin, marlin's cousin?",
  "aggie was queen of halloweentown in her time, at the start of halloweentown",
  "the snot guy, he is related to Luke somehow",
  "they switched Marnies because the new actress was new to the disney/hollywood scene",
];

//

const favoriteMeals: Array<string> = [
  "Chicken Fried Rice",
  "Hot Wings",
  "Pasta",
  "Ceviche",
  "Beans, Chile and Rice",
];

console.log("My favorite Meals:", favoriteMeals);

//

const favoriteMovies: Array<string> = [
  "Lord of The Rings",
  "Harry Potter",
  "Scream",
  "Twlight",
  "Like Mike",
  "Toy Story",
];
console.log("Favorite Movies: ", favoriteMovies);

//

>>>>>>> b9a0ac5 (lets go: working on typescript)
const needToDos: Array<string> = ["React course", "Fullstack Project", "Java"];

console.log("A must:", needToDos);

//Functions

function multiplyThis(firstNumber: number, secondNumber: number) {
  return firstNumber * secondNumber;
}

console.log(multiplyThis(10, 10)); //expected 100

<<<<<<< HEAD
=======
//

//otra vez
function multiplyThisAgain(fryCount: number, fryCraving: number) {
  return fryCount * fryCraving;
}

console.log(multiplyThisAgain(40, 60)); //expected 2400

//
function clockOut(clockOutTime: number, actualClockOutTime: number) {
  return clockOutTime * actualClockOutTime;
}

//
function greet(name: string): string {
  return `Hey ${name} its almost June 1st 2026`;
}

const message: string = greet("Jasmine");
console.log(message);

//
function annHathawaysMovie(name: string): string {
  return `${name} is a Ann Hathaway movie.`;
}

const movie1: string = annHathawaysMovie("Ella Enchanted");
console.log(movie1);

//

function favoriteHalloweenMovie(name: string): string {
  return `${name} is my favorite scary Halloween movie.`;
}

const favHalloweenMovie = favoriteHalloweenMovie("Scream");
console.log(favHalloweenMovie);

//const

>>>>>>> b9a0ac5 (lets go: working on typescript)
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

<<<<<<< HEAD
=======
//
function megaMeal(name: string): string {
  return `${name} is the Mega Deal for $4.99`;
}

const megaMeal1 = megaMeal("McNugget Special");
console.log("Daily Deals:", megaMeal1);

>>>>>>> b9a0ac5 (lets go: working on typescript)
// And were back..! Lets get into Typescript again

//strings
let foodTruck: string = "Ceviche Time";
console.log(foodTruck);

let myFreelanceBusiness: string = "Djvd Web Services";
//console.log(myFreelanceBusiness);

//more strings
let nickName: string = "Vonney";
let dogBreed: string = "Boxer";
<<<<<<< HEAD
=======
let disneyShow: string = "Lizzie McGuire";
>>>>>>> b9a0ac5 (lets go: working on typescript)
let secondNickName: string = "Davonneizzle";

console.log("My Gamer Tag:", secondNickName);

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

<<<<<<< HEAD
=======
  string 
  number 
  boolean 
  undefined
  symbol
  null
  bigint

  string
  number
  boolean 
  undefined
  symbol
  null
  bigInt

>>>>>>> b9a0ac5 (lets go: working on typescript)
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
  sendEmailOneMoreTime({ name: "Jasmine Deleon", email: "didThisWork.com" }),
);

//another one

<<<<<<< HEAD
=======
export type OurStuff = {
  clothing: string;
  viola: true;
};

>>>>>>> b9a0ac5 (lets go: working on typescript)
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
  }),
);

console.log(
  getPods({
    id: 3,
    name: "Balling Air",
    price: 300,
    deal: false,
    description: "High-quality wireless AI powered earbuds",
    category: "headphones",
  }),
);

//another one

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

console.log(placeOrder({ combo: "Philly Cheesesteak", quantity: 19 }));
console.log(placeOrder({ combo: "Ceviche", quantity: 8 }));
console.log(placeOrder({ combo: "Hot Wings", quantity: 100 }));

//another one

//defining the shape of the data of a concert goer
type ConcertGoer = {
  name: string;
  age: number;
  email: string;
  firstConcert?: boolean; //optional
};

const concertTicketSold: ConcertGoer = {
  name: "Lexy Vigil",
  age: 32,
  email: "goAllIn@cobra.com",
};

console.log("Concert ticket sold to:", concertTicketSold);

function sendConfirmationEmail(email: string) {
  return `Payment successful: Email confirmation sent to ${email}`;
}

console.log(sendConfirmationEmail("jonasForever@live.com"));

// another one
type Post = {
  title: string;
  description: string;
  id: number;
  createdAt: Date;
};

const stellarPost: Post = {
  title: "New Year, New Me",
  description: "going all in, whatever it takes to learn and grow!",
  id: 10,
  createdAt: new Date(),
};

console.log("Did This Work:", stellarPost);

function sendPost(title: string, description: string) {
  return `${title} and were ${description}`;
}

console.log(
  sendPost(
    "New Year, New Me 2026",
    "Taking it step by step and level up in web dev.",
  ),
);

//

//arrays
const dinnerItems = [
  "Sweet and Sour Shrimp",
  "Orange Chicken",
  "Chicken and Broccoli",
];

//dinnerItems.push(20); //throws an error, it knows it should be a string

// another way to see arrays in typescript

const chineseDinnerItems: string[] = [
  "Chicken Fried Rice",
  "Sememe Chicken",
  "Curry Chicken",
];

//or

const chineseTackOutDinnerItems: Array<string> = [
  "Shrimp Fried Rice",
  "Katsu and Rice",
  "Shrimp and Brocclii",
];
chineseDinnerItems.push("Combination Fried Rice");
console.log("Dinner Items:", chineseDinnerItems);

//another array

//numbers in an array
let lotteryTicketNumbers: number[] = [2, 4, 6, 8, 10, 12];
console.log(lotteryTicketNumbers);

let gradePercentages: number[] = [100, 90, 80, 70, 60, 50];
console.log(gradePercentages);

let scores: Array<number> = [150, 200, 350, 50];
scores.push(90, 400); //push adds elements
scores.pop(); //removes the last element in the array

console.log(scores);

//object destructuring
function getMyUser({ name, age }: { name: string; age: number }) {
  return `We have a new user name ${name} and is ${age} years old`;
}

console.log(getMyUser({ name: "Samantha LuRusso", age: 26 }));
console.log(getMyUser({ name: "Jasmine Deleon", age: 32 }));

//another one

function getConcertInfo({
  singer,
  ticketPrice,
}: {
  singer: string;
  ticketPrice: number;
}) {
  return `We have exclusive tickets for ${singer} for the price of ${ticketPrice} dollars!`;
}

console.log(getConcertInfo({ singer: "Hannah Montana", ticketPrice: 500 }));

//

//otra vez
function getDogToy({
  name,
  description,
  price,
}: {
  name: string;
  description?: string;
  price: number;
}) {
  return `My dog Daisy loves to play with the ${name} and it is ${price} dollars.`;
}

console.log(getDogToy({ name: "tennis ball", price: 4 }));
console.log(getDogToy({ name: "soccer ball", price: 10 }));

//What is an interface?
//An interface is a way to define the structure or shape of an object. It tells ts
//what properties an object should have and what types those properties should be.
//interfaces help catch mistakes before you run the code

//define an interface
interface Person {
  name: string;
  age: number;
}

//use it
const bella: Person = {
  name: "Bella",
  age: 120,
};

//

interface Car {
  brand: string;
  year: number;
  isStickShift: boolean;
}

function purchaseCar(car: Car) {
  console.log(`I have a ${car.brand} from ${car.year}`);
}

purchaseCar({ brand: "Nissan", year: 1992, isStickShift: true }); //throws an error if it does not include all the properties, unless the property is optional
purchaseCar({ brand: "Mustang", year: 1950, isStickShift: true });

//interfaces can be extended like inheritance
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  jobTitle: string;
}

const worker: Employee = {
  name: "Davonne",
  age: 32,
  jobTitle: "Software Engineer",
};

console.log("did this work:", worker);

//any type
//special type
//it disables type checking
//not really recommended

//The any type is a special type that tells TypeScript, I don't care what type this is, it can be anything.
//turns off type checking

//any in a variable
let buffaloSauce: any;

buffaloSauce = 10;
buffaloSauce = "hot";

//values can be anything

//any in a function parameter
function printThisSpreadSheet(value: any) {
  console.log(value);
}
printThisSpreadSheet(20); //could of been any value

//

function getGame(value: any) {
  console.log(value);
}

getGame("Lord of the Rings");
getGame(50);

//an array that can hold any value
let mixedArray: any[] = [1, "did this work", true, { id: 20 }, null];

mixedArray.push(new Date());
console.log(mixedArray);

//
let outOfStock: any[] = ["carrots", "corn", 4, true];
console.log("Out of Stock", outOfStock);

//

//any with objects

let davonne: any = {
  name: "Davonne",
  age: 32,
};

davonne.favoriteColor = "pink"; //no errors
console.log(davonne);

//
let getOrder: any = {
  name: "Burger",
  price: 10,
};

getOrder.location = "Elm Street";

//

//a better alternative is: unknown

let value: unknown = "helloooo unknown";
console.log(value);

//

function identity(value: any) {
  return value;
}

const result = identity(true);

//and it can help you catch errors
// function identity2(value: any) {
//   return value;
// }

// const result2 = identity("hello");
// result2.toFixed(); //throws an error, result2.toFixed is not a function, because toFixed is for numbers

// console.log(result2);

//

//Generics
//they let you write flexible, reuseable code that works with multiple types while still keeping type safety.
//without typescript you need to write the same function multiple times
//a placeholder for types
//<T>
//lets you write a function or component that works for any type, while keeping type safety

function identity3<T>(value: any) {
  return value;
}

const result3 = identity3<string>("hi did this work");
const work = result3.toUpperCase();
console.log(work);

const result4 = identity3<number>(24);
const showTheNumber24 = result4.toFixed();
console.log(showTheNumber24);

//with Generics, one function for all

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirst([1, 2, 3]); //T is a number
const firstString = getFirst(["lexy", "coco", "roxy"]); //T is a string
const firstBoolean = getFirst([true, false]); // T is a boolean

//

<<<<<<< HEAD
=======
function createHelloWorld2(name: string) {
  return function (): string {
    return `Hello ${name} its a whole new world`;
  };
}

const didThisWork2 = createHelloWorld2("Jasmine"); //didThisWork 2 stores the function
console.log(didThisWork2()); //executes the stored function and returns the string

/*

this is also an example of a closure because the inner
function rembers the name variable even after createHelloWorld2 has finished running

*/

>>>>>>> b9a0ac5 (lets go: working on typescript)
/*

  Write a function called isGreater that takes two 
  arguments and returns true if the first number is greater
  than the second number, and false other wise.

*/
<<<<<<< HEAD

function createHelloWorld2() {
  return function (): string {
    return "Hello World";
  };
}
=======
>>>>>>> b9a0ac5 (lets go: working on typescript)
