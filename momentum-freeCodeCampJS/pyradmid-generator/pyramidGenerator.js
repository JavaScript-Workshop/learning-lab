//Pyramid Generator

//Step 1 - Learning the Fundamentals

/*
  Review: 
   - Variables
     - have a value
     - variables contain letters, dollar signs, and underscores.
     - no spaces, and can't start with a number

*/

//Step 2
//Declare a variable named character

// let character;

//

//Step 3
//assignment operator
//assign variable value

// let character = "Hello";
// console.log(character);

//

//Step 4
//  Strings can be in single or double quotes
/*
    JavaScript has 7 primitive data types

    - String
    - Number
    - Boolean
    - Symbol
    - BigInt
    - Null: An intentional absence of any value
    - Undefined: A variable declared but not assigned a value


    Primitive values are immutable, meaning they cannot be changed
    — only reassigned.


  */

//

//Step 5
//When a variable is assigned with the let keyword, you
//you can reassign it later on

let myName = "Davonne";
myName = "Vonney";

//Step 6 - console.log now with new value
console.log(myName); //Vonney

//Step 7
// log your varibale to the console again
// define a new value for your variable and console log it

let myNickName = "Davonneizzle";
console.log(myNickName);

myNickName = "D";
console.log(myNickName);

//Step 8
// camelCase
//declariing varabiables

// let favoriteCharacter;

//Step 9
//console.log Step 8s variable and see what happens

// console.log(favoriteMovieCharacter); //undefined

//Step 10
//you can assign a value to an unitinalized variable
//and then console log it

let favoriateTvShow;
favoriateTvShow = "The 100";
console.log(favoriateTvShow);

//Step 11
// you can assign the value of a varibale to another variable

let one = "uno";
let two = "dos";

two = one;
console.log(two); //expected 'uno'

//Step 12
//declare a variable
const iKnowThisOne = "This is the vaule of said varibale.";
console.log(iKnowThisOne);

//Step 13
// you can decalre a variable
//you can have a variable with no initalization "with no initail value"

let water = "A Must!";
let koolAid;

console.log(water); //"A Must!"
console.log(koolAid); // undefined

//Step 14
//orta vez

const favoriteThriller = "Scream";
console.log(favoriteThriller);

//Step 15
//declare a variable with a number value

const howManyDogsIHave = 5;
console.log(howManyDogsIHave);

//Step 16
// you can do math operations in js, + - * % /

let regularWorkHours = 10;
let met = regularWorkHours + 1;
console.log(met);

//Step 16 / 17
//lets do some more

let numberOfNotebooks = 10;
let numberOfBooks = 20;

let totalBooks = numberOfNotebooks + numberOfBooks;
console.log(totalBooks);

//

const sisters = 2;
const brothers = 1;

const mySiblings = `I have ${sisters} sisters and ${brothers} brother.`;
console.log(mySiblings); //expected I have 2 sisters and 1 brother.

//

let dogFoodPrice = 100;
let discount = dogFoodPrice - 20;
console.log(discount); // expected 80

//Step 18
//Arrays can hold a series of values

//you can have an empty array
let myArray = [];

//Step 19
// Arrays are seperated with commas

const myDogs = ["Maryjane", "Roxy", "Lexy", "Coco", "Daisy"];
console.log(myDogs);

//Step 20
//bracket notation
//access what you want in the array using the index of value

let dog1 = myDogs[0];
console.log(dog1); //expected Maryjane

console.log(myDogs[1]); //expected Roxy

//Step 21
// Arrays are mutable. Mening you can change the value at an index
// you can re-assin an element

const favoriteSoda = ["Coke", "Pepsi", "Sprite"];
favoriteSoda[2] = "Moutain Dew";
console.log(favoriteSoda); //expected Coke, Pepsi, Mountain Dew

//Step 22
//alright so the value changed right, it chaged to Moutain Dew
//this is called mutation. It mutated lol

//the question is when to mutate an array and when you should not

//you know this one ...
//.lengh
//gets the number element in the array

//to get the last one length - 1

//create an array of sodas
//console log the array, but print the last element in the array

const soda = ["Coke", "Dr.Pepper", "Mr. Pip", "Pepsi"];
console.log(soda[soda.length - 1]); //get pepsi!

//Step 23
//review

//create an array
//get the second element in the array

const candy = ["Twizzlers", "Kit Kat", "Whoopers"];
console.log(candy[1]); //expected Kit Kat

//Step 24
//lets do it again but my way

//declare an array of my skills
//get the last element in the array and change the value thats stored in variable

const skills = [
  "JavaScript",
  "React.js",
  "Git",
  "Tailwind CSS",
  "Github",
  "C#",
];
const mySkills = (skills[5] = "Java");
console.log(mySkills); // expected Java

console.log("My Skills:", skills); //expected array with Java as the last element

//Step 25
// lets go !! Next lesson

/*  Hows it going? 

  - Everything is review so far, I know I am further ahead in JavaScript. This good review!
    Shout out to freeCodeCamp! 

 */

//Step 26

//Methods are part of vaules or objects
//  .log() is actually a method

//arrays have their own methods
//like the push method : it pushes a vaule to the end of the array

skills.push("Responsive Web Design");
console.log(skills);

//Step 27
//pop() method removes the last element in an array and returns that element

const buildingSkillsIn = skills.pop();
console.log(buildingSkillsIn); //expected array with returned value responsive web design

//Step 28
//push() method adds one or more elements to the end of the array

const AI = ["Artificial Inteligence", "LLM", "Agents"];
const learningAI = AI.push("Generative AI");

console.log(learningAI); //returns the new lengh of the array, not the element you just added

//Step 29
//know what values a method returns

//another one

const softSkills = ["Leadership"];
softSkills.push(
  "Curiosity",
  "Communication",
  "Adapatability",
  "Teamwork",
  "Enthusiasm",
  "Problem Solving",
  "Coding"
);
console.log("Soft Skills:", softSkills);

softSkills.pop(); //remove coding from the array. "removing the last element"
console.log("Soft Skills:", softSkills);

//Step 30
//be consistent, "" or ""
//I choose ""

//Step 31
//the let keywords, means you can change the value
//the const keyword, is consistent, you cannot change the value

//still review

//Step 32
//starting project

const player = "#";
const count = 10;
const rows = [];

//Step 33
//loop time = review time
//for loop

/*
    for (iterator; condition; iteration) {
       logic  
      } 
  */

//Step 34
//the iterator is usually i, it controls how the loop iterates through the logic

//Step 35
//the condition tells the loop how many times it should iterate.
//the loop will stop when the condtion becomes false

//reviewing operators <, > + - etc
//review booleans are true or false

//you for what a for loop is

for (let i = 0; i < count; i++) {
  // logic
}

//Step 36
//the next one is the iteation statement that will tell your loop
//what to do with the iterator after each iteration

//so we were saying the format is

// for (iteration, condition, iteration) {
//   logic
// }

//replace the second iteration that increases i by one

//got it
//start a for loop at 0
// i is less than count
//i, i plus one

// for(let i = 0; i < count; i = i + 1) {
//   //logic
// }

//Step 37
//inside of the body loop, print the value of i iterartor and watch
const myBills = "#";
const myCount = 8;
const myRows = [];

// for (let i = 0; i < count; i = i + 1) {
//   console.log(i);
// }

//it counted to 10 , starting at 0 ?

//Copilot said:
// it adds 1 to i each time
//it starts at 0 and stops before 10
//loops start at 0 and go up to but not including the count value

//Step 38
//replace your console.log with a statement to push i to your rows
//you know push()
//rows push i

// for (let i = 0; i < count; i = i + 1) {
//   rows.push(i);
// }

//Step 39
//declare a variable result and assign it to an empty string
// you know this one

//declare a variable with let
//its an empty string

// let result = "";

//Step 40
//log result

// consonle.log(result);

//Step 41
//for ..of loop
//define for of loop : used to iterate over the
//values of an iterarable object, like an array, string,
//and temporarily asssigns to a varibale

//the syntax looks like this.

// for (const value of iterable) {
//   //logic
// }

//the variable only exists for a single interation, not the entire loop

/*
   Create a for...of loop to iterate through your rows
   array, assigning each value to a row variable.

   - declare an array with values 
   - for of loop, using the syntax, I want the row, of rows
   - empty body they want

  */

// const myRos = ["Row1", "Row2", "Row3"];
// for (const row of myRos) {
//   console.log(row); //but I put a console.log =)
// }

//Step 42
//you know this. Concatenation.
// When you add a new string to an existing string to make a single string.
//Joining together two strings, to be one.

//Use the addtition operator to concatenate the row value to the result value
//always loved code cause it kinda works backwords
// it wants the result, concatenate the row value, ok, to the result value

// const myRos = ["Row1", "Row2", "Row3"];
// for (const row of myRos) {
//   result = row + result;
// }

//Step 43
//specail sequence \n which is interperated as a new line when the string is logged
//ex. thisExample = thisExample + "\n" + secondExample

//Use a second addtion operator to appened a new line after the result and row values
//it said after, from the code before, add the \n after the result and row values

// const myRos = [1, 2, 3, 4, 5, 6, 7];
// for (const row of myRos) {
//   result = row + result + "\n";
//   console.log(row);
// }

//Step 44
//time to update the original loop
//instead of pushing i to the array, push the value of your character

//chage i to character
//easy

// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character); // it was pushing i
// }

//Step 45
// i represents the current "row" number in your loop.
//repeat() method

//define repeat() method:
// creates a new string repeating the og string a specified number of times
//but does not change the og string
//it returns a new string with the repeated value

// ex
const dreamCompany = "Fast Food/Restraunt Related!";
console.log("Dream Company:", dreamCompany.repeat(3));

const activity = "Code! ";
activity.repeat(3);

/*
  Use the repeat method on your character and give it i for the number

  - repeat method on character and give it an i 
  */

// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character.repeat(i));
// }

//Step 46
//okay lets start a new one just so everything is up to date
//set the variables, for a character, count, and row
//loop through the count, i plus 1 so its repeated
//have your empty array push the character string repeated i + 1
//console.log it

// const myCharacter = "*";
// const myCountNumber = 8;
// const rowNumber = [];

// for (let i = 0; i < myCountNumber; i = i + 1) {
//   rowNumber.push(myCharacter.repeat(i + 1));
// }

// console.log(rowNumber);

//

//Step 47
//Oww functions. I like functions

function getTotal(num1, num2) {
  let total = num1 + num2;
  return total;
}

console.log(getTotal(100, 200)); //expected 300

//
const nightOwl = () => {
  let night = "at night";
  let code = `We night owls are productive ${night}!`;
  console.log(code);
};

nightOwl();

// A function is a block of code that can be reused throught your code
// You know th syntax function name(parameter) { //logic aka function body}

function letsDoThis(name) {
  let time = `It is Javascript time ${name}!`;
  console.log(time);
}

letsDoThis("Davonne");

//Step 48

//you need to call the function
//a function call tells your app to run the code from the function

const javaScriptTime = () => {
  console.log("Lets get into freeCodeCamp Javascript Course!");
};

javaScriptTime(); //calling the function

//Step 49
//back to the pyramind
//declare a function padRow, call it

// *** All Javascript functions return a value, meaning they provides a defined result

// Decalare a call varaible and assign it to your exisisting padRow call to that variable
// function padRow() {}

// padRow();

// const call = padRow();

//Step 50
//you can console.log a variable

let duolingoLanuage = "Spanish";
console.log(duolingoLanuage);

//Step 51
//by defualt function return undeined as thier value
//in order to return something you need the return keyword

function favoriteRestruant() {
  return "Red Lobster";
}

//Step 52
//you know about parameters
//basically a variable that are given a value when you call the function
//can dynamically change the result of the functions code

const favoriteMovie = (movie) => {
  console.log(`${movie} is my favorite movie hands down`);
};

favoriteMovie("HarryPotter");
favoriteMovie("Lord of The Rings"); // "step 54"

//Step 53
//a function does not jave to return a hard code value
//it can also return a stored value in a variable
//you know this

//change padRow functionto reutn the name pararmeter directly

// function padRow(name) {
//   return name;
// }

//Step 54
// parameters need to be gived a value when you call the functions
//review. just did this example
// lets do another one
// decalre a function that takes hours of sleep and return those hours
// call the function withith a variable
//console.log that variable

const quailitySleep = (hours) => {
  return hours;
};

const bestSleepHours = quailitySleep(`You need at least ${8} hours of sleep.`);
console.log(bestSleepHours); // when you pass a value to a function call, that value is refereed to as an argument.

//Step 55
//Oh you know this one..!
//you got this

//declare a function addThisUp, that takes two parameters for numbers
//return the sum of the parameters
//decalre a variable to call the function with the arguments
//console.log said variable

const addThisUp = (numero1, numero2) => {
  return numero1 + numero2;
};

const sum = addThisUp(20, 40);
console.log(sum); //expected 60

//

//Step 56
//erase everything
// nice, reviewing functions

//Step 57
//where your variable is declared determines where you can use your code
//specific scope

//global scope
// are global
//variables that are declared outside of any block like a function or a for loop

//when a varibale is global, you can use it in a function to access its value

const rapper = "The Goat";

function bestRapper(name) {
  return `${rapper}, thee ${name}`;
}

console.log(bestRapper("Eminem"));

//back to pyramind

//update padRow function to return the character variable to the beginning of the name parameter

function padRow(name) {
  return character + name;
}

// Steps 58
//variables can also be declared inside a function
//these variables are considered to be local scope or block scope

//if you try to access a variable outside the function, you get an error

//lets try it and get an error

// const didThisWork = () => {
//   const testing = "Mic check one two, one two";
// };
// console.log(testing); //yess it worked!

//

//Step 59
//more local and global variables

//varibales declared inside a function are in a local scope
// variable outside of a function is global scope, it can be ascced anywhere in your code

//declare a variable in local scope, return it
const getSoda = () => {
  const size = "Large"; // 'size' is only available INSIDE getSoda
  return size;
};

console.log(getSoda());

//

// declare a variable and assign it the value returned from the function
const secondStep = getSoda();
console.log(secondStep);

// console.log(size); // Error: size only exist inside the getSoda function

// Step 60

//interesting
//In a function or block statement, any code after a return statemnt will not run
//it stops the executction of the code
//this is why line 701 is before the return customer1

const numberOfCustomers = () => {
  const customer1 = "Family of 4";
  console.log("Seat family at table 15");
  return customer1;
  console.log("Seat family of 15"); //does not go here
};

console.log(numberOfCustomers());

//Step 61
//back to pyramid

// const myCharacter = "*";
// const myCountNumber = 8;
// const davonnesRows = [];

// for (let i = 0; i < myCountNumber; i = i + 1) {
//   davonnesRows.push(myCharacter.repeat(i + 1));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

//Step 62
//pack to your padRow function
//remove test declaration and return statement
//make the function empty

// function padRow() {} //expected undefined

// const call = padRow();
// console.log(call);

//Step 63
//have an empty pad row function
//remove console.log(call)

//Step 64
//need to know how to format a row in padRow function
//and need to know how many rows in total that are generated

//set two parameters to padRowfunction, for row number and row count

// function padRow(rowNumber, rowCount) {
// }

//Step 65
//we learned about the retrun keyword
//it is used to specify a return value

//use the return keyword to return the value of the character variable, repeated rowNumber times
// function padRow(rowNumber, rowCount) {
//   return character.repeat(rowNumber);
// }

//Step 66
//a function call means you use the function
//to call a function, reference functions name and ()

// likeThis();

//Step 66 and 67
//back to pyramid

//replace character.repeat(i + 1) in your push() call with a function for your padRow function
//easy, i got this one

//step 67
//add arguments, i + 1 and count to the padRow call
//got it..! just add the arguments to the function call padRow

// const myCharacter = "*";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return character.repeat(rowNumber);
// }

// for (let i = 0; i < myCountNumber; i = i + 1) {
//   davonnesRows.push(padRow(i + 1, myCount)); //this line, add the atguments i + 1 and myCount
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

//Step 68
//use the addtion opertor to concatenate a single space " "
// to the beginning and end of the repeated string

// const myCharacter = "*";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return " " + character.repeat(rowNumber) + " "; //this line right here
// }

// for (let i = 0; i < myCountNumber; i = i + 1) {
//   davonnesRows.push(padRow(i + 1, myCount)); //this line, add the atguments i + 1 and myCount
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

//Step 69
//From your function padRow, from line 804 - 806
//update your blank spaces to be repeated rowCount - rowNumber

//this one
// function padRow(rowNumber, rowCount) {
//   return " " + character.repeat(rowNumber) + " "; //this line right here
// }

// const myWord = "Hello";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(rowNumber) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 0; i < myCountNumber; i = i + 1) {
//   davonnesRows.push(padRow(i + 1, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

//Step 70
// you can pass full expressions as an argument

// like likeThis(2 * 2 + 4); full expressions

//update myWord vaule to be repeated 2 * rowNumber -1
//look for myWord value, repeat it 2 * rowNumber - 1

// const myWord = "Hello";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 0; i < myCountNumber; i = i + 1) {
//   davonnesRows.push(padRow(i + 1, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

//Step 71
//the addition operator can also mean shorthand "to take the orignal value of the varibale"

//ex text = test + 1
//is the same as test += 1;

//update you iteration statement in the for loop
//oh i know this...

// const myWord = "Hello";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 0; i < myCountNumber; i += 1) {
//   //this line add i += 1
//   davonnesRows.push(padRow(i + 1, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

//Step 72
// the increment operator ++
//this operator increases the value of a variable by 1

//so like

let thisExample = 10;
thisExample++;
console.log(thisExample); //expepected 11

//replace your addition assign ment with the increment operator for your loop iteration
// oh got this again

// const myWord = "Hello";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 0; i < myCountNumber; i++) {
//   //this line add ++
//   davonnesRows.push(padRow(i + 1, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

//Step 73
//have your loop start at 1
//got it..!

// const myWord = "Hello";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i < myCountNumber; i++) {
//   davonnesRows.push(padRow(i + 1, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

//Step 74
//pyramid looks funny
//update first argument your padRow call to be i

//remove 1 from your function

// const myWord = "Hello";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i < myCountNumber; i++) {
//   davonnesRows.push(padRow(i, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

//Step 75
//its still off by one

//update your loop to run while i is less then or equal to count

// const myWord = "Hello";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i <= myCountNumber; i++) {
//   //this line <=
//   davonnesRows.push(padRow(i, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

//Step 76
//leave a comment like this
//ow we know this

//Step 77
//mutiple lines for comments

/*

   just like this 

*/

//Step 78
//if statments

//if statments allow you to run a block of code only when a
//condition is met

// if (condtion) {
//   logic;
// }

function me(name) {
  if (name === "Davonne") {
    console.log(`Hi ${name}`);
  } else {
    console.log("hello");
  }
}

me("Davonne"); //expected hi davonne
me("Jasmine"); //expected hello

//Step 79
//lets do it again

const drinkingAge = 21;

function checkAge(age) {
  if (age < 21) {
    console.log("No sorry old enough to drink alcohol ");
  } else {
    console.log("Yes you are old enough");
  }
}

checkAge(25); //yes
checkAge(19); //no

//Step 80
//if statements can also be boolenas

//ex.
if (true) {
  console.log("Yes, you are getting sleepy.");
}

if ("false") {
  console.log("Condtion is true");
  //"False" is a string, which when evaulated to a boolean becomes true.
  // This means "false" is a truthy value

  //A truthy value is a value that is considered true when evaluated as a boolean.
  //Most values in js will be truthy

  //A falsy value is the opposite. A vaule consiidered false when evalulated as a booleen.

  //JS list of falsy values: false, 0, "", null, undefined, and NaN.
}
//Step 81
//change if conditon to an empty ""
// a faslsy value

if ("") {
  console.log("This condition is true");
} //its gone

//Step 82
//empty strings evaluate to false = falsy value

//oow if/else/else if statements
//allow you to check multiple conditions

// if (condition1) {
//   //logic
// } else if (condtion2) {
//   //logic
// } else if (condtion3) {
//   //logic
// } else {
//   //logic
// }

function myExample(name) {
  if (name === "Davonne") {
    console.log("Hey nice to see you D");
  } else if (name === "Daisy") {
    console.log("Go to sleep Daisy");
  } else {
    console.log("hello");
  }
}

myExample("Davonne");
myExample("Daisy");
myExample("Edgar");

//Step 83
//wow just did this
//you can also add an if block

//this will only evualuate if the conditons
// in the if and else if blocks are not met.

function sleep(time) {
  if (time == 12) {
    console.log("way passed bed time");
  } else if (time === 11) {
    console.log("Time for bed");
  } else {
    console.log("Way to early for bed");
  }
}

sleep(8); //expected "way to early for bed"

//Step 84
//declare a variable to false
//declare a variable to 0

// let myLoop = false;
// let done = 0;

//Step 85
//a while loop will run over and over again untill the conditon is no longer true

// while(condtion) {
//   //logic
// }

//decalre a while loop with the myLoop variable above

// while (myLoop) {

// }

//Step 86
//a loop that runs forever is a infinite loop = avoid these
//an infinaite loop can block our your system requiring a full restart

//use the increment operator to increase the value of done inside the while loop

// while (myLoop) {
//   done++;
// }

//Step 87
//The equlaity operator == is used to check if two values are equal.
//below done, add an if statemnt to check if done is equal to count

//got it, if statement, if statment, done == myCount

// while (myLoop) {
//   done++;

//   if (done == myCount) {
//   }
// }

//Step 88
//oh you know this one
//the equlaity operator can lead to some strange behavior

//The strict equliaty operator === is used to check if two values are equal and share the same type.

//more strict

//update done == count to use the strict equlaity operator

// if(done === count) {
//   //logic
// }

//Step 89
//we want the loop to stop executing

//inside your if body, assign the boolean false, to your contineLoop variable
//easy assign variable to the boolean false

// if (done === count) {
//  continueLoop = false;
// }

//Step 90
//back to the pyramind

//push the result of calling padRow with done and count as the argumnets to your rows array

// const myWord = "Hello";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i <= myCountNumber; i++) {
//   davonnesRows.push(padRow(i, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

// let continueLoop = true; // Changed to true
// let done = 0;

// while (continueLoop) {
//   done++;
//   davonnesRows.push(padRow(done, myCountNumber)); // Inside the loop, using consistent variable names

//   if (done === myCountNumber) {
//     continueLoop = false;
//   }
// }

// console.log(result);

//Step 91
//The strict inequlaity operator != allows you to check if two values are not equal, or do not have the same type

//update while loop condition to check if dont is not equal to count

// const myWord = "$";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i <= myCountNumber; i++) {
//   davonnesRows.push(padRow(i, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

// let continueLoop = true; // Changed to true
// let done = 0;

// while (done != myCountNumber) {
//   //this line, done is not equal to count
//   done++;
//   davonnesRows.push(padRow(done, myCountNumber)); // Inside the loop, using consistent variable names

//   if (done === myCountNumber) {
//     continueLoop = false;
//   }
// }

// console.log(result);

//Step 92
//you can now remove the if statment since you moved the comparions into the while condition

// const myWord = "$";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i <= myCountNumber; i++) {
//   davonnesRows.push(padRow(i, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

// let continueLoop = true; // Changed to true
// let done = 0;

// while (done != myCountNumber) {
//   done++;
//   davonnesRows.push(padRow(done, myCountNumber));
// }

// console.log(result);

//Step 93
//remove the contine loop variable

// const myWord = "$";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i <= myCountNumber; i++) {
//   davonnesRows.push(padRow(i, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

// let done = 0;

// while (done != myCountNumber) {
//   done++;
//   davonnesRows.push(padRow(done, myCountNumber));
// }

// console.log(result);

//Step 94
//its possible to end up with an infinate loop again

//rn you are checking if done is not equal to myCountNumber,
//if done were to be larger than myCountNumber, it would be loop for days.

//update your loop condition to check if done is less then or equal to count

// const myWord = "$";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i <= myCountNumber; i++) {
//   davonnesRows.push(padRow(i, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

// let done = 0;

// while (done <= myCountNumber) {
//   done++;
//   davonnesRows.push(padRow(done, myCountNumber));
// }

// console.log(result);

//Step 95
//arrays have a special length property allowing you to check how many values or elements are in an array.
//myArray.length method

//update your condition to check if rows.legth is less then myCountNumber

// const myWord = "$";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i <= myCountNumber; i++) {
//   davonnesRows.push(padRow(i, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

// let done = 0;

// while (rows.length > myCountNumber) {
//   //this line
//   done++;
//   davonnesRows.push(padRow(done, myCountNumber));
// }

// console.log(result);

//Step 96
//Replace the done reference in your padRowCall with rows.length + 1
//easy, go replace the padRow call reference with hthe given rows.length + 1

// const myWord = "$";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i <= myCountNumber; i++) {
//   davonnesRows.push(padRow(i, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// console.log(result);

// let done = 0;

// while (rows.length > myCountNumber) {
//   //this line
//   done++;
//   davonnesRows.push(padRow(rows.length + 1, myCountNumber));
// }

// console.log(result);

//Step 97
//you no longer need your done variable. Remove the increment operation from you loop and the done declaration

// const myWord = "$";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i <= myCountNumber; i++) {
//   davonnesRows.push(padRow(i, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// while (rows.length > myCountNumber) {
//   davonnesRows.push(padRow(rows.length + 1, myCountNumber));
// }

// console.log(result);

//Step 98

//Multi line comments

/* 
   Are like this 
   Where you can do comments on mutiple lines
   Just like this

*/

//Step 99

//What if we made the pyramdid upside down ?

//Write a new for loop, that declares your iterator i and assign the value of count,
// and use a boolean false, for the condition and iteration statement

// const myWord = "$";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i <= myCountNumber; i++) {
//   davonnesRows.push(padRow(i, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// // while (rows.length > myCountNumber) {
// //   davonnesRows.push(padRow(rows.length + 1, myCountNumber));
// // }

// //right here Step 99
// for (let i = myCountNumber; false; false);
// console.log(result);

//Step 100
//loop in the opposite direction
//your loop needs to run while i > greater than 0

// const myWord = "$";
// const myCountNumber = 8;
// const davonnesRows = [];

// function padRow(rowNumber, rowCount) {
//   return (
//     " ".repeat(rowCount - rowNumber) +
//     myWord.repeat(2 * rowNumber - 1) +
//     " ".repeat(rowCount - rowNumber)
//   );
// }

// for (let i = 1; i <= myCountNumber; i++) {
//   davonnesRows.push(padRow(i, myCountNumber));
// }

// let result = "";

// for (const row of davonnesRows) {
//   result = result + row + "\n";
// }

// //right here Step 100
// //set your loops condition to run when i is greater than 0
// for (let i = myCountNumber; i > 0; false);
// console.log(result);

//Step 101
//the iteration statment is going to be different

//remeber the syntax for for loop

// for (iteration, condition, iteration) {
//   logic
// }

// insteading of adding 1, you gotta subtract it

const myWord = "$";
const myCountNumber = 8;
const davonnesRows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    myWord.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 1; i <= myCountNumber; i++) {
  davonnesRows.push(padRow(i, myCountNumber));
}

let result = "";

for (const row of davonnesRows) {
  result = result + row + "\n";
}

//right here Step 101
//update the iteration
for (let i = myCountNumber; i > 0; i = i - 1);
console.log(result);
