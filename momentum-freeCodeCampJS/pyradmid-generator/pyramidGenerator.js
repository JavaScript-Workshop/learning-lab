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
console.log(two);
