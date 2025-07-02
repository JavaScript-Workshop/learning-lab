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
