//Javascript Review take 10000
//new Windows PC Desktop. Lets get this job.

console.log("testing testing 123");

//
// Fundamentals

//Data Types
//Primitive Data Types
//string
//number
//boolean
//bigInt
//symbol
//null
//undefined

//Non Primitive
//array
//object
//function
//RegEx
//Date

//Variables
//you can declare a variable with ....
//let //cannot change, stays letant
//let  //you can change
// var //old way

//What is ES6 Plus
//the standard we use to build javascript it ECMAScript

//lets go...!
let hairGrowth = "Rosemary Oil makes your hair grow";
console.log(hairGrowth);

hairGrowth = "Coconut Oil makes your hair grow";
console.log(hairGrowth);

//
function myGrowth() {
  let growth = "Keep coding, keep learning, keep building and don't forget...";
  let focus = "You need to focus on problem solving skills.";

  console.log(growth + focus);
}

myGrowth();

//Strings
let string = "This is a string";
console.log(string);

let javascript = "Money money money money";
console.log(javascript);

let autumn = "Autumn is coming, its almost Halloween";
console.log(autumn);

//string prototype trim
//removes the white spaces in the string
const trimMyHair = "     I need to get a haircut!              ";
console.log(trimMyHair);
console.log(trimMyHair.trim());

//Arrays
let hundredDollarsBills = [
  "Learn to code, get money",
  "read the docs",
  "Keep Going",
];
console.log("Focus Daniel Son:", hundredDollarsBills);

//

//a function that has an array in it
let favoriteChineseMeals = () => {
  let favChineseMeals = [
    "Chicken Fried Rice",
    "Chicken and Brocoli",
    "Shrimp and Brocoli",
    "Sweet and Sour Chicken",
  ];
  console.log(favChineseMeals[2]); //grab and print the the second element in the array
  console.log("My favorite Chinese Meals:", favChineseMeals);
  console.log(favChineseMeals.join()); //moved this into the function for local scope
};

favoriteChineseMeals();

//

//Array Prototypes
//array prototypes in Javascript are a collection of methods and properties that are available to
//all array objects
//They from the foundation of the array manipulation ad provide a wide range of functionality of working
//with arrays

//array.prototype.concat();
//The concat() method of Array instance is used to merge two or more arrays
//This method does not change the existing array but instead returns a new array

//concat merges two or more arrays into a new array and does not modify the original array
//but instead creates and returns a new one
const bestChristmasDrinks = ["Hot Chocolate", "Egg Nog", "Milk"];
const bestChristmasSnacks = ["Smores", "Gingerbread", "Cookies"];
const bestChristmasInvolves = bestChristmasDrinks.concat(bestChristmasSnacks);

console.log("Best of the Holidays:", bestChristmasInvolves);
2;

//array prototype.join();
// console.log(favChineseMeals.join()); //its not working because it is not in the same scope

//array prototype.includes
let bears = ["Black Bears", "Polar Bears", "Grizzly Bears", "Panda Bear"];
console.log(bears.includes("Polar Bears")); //expected true;

//
const favoriteSeaFood = [
  "Shrimp Alfredo",
  "Lobster",
  "Ceviche",
  "Shrimp Cocktail",
];
console.log(favoriteSeaFood.includes("Crab Legs")); //expected false

//array prototype filter
// creates a shallow copy of a portion of a given array
//call back function

const spyKidsCharacters = [
  "Carmen",
  "Juni",
  "Gary",
  "Ingrid",
  "Gregorio",
  "Gerti",
];
const filterNamesLongerThanFive = spyKidsCharacters.filter(
  (spyKidsCharacters) => spyKidsCharacters.length > 5
);
console.log(filterNamesLongerThanFive);

//
const drinks = [
  "Coke",
  "Pepsi",
  "Dr.Pepper",
  "Mountain Dew",
  "Sprite",
  "Sunkist",
  "Root Beer",
];

const filterDrinksLongerThanFour = drinks.filter((drink) => drink.length > 4);
console.log(filterDrinksLongerThanFour);

//

//array prototype forEach
//a callback function
// A function to execute for each element in the array.

const twlightBooks = ["Twlight", "New Moon", "Eclipse", "Breaking Dawn"];
const favBooks = twlightBooks.forEach((book) =>
  console.log(`${book} is one of my favorite books to read`)
);

//
function getFavoriteMovies() {
  const favoriteMovies = [
    "The Lord of the Rings",
    "Harry Potter",
    "The Wizard of Oz",
  ];
  const favMovies = favoriteMovies.forEach((movie) => {
    console.log(`One of my favorite movies is ${movie}`);
  });
}

getFavoriteMovies();

//
const cheeseBurgerIngredients = [
  "onion",
  "cheese",
  "hamburger",
  "buns",
  "pickles",
  "ketchup",
  "mustard",
];
console.log("Ingredients:", cheeseBurgerIngredients);

const singleIngredient = cheeseBurgerIngredients.forEach((ingredient) => {
  console.log(`${ingredient} is one of the ingredients on a cheeseburger`);
});

//
const dogsNames = ["Maryjane", "Roxy", "Lexy", "Coco", "Daisy"];
const myDogs = dogsNames.forEach((dog) => {
  console.log(`${dog} is one of my pups.`);
});

//
const typesOfPhones = ["iPhone", "Samsung", "Blackberry", "Google", "Galaxy"];

const phone = typesOfPhones.forEach((phone) => {
  console.log(
    `Big business, make a lot of money for mobile phones. ${phone} is a major selling mobile phone.`
  );
});

//
const ourPizzaToppings = [
  "pepperoni",
  `sausage`,
  `pineapple`,
  `green peppers`,
  `bacon`,
  `hamburger`,
  `ham`,
  `olives`,
  `mushrooms`,
];

const singleTopping = ourPizzaToppings.forEach((topping) => {
  console.log(
    `We have a lot of toppings at our Pizza Parlor. ${topping} is one of our toppings`
  );
});

//
const network = [
  "Getting to know others",
  "Sharing Stories",
  "Common Interest",
  "Career Goals",
  "Career Advice",
  "Questions and concerns",
];

console.log("What is Networking?", network);

const whatToTalkAbout = network.forEach((interaction) =>
  console.log(
    `There are many ways one can network. In a nutshell networking is ${interaction} `
  )
);

//array prototype sort();
//referencing the same array but sorted

const months = ["September", "October", "November", "December"];
months.sort();
console.log(months);

//array prototype pop()
//removes the last element in the array
//pop removes the last element in the array

const recipe = ["Hamburger", "Onion", "Serrano Peppers", "Habenero"];

console.log(recipe.pop()); //
console.log(recipe);

//

//array prototype push()
//adds an element to the array

//create an array
//remove the last element
//add three more elements
//console.log the final array
const bestAguchile = [
  "Cooked Shrimp",
  "Raw Shrimp",
  "Cucumbers",
  "Tomatoes",
  "Lime",
  "Ice Cream",
];

bestAguchile.pop();
// console.log(bestAguchile); //testing along the way

bestAguchile.push("Tilapia", "Red Onions", "Red Peppers");
console.log("Best Aguchile", bestAguchile);

//

//Array prototype unshift();
//adds an element to the beginning of the array and returns the new length of the array

const miPerros = ["Roxy", "Lexy", "Coco", "Daisy"];
// console.log("My Mutts", miPerros);
miPerros.unshift("Maryjane");
console.log("My Mutts", miPerros);
//

//Array prototype shift();
//removes an element at the beginning of an array

const nachos = ["Fish", "Chips", "Cheese", "Hamburger", "Sour Cream", "Beans"];

nachos.shift();
console.log("Nachos:", nachos);

//

// Put it all together and test along the way

//create an array
//add as many elements you want to to the end of the array
//delete one element from the end
//add elements to the beginning of the array
// remove elements from the beginning

const focus = ["Javascript"];
focus.push("React.js", "Node", "Go");
// console.log(focus); //expected Javascript, React.js Node, Go

focus.pop();
// console.log("Focus:", focus);

focus.unshift("Astro", "UI/UX", "Accessibility", "Express.js", "PostgreSQL");

// console.log("Focus:", focus);

//finally
focus.shift();
console.log("Focus:", focus);

//

//Functions

//function expressions
//assigning function to a variable

const christmasTime = function (meal, dessert) {
  return meal + " and " + dessert;
};

console.log(christmasTime("turkey", "cookies"));

//more functional expressions
const holidayBuildingArea = function (width, height) {
  return width * height;
};

console.log(holidayBuildingArea(10, 10)); //expect 100

//compared to function expression - statement
//using the keyword function

function getAreaOfMcdonaldsHQ(width, height) {
  return width * height;
}

//but you can also all the function inside of a variable
const mcdonaldHQArea = getAreaOfMcdonaldsHQ(20, 3);
console.log(mcdonaldHQArea); //expected 60

function chineseFood() {
  let favoriteMeal = "Chicken Fried Rice";
  let requests = "No Vegetables";

  let myMeal = `My favorite chinese food meal is ${favoriteMeal} with ${requests}`;
  console.log(myMeal);
}

chineseFood();

//

function getSum(num1, num2) {
  return num1 - num2;
}

console.log(getSum(8, 5));

//Function declaration
//start with the function keyword

function fundamentals101(name) {
  console.log(`Lets get better at these fundamentals ${name}`);
}

fundamentals101("Davonne");

//function expression
//you create a function expression and assign it to a variable that can be called

//so basically you can assign a function to a variable.

const javascriptAllday = function keepGoing(name) {
  console.log(`This should work ${name}`);
};

const davonne = javascriptAllday("Davonne");

//Arrow functions
const sleep = () => {
  let hoursOfSleep = 7.5;
  let weNeed = "We need " + hoursOfSleep + " hours of sleep at night";
  console.log(weNeed);
};

sleep();

//
const levelUp = () => {
  let haveTos = "Projects";
  let logic = "Problem Solving";
  console.log(`Focus on: ${haveTos} and ${logic}`);
};

levelUp();

//if statements / else if /else
// let legalDrinkingAge = 21;
// let howOldAreYou = prompt("How old are you");

// if (howOldAreYou < legalDrinkingAge) {
//   alert("You are not old enough to purchase alcohol");
// } else {
//   alert("You are old..! Old enough to purchase alcohol");
//}

// //
// let myPrompt = prompt("What is Your Name?")
// if (myPrompt === "Davonne") {
//   alert("Welcome " + myPrompt )
// } else if(myPrompt === "Edgar") {
//   alert("Welcome babe!")
// } else {
//   alert("Glad your here to see my Javascript Journey")
// }

//  //switch statements
// let dayOfWeek = prompt("What day is today?")

// switch(dayOfWeek) {
//   case "Saturday":
//     alert("Yesss..!")
//     break;
//     case "Sunday":
//       alert("Lazy day");
//       break;
//     case "Friday":
//       alert("TGIF");
//       break;
//     default:
//      alert("Awww man");
// }

//

// Set a function that takes the parameter fruit, and has a switch statement of
//different fruits and returns the type of drink it is
//also has a default type if fruit is not found
//set a variable to what fruit you want to check the type of
//call the function defined by a variable
//console.log that variable

function checkMyFruit(fruit) {
  switch (fruit) {
    case "Strawberries":
    case "Raspberries":
    case "Blueberries":
      return "Berry Group";
    case "Mango":
    case "Peach":
    case "Punch":
      return "Tropical";
    case "Orange":
    case "Lime":
    case "Lemon":
      return "Citrus";
    default:
      return "Your fruit is not listed";
  }
}

let fruit = "Mango";
let myFruit = checkMyFruit(fruit);
console.log(myFruit);

//

//Numbers

//Write a function that takes two numbers as arguments and returns their sum
//if both numbers are positive.
//If either number is negative, it should return 0.

function mySumOfPositiveNumbers(num1, num2) {
  if (num1 > 0 && num2 > 0) {
    return num1 + num2;
  }
  return 0;
}

console.log(mySumOfPositiveNumbers(5, 5));
console.log(mySumOfPositiveNumbers(-2, -4));

//

//Write a function that takes an array of numbers and returns the average of all the
//numbers in the array

function averageOfNumbers(anArrayOfNumbers) {
  let sum = 0;
  for (let i = 0; i < anArrayOfNumbers.length; i++) {
    sum += anArrayOfNumbers[i];
  }

  let count = anArrayOfNumbers.length;
  let average = sum / count;
  return average;
}

let findTheAverage = [2, 2, 4, 6];
let average = averageOfNumbers(findTheAverage);
console.log(average);

//

//Write a function that takes two numbers as inputs and returns the larger
//of the two numbers

function takeTwoNumbers(one, two) {
  let max = Math.max(one, two);
  return max;
}

console.log(takeTwoNumbers(100, 500));

function takeTwoNumbersAgain(oneNum, twoNum) {
  if (oneNum > twoNum) {
    return oneNum;
  } else if (twoNum > oneNum) {
    return twoNum;
  } else {
    return "Both Numbers Are Equal";
  }
}

console.log(takeTwoNumbersAgain(4, 12));
console.log(takeTwoNumbersAgain(10, 10));
console.log(takeTwoNumbersAgain(20, 40));

//date
let rightNow = new Date();
rightNow.setFullYear(2024);
console.log(rightNow);

//log only the year
console.log(rightNow.getFullYear());

//
let halloween = new Date("October 31, 2024 00:00:00");
console.log(`This is Halloween: ${halloween}`);

function tellTime() {
  let now = new Date();
  let theHr = now.getHours();
  let theMin = now.getMinutes();
  console.log(`What time is it? ${theHr}: ${theMin}`);
}

tellTime();

//Objects

const company = {
  name: "DJVD Services",
  employees: {
    employee1: {
      name: "Jasmine Deleon",
      position: "Frontend Developer",
    },
    employee2: {
      name: "Bella Swan",
      position: "Backend Developer",
    },
    employee3: {
      name: "Edward Cullen",
      position: "Lead Sales",
    },
    employee4: {
      name: "Alice Cullen",
      position: "UX Engineer",
    },
    employee5: {
      name: "Jacob Black",
      position: "Fullstack Developer",
    },
  },
};

console.log("My Company:", company.name);
console.log(company.employees);
console.log(company.employees.employee4);

//
const aboutMe = {
  name: "Davonne",
  gender: "female",
  age: 30,
  workEthic: "strong",
  reliable: true,
  flexible: true,
};

console.log("Me:", aboutMe);

const myFavorites = {
  meal: "shrimp alfredo",
  color: "pink",
  car: "mustang",
  dog: "boxer mix",
  favQuote: function () {
    //this is a method, which is a function inside an object
    console.log("If you want something, than let yourself have it!");
  },
};

myFavorites.favQuote();

//

//spread operator
//used to expand an array, string, object, into individual elements

function sumArr(a, b, c) {
  return a + b + c;
}

const test = [7, 1, 2];
console.log(sumArr(...test));

//more ways to use spread

const businessNeeds = ["advertisement", "customers", "employees"];
const haveTos = ["plan", ...businessNeeds, "structure"]; //creates a new array, using spread to add businessNeeds values
console.log(haveTos);
console.log(businessNeeds); //does not change the value of businessNeeds

//
const coffee = ["mocha", "carmel", "vanilla"];
const addFlavor = ["regular", ...coffee];
console.log(addFlavor); //adds regular to the array

//
const kidsSizes = ["extra small", "small"];
const allDrinkSizes = [...kidsSizes, "medium", "large"];
allDrinkSizes.push("extra large"); //push value to the end of the array
console.log(allDrinkSizes);

// concatenate arrays
let luckyNumbers = [7, 15, 19, 10, 50];
const unluckyNumbers = [13, 3, 31, 6];

luckyNumbers = [...luckyNumbers, ...unluckyNumbers];
console.log(luckyNumbers);

//combining arrays
const schoolsPerDistrict = [8, 4, 12, 6];
const numberOfStudentsPerDistrict = [1200, 600, 2400, 1050];
const totalSchoolsAndStudents = [
  ...schoolsPerDistrict,
  ...numberOfStudentsPerDistrict,
];
console.log(totalSchoolsAndStudents);

//you can also use the spread operator with objects
const user = {
  name: "jasmine",
  age: 30,
  accountActive: true,
};

const updatedUser = { ...user, location: "Italy" }; //using spread operator to add og object and add a new property to the object to a value
console.log("user:", updatedUser);

//rest operator
//spread operator compared to rest
//rest, collects all the arguments into an array, making it easier to work with multiple values

function addTheseNumbers(...nums) {
  return nums.reduce((sum, current) => sum + current, 0);
}

console.log(addTheseNumbers(2, 2, 2, 2)); //output 8

//switch statement
//the value of the expression is compared with the values of each case
//if theres a matching case, the associated block of code is executed
//if theres no match, the default code is executed

/*
  Syntax

  switch(expression) {
    case x: 
      //code block
    break;
    case y: 
     //code block;
    break;
    default:
  }
*/
const getWhatDayIsToday = (day) => {
  switch (day) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";
    default:
      return "Invalid Day";
  }
};

console.log(getWhatDayIsToday(3));
//map
//mapping over ex. arrays, like in React making it into a list
//  creates a new array with the results of a calling a provided
// function on every element in the array

const averageScores = [4, 5, 8, 6, 9];
const timesFive = averageScores.map((score) => score * 5);

console.log(timesFive); //expected 20, 25, 40,30, 45

//now put it in a function

function averageScoresTest(anAry) {
  const timesFiveTest = anAry.map((score) => score * 5);
  console.log(timesFiveTest);
}

averageScoresTest([4, 5, 8, 6, 9]); //expected 20, 25, 40,30, 45
averageScoresTest([5, 10, 8, 6, 2]); //expected 25, 50, 40, 30, 10

//Math

//For loops

// A for loop repeats until a specified condition evaluates to false.
// Loops offer a quick and easy way to do something repeatedly.

// for (initialization; condition; afterthought) statement;

//loops through an array

//print each number in the array, individually  **

const lotteryTicketNumbers = [15, 50, 30, 25, 28];
for (let i = 0; i < lotteryTicketNumbers.length; i++) {
  console.log(lotteryTicketNumbers[i]);
}

//loop through a String
const transferableSkills = ["Sales", "Communication", "Leadership", "Detailed"];

for (let i = 0; i < transferableSkills.length; i++) {
  console.log(transferableSkills[i]);
}

//for...in loop
//loop through an object

const sister = { name: "Ava", age: 9, city: "Westminster" };

for (let key in sister) {
  console.log(key, sister[key]);
}

//charAt() -  see line 1608 and below
//loop through a Set
//loop through a Map

//Sets
//Maps
//while loops
//do, while
//for in
//for of
//labeled statement
//break statement
//continued statement
//JavaScript Object Prototypes
//hoisting ?
//async functions
//callbacks
//promises
//closures
//

//Javascript questions
//    PUT EVERYTHING TOGETHER...!

//Create a function that takes two parameters and returns the sum of those
//numbers and prints it

//create an arrow function, that has two parameters as numbers
//return the sum of those numbers
//call the function and console log the value

let sumThis = (num1, num2) => {
  return num1 + num2;
};

console.log(sumThis(2, 2));

//

/*
    - Create an array to include the following list items: Honda, Toyota, Ford, Subaru.

    - Using that array, use array methods to transform it to:
        ["Hyundai", "Toyota", "Mercedes", "Ford", "Audi"].
*/

let cars = ["Toyota", "Honda", "Nissan", "Audi"];
cars.pop(); // removes the last element
cars.push("Tesla"); //add an element to the end of= the array
cars.shift(); //removes the first element in the array
cars.unshift("BMW"); //adds an element to the beginning of the array
cars.splice(2, 0, "Mercedes"); //adds and/or removes array elements at certain points in the array
console.log(cars);

/*
Using loops, count how many "e"s are in the following sentence:

  - "There once was a donkey named Eeyore."

*/

let sentence = "There once was a donkey named Eeyore";
let count = 0;

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === "e" || sentence[i] === "E") {
    count++;
  }
}

console.log(count);

//

//Write a function that takes a string and returns true if the string is a
//palindrome (reads the same backwards as forwards) and false otherwise.

//arrow function
//compare string to reversed string
//split into an array, reverse the array, and then join again
//returns true IF the words is a palindrome  / else false other wise

let isThisAPalindrome = (aStr) => {
  return aStr === aStr.split("").reverse().join("");
};

console.log(isThisAPalindrome("testing"));
console.log(isThisAPalindrome("racecar"));

//you can also loop through it
let isThisAPalindromeAgain = (aStr) => {
  for (let i = 0; i < aStr.length / 2; i++) {
    if (aStr[i] !== aStr[aStr.length - 1 - i]) {
      return false; // Not a palindrome
    }
  }
  return true; // Is a palindrome
};

console.log(isThisAPalindromeAgain("bob"));
console.log(isThisAPalindromeAgain("hello"));

//

//Write a function that takes an array of numbers and returns the sum of
//the numbers that are even

let myEvenArray = (anArray) => {
  let sum = 0;
  for (let i = 0; i < anArray.length; i++) {
    if (anArray[i] % 2 === 0) {
      sum += anArray[i];
    }
  }
  return sum;
};

console.log(myEvenArray([4, 8, 2, 2, 9, 5]));

//

//Write a function that takes a string and return a new string with
//the vowels removed

//a function, that takes a string
//define the vowels in a variable
//for loop, loop through the string
//if, statement, includes prototype
//sum the string and i from the loop

let vowelsRemoved = (aStr) => {
  let vowels = ["a", "e", "i", "o", "u"];

  let noMoreVowels = "";
  for (let i = 0; i < aStr.length; i++) {
    if (!vowels.includes(aStr[i])) {
      noMoreVowels += aStr[i];
    }
  }
  return noMoreVowels;
};

console.log(vowelsRemoved("Davonne"));
console.log(vowelsRemoved("Momentum"));

/*
  Write a function FizzBuzz that prints numbers from 1 to 100
  or multiples of three, print "fizz" instead of the number, 
  and for multiples of five, print "buzz"

  For numbers that are not multiples of both three and five, print "fizzBuzz"
  
*/

//function
//if statement
//loops through the numbers 1- 100
//if  multiples of 3, print "fizz"
//else if  multiples of five print "buzz"
//else if nether print "fizzBuzz"
//else print number

const FizzBuzz = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// FizzBuzz();

//Define a function that accepts a string argument called name. Function should return a
//personalized string if the name is present

//make a function that takes a string
//return a personal creating if name is present

//arrow function
//if statement
//back ticks
//console.log

const greeting = (name) => {
  if (typeof name === "string" && name.length > 0) {
    return `Hello ${name}!`;
  }
  return "Hello!";
};

console.log(greeting("Moto"));

//

/*
  Write a function max ofThree that accepts three arguments. It should
  return the largest of the three

  //create a function that takes 3 numbers as arguments
  //arrow function
  //if statements 
  //&& logical operator 

*/

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) return num1;
  if (num2 > num1 && num2 > num3) return num2;
  if (num3 > num1 && num3 > num2) return num3;
}

console.log(maxOfThree(20, 80, 200));

console.log("right here davonne");

//

/*
  Create a function that takes a string as input and returns the number of vowels 
  contained within it  

  //create an arrow function that takes a string  
  //define the vowels
  //loop through the string
  //if statement
  //call the function with the given string  
*/

const numberOfVowels = (aStr) => {
  const theVowels = ["a", "e", "i", "o", "u"];
  let sum = 0;
  for (let i = 0; i < aStr.length; i++) {
    if (theVowels.includes(aStr[i])) {
      sum++;
    }
  }
  return sum;
};

console.log(numberOfVowels("Count the vowels in this sentence"));

//

/*
  Write a function that accepts three numbers as arguments

  return 'sum' if the sum of the first two numbers equals the third
  return 'difference' if the first number minus the second equals the third
  return 'product' if the product of the first two numbers equals the third
  return 'fraction' if the first number divided by the second equals the third
  return null if none of the above are true

  //declare a function, that accepts three numbers as arguments
  //if statement for each case
  //else return null if none are true

*/

const everyWhichWay = (num1, num2, num3) => {
  if (num1 + num2 === num3) return "sum";
  if (num1 - num2 === num3) return "difference";
  if (num1 * num2 === num3) return "product";
  if (num1 / num2 === num3) return "fraction";

  return null;
};

//

/*
  Define a function, that accepts a number as an argument. It should return the sum of all
  the odd numbers between 1 and the given number 

  If the function receives an argument less than 1, should return 0 

  //have a function that takes a number as an argument
    //loop thorough the numbers
    //if statement (how do you find the odd numbers)
    //should return the sum of all the odd numbers between 1 and given number

*/

const onlyOdds = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 1) sum += i;
  }
  return sum;
};

const onlyOddsAnswer = onlyOdds(10);
console.log(onlyOddsAnswer);
/*
   Define a function that accepts a string as an argument. The function should return a string 
   in which every other character is capitalized. The first letter should be lower case. 

    //define the function with a string as the argument
    // loop through the string 
    //if / else 
    //return a string, every other letter capitalized 

*/

//
const crazyCaps = (aStr) => {
  const lowerCasedString = aStr.toLowerCase();
  let returnedString = "";

  for (let i = 0; i < lowerCasedString.length; i++) {
    const currChar = lowerCasedString[i];

    if (i % 2 === 1) returnedString += currChar.toUpperCase();
    else returnedString += currChar;
  }
  return returnedString;
};

const myCrazyName = crazyCaps("davonne");
console.log(myCrazyName);

/*
  Define a function, bacteriaTime, that accepts two arguments,

  1. currentNum (number) - number of starting bacteria
  2. targetNum (number) - desired number of bacteria
    
  Assuming the number of bacteria doubles every 20 minutes, bacteriaTime should return the number
  of minutes required for the number of bacteria to grow from currentNum to a number equal to 
  larger than targetNum

  You can assume that currentNum will be a positive integer. If targetNum is smaller than
  currentNum, return the string 'targetNum must be larger than currentNum'

*/

//define an arrow function, two arguments
//if targetNum is smaller than currNum, return string ''

//bacteria doubles 20 min
//while

const bacteriaTime = (currNum, targetNum) => {
  if (targetNum < currNum) return "targetNum must be larger than currentNum";

  let currentTime = 0;
  let aliveBacteria = currNum;

  while (aliveBacteria < targetNum) {
    currentTime += 20;
    aliveBacteria *= 2;
  }
  return currentTime;
};

//

/*
  A teacher has finished grading their students tests and needs your help to calculate the average 
  score for the class. 

  Create a function that takes in an array of test scores and returns the average score.
  The average is calculated by adding all the scores and diving by how many total number of scores

//for loop
//get sum of scores
// return sum calculate average 
  
*/

const getAverage = (scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
};

console.log(getAverage([3, 4, 5, 6, 7])); //expected 5

/*sw
Now the teacher needs your help converting the students score to a letter grade

Create a function getGrade that takes a score as the parameter. Your function should
return a string representing letter based on the score. 


//function
//switch statement 
 //cases with each score

*/
function getGrade(score) {
  let grade;
  switch (true) {
    case score >= 100:
      grade = "A++";
      break;
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
      break;
  }
  return grade;
}

console.log(getGrade(100));

//can you think of an other way to do it Davonne?

//else if

function getStudentsGrade(score) {
  let grade = "";
  if (score >= 100) {
    return (grade = "A++");
  } else if (score >= 90) {
    return (grade = "A");
  } else if (score >= 80) {
    return (grade = "B");
  } else if (score >= 70) {
    return (grade = "C");
  } else if (score >= 60) {
    return (grade = "D");
  } else if (score >= 50) {
    return (grade = "F");
  }
  return grade;
}

console.log(getStudentsGrade(100));
console.log(getStudentsGrade(80));
console.log(getStudentsGrade(73));
console.log(getStudentsGrade(50));

//constructor function
//classes are a template for creating objects
//classes are built on prototype

//classes are are actually special functions
//just like you can define functional expressions nd function declarations,
//a class can be defined in two ways
/*
      1. class expression 
        //assigned to a variable

        const RestaurantDrinks = class {
          construction (name, sugar, calories. fat) {
          this.name = name;
          this.sugar = sugar;
          this.calories = calories;
          this.fat = fat
          }
        }

      2. class declaration 
      class Drinks {
        constructor(name, sugar, calories, fat) {
          this.name = name;
          this.sugar = sugar;
          this.calories = calories;
          this.fat = fat
        }
      }

    */

//a class constructor is a special method that is automatically called
//The constructor method is where you initialize the objects properties.
//it is defined by the keyword 'constructor'.

//When you create a new object (an instance) from the class, the constructor
//is called automatically to set up the object.

//when you create a new instance of a class. Its main purpose is to
//initialize the properties of the new object

//A class in JavaScript is a blueprint for creating objects, with shared properties and methods.
// when you create an object from a class, the object is called an instance of that class

class Dinner {
  constructor(name, ingredients, steps, sides) {
    // these are the properties
    this.name = name;
    this.ingredient = ingredients;
    this.steps = steps;
    this.sides = sides;
  }
}

const dinner1 = new Dinner(
  "Bean Tacos",
  "Beans, Tortillas, Chorizo, Oil",
  "Put beans into tortilla into tacos, seal them, and then fry in oil",
  "Rice"
);
console.log(dinner1);

const dinner2 = new Dinner(
  "Ceviche",
  "Shrimp, lime, serrano peppers, red onion, tomatoes, red chili peppers, tostadas",
  "Peal and clean shrimp, cut vegetables, cook shrimp in lime, put everything together",
  "Cooked Shrimp"
);
console.log(dinner2);

//

class ChristmasMovie {
  constructor(title, releaseYear, genre, rated) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.rated = rated;
  }
}

//this is called an instance, an instance of the ChristmasMovie class
//we are creating a object based on the ChristmasMovie class
const christmasMovie1 = new ChristmasMovie(
  "How The Grinch Stole Christmas",
  2000,
  "family",
  "G"
);

console.log(christmasMovie1);

//
const christmasMovie2 = new ChristmasMovie(
  "The Santa Clause",
  1998,
  "comedy",
  "G"
);
console.log(christmasMovie2);

//
const christmasMovie3 = new ChristmasMovie("Home Alone 3", 1997, "family", "G");

console.log(christmasMovie3);

//

const christmasMovie4 = new ChristmasMovie("Jack Frost", 1998, "family", "G");
console.log(christmasMovie4);

//

class GamePlan {
  constructor(learn, understand, why, how, lookInto) {
    this.learn = learn;
    this.understand = understand;
    this.why = why;
    this.how = how;
    this.lookInto = lookInto;
  }
}

const gamePlan15 = new GamePlan(
  "React",
  "React Hooks",
  "React is it",
  "Docs, Videos, Courses, Peers",
  "Java"
);
console.log(gamePlan15);

//

class HolidaySnack {
  constructor(name, keyIngredient, calories, tasteScale) {
    this.name = name;
    this.keyIngredient = keyIngredient;
    this.calories = calories;
    this.tasteScale = tasteScale;
  }
}

const holidaySnack1 = new HolidaySnack(
  "Chocolate Chip Cookies",
  "Chocolate chips",
  78,
  9
);
const holidaySnack2 = new HolidaySnack("Smores", "Marsh mellows", 197, 10);

console.log(holidaySnack1);
console.log(holidaySnack2);

//A program is a set of instructions that you write to
// tell a computer what to do

//do a math problem

function letsMultiply(aNum, anOtherNum) {
  return aNum * anOtherNum;
}

console.log(letsMultiply(10, 10)); //expected 100
//good job see you know stuff

//do another one
const anotherMathProblem = (someNum, anOtherNum, nextNum) => {
  const addNum = someNum + anOtherNum;
  const thenMultiply = addNum * nextNum;
  return thenMultiply;
};

console.log(anotherMathProblem(10, 10, 5)); //expected 100 again
//good job

//

/*
Define a function lastCharacter that accepts two strings as an argument. It should
return true if both strings end with the same character. Otherwise, return false

//create a function, arrow, takes two strings
//if statement, if both strings end with the same character return true
//off by one errors
//else return false

*/

const lastCharacter = (str1, str2) => {
  if (str1[str1.length - 1] === str2[str2.length - 1]) {
    return true;
  }
  return false;
};

console.log(lastCharacter("pink", "rink")); //expected true
console.log(lastCharacter("skateboard", "basketball")); //expected false

/*

  Write a function called doubleNumber that takes an argument 
  and returns twice the value of that number.

*/

//arrow function, that takes a number
//return twice the value of that number
//twice, value +, *

const doubleNumber = (aNum) => {
  return aNum * 2;
};

console.log(doubleNumber(10)); //expected 20

//

//good to know....

//what is a use case?

// A use case is like a step-by-step breakdown of how something
// works from the user's perspective.

//It describes how a system, feature, or process functions
// in real-world scenarios.

//Think of it as a structured way to explain what happens
// when a user interacts with something in your app.

// A use case describes a real-world scenario step by step,
// usually from the user's perspective.

/*

   Write a function called isEven that takes a number as an 
   argument and returns true if the number is even and false
   if it is odd.

 */

// arrow function that takes a number as an argument
//return true if even
//false if its not

//if statement
//modulus operator %

// const isEven = (aNum) => {
//   if (aNum % 2 === 0) {
//     return true;
//   }
//   return false;
// };

//other way you can do it, faster
const isEven = (aNum) => aNum % 2 === 0;

const hopefullyThisIsRight = isEven(2); //expected true
console.log(hopefullyThisIsRight);

//side note

// aNum % 2 → Finds the remainder when dividing by 2
// === 0 → Checks if the remainder is 0 (which means the number is even)

//

/*

 Write a function called getFirstCharacter that takes a string 
 as an argument and returns the first character of that string 

 */

//arrow function that takes a string
//return the first character of that string

//first character is [0]
//loop through the string and return the first character

// const getFirstCharacter = (aStr) => {
//  const firstCharacter= "";

//  for(let i = 0; i < aStr.length; i++) {
//   return
//  }
// }

const getFirstCharacter = (aStr) => {
  return aStr.charAt(0);
};

console.log(getFirstCharacter("Davonne")); // expected D

//returning indexes of a string, use charAt(index)

let exampleCharAt = "Testing Testing 123";
let testing = exampleCharAt.charAt(0);
console.log(testing); //expected T

let firstCharacter = "Shrimp Cocktail";
let gettingSecondCharacter = firstCharacter.charAt(1);
console.log(gettingSecondCharacter); //expected h

//Define a function takes two numbers and returns the sum of
//those numbers

const sumTheseNumbers = (number1, number2) => number1 + number2;
console.log(sumTheseNumbers(4, 5)); //expected 9

//

/*

  Write a function called isGreater that takes two 
  arguments and returns true if the first number is greater
  than the second number, and false other wise.

*/

//arrow function that takes two arguments
//return true if first number is greater then second number
// else false

//if else statement
//test case 9 greater than 3

//  > greater than
// <  less than

// const isGreater = (numero1, numero2) => {
//   if (numero1 > numero2) {
//     return true;
//   }
//   return false;
// };

//try it the other way

const isGreater = (numero1, numero2) => numero1 > numero2;

console.log(isGreater(9, 3)); //expected true
console.log(isGreater(2, 10)); //expected false

//

/*

 Write a function called getLastCharacter that takes a string as an 
 argument and returns the last character of a string 

 */

//arrow function, takes a string
//return the last character in the string,
// charAt, length - 1,

const getLastCharacter = (aString) => {
  return aString.charAt(aString.length - 1);
};

const myLastCharacter = getLastCharacter("Davonne");
console.log(myLastCharacter); //expected e

//you can also do bracket notation

/* 
   Write a function that takes two arrays and returns a new array
   containing only the elements that are present in both arrays.
   If there are no common elements, the function should return an
   empty array.
 */

//arrow function, that takes two arrays
//define a variable that filters through the array, its a callback
//filtering the element that is included in the second array
//return the variable
//define arrays
//console.log function

function findCommonElements(arr1, arr2) {
  let commonElements = arr1.filter((element) => arr2.includes(element));
  return commonElements;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [2, 4, 6, 6, 8];

let array3 = [1, 3, 5];
let array4 = [2, 4, 6];

console.log(findCommonElements(array1, array2)); // expected [2, 4]
console.log(findCommonElements(array3, array4)); // expected []

//

/*

Write a function that takes an array of the numbers and 
return s a new array where each number is squared, only 
if its even. 

*/

//function that takes an array of numbers
//returns a new array where each number is squared
//and only if its even

const squareThis = (anArr) => {
  let newArray = [];

  for (let i = 0; i < anArr.length; i++) {
    if (anArr[i] % 2 === 0) {
      newArray.push(anArr[i] * anArr[i]);
    }
  }
  return newArray;
};

console.log(squareThis([2, 2, 4, 5])); //expected [4,4,16]

//another way

//

//Set a function that gets the letter grade, has a parameter of score
//defines the variable grade
//create a switch statement that if is true, has a case for each grade,
//corresponding to the score they received

//call the function and get the grade for a particular value

function getLetterGrade(score) {
  let grade;

  switch (true) {
    case score >= 95:
      grade = "A++";
      break;
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "F";
      break;
    default:
      grade = "Invalid Score";
  }
  return grade; //you need to return it
}

let davonnesGrade = 97;
console.log(getLetterGrade(davonnesGrade));

const longTimeNoSee = "Its about time";
console.log("Back at it:", longTimeNoSee);

//

// Write a function that takes an array of numbers and returns the largest number

const getLargestNumber = [320, 5000, 20, 1];
const largestNumber = Math.max(...getLargestNumber);

console.log(largestNumber);

//now do not use Math.max
const goGetLargestNumber = [490, 420, 560, 553, 9];

let max = goGetLargestNumber[0];
for (let i = 1; i < goGetLargestNumber.length; i++) {
  if (goGetLargestNumber[i] > max) {
    max = goGetLargestNumber[i];
  }
}

console.log(max); //output 560

//

/*
Write a function that takes a string and a character
and counts how many times that character appears in the string.

*/

//write a function tht takes a string and a character
//define count to 0
//loop through the word
//if statement
//return count
const countCharacter = (word, letter) => {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }

  return count;
};

console.log(countCharacter("banana", "a")); // Output: 3

//

/*
Write a function that takes a string and a character, and returns the index of the first time that character appears in the string.

*/

const findFirstOccurrence = (word, char) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      return i; // Return the index of the first occurrence
    }
  }
  return -1; // Return -1 if the character is not found
};

console.log(findFirstOccurrence("javascript", "a")); // Output: 1
/*
  Write a function that takes a string as input and returns the string reversed

*/

//function that takes a string
//loop through the string
// or reverse

//notes from freeCodeCamp article
// many differenet ways to do this
// you can do the built in reverse function

/*
    resource:
    https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/ 
*/

//built in

const reverseThis = (aStr) => {
  return aStr.split("").reverse().join("");
};

console.log(reverseThis("davonne"));

//another way
const reversedString = (aStr) => {
  let splitString = aStr.split("");
  let reverseThis = splitString.reverse("");
  let finalResult = reverseThis.join("");
  return finalResult;
};

console.log(reversedString("motivation"));

//another way
//for loop

const revereThisString = (aStr) => {
  let newString = "";

  for (let i = aStr.length - 1; i >= 0; i--) {
    newString += aStr[i];
  }
  return newString;
};

console.log(revereThisString("momentum"));

// You're looping through the string, starting at the end (aStr.length - 1), and stopping when you reach the first character (index 0).
// Each time through the loop, you're taking the character at the current index and adding it to newString, so you build the reversed version step by step.

/*
  Define a function doYouPlayTheTheremin, that accepts a string as an argument. doYouPlayTheTheremin
  should return true if the inputted string starts with the letter s or S. Otherwise 
  doYouPlayTheTheremin should return false. 

*/

//create an arrow function that takes a string
//loop through the string
//if statement if string starts with a V or v return true, || or logical operator
//else return false
const doYouPlayTheTheremin = (aStr) => {
  for (let i = 0; i < aStr.length; i++) {
    if (aStr[0] === "s" || aStr[0] === "S") {
      return true;
    }
    return false;
  }
};

console.log(doYouPlayTheTheremin("suns")); //true
console.log(doYouPlayTheTheremin("coding")); // false

//
