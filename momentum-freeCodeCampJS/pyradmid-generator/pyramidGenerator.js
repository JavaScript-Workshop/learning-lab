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

let character = "Hello";
console.log(character);

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

let result = "";

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

const myRos = [1, 2, 3, 4, 5, 6, 7];
for (const row of myRos) {
  result = row + result + "\n";
  console.log(row);
}

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

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i));
}

//Step 46
//okay lets start a new one just so everything is up to date
//set the variables, for a character, count, and row
//loop through the count, i plus 1 so its repeated
//have your empty array push the character string repeated i + 1
//console.log it

const myCharacter = "*";
const myCountNumber = 8;
const rowNumber = [];

for (let i = 0; i < myCountNumber; i = i + 1) {
  rowNumber.push(myCharacter.repeat(i + 1));
}

console.log(rowNumber);

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
