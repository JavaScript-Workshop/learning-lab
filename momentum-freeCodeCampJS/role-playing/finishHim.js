// Building a Role Playing Game
//Review for me

//Step 1
//setup up html..!

//Step 2
//setup javascript link

//Step 3
//Getting back to basics

console.log("Hello World");

//Step 4 and 5, 6, 7, 8, 9, 10,
//declare a variable, assign value to 0
//more variables...! oh you know this..!
//question 11, create four divs in html with ids
//question 12, 13, 14, add the text and ids for the divs, health, gold, XP, create buttons with ids

let myXp = 0;
let myHealth = 100;
let gold = 50;
let currentWeaponIndex = 0;

let karating;
let monsterHealth;
let inventory = ["nunchucks"];

//question 15
//create a querySelector for button1
//nice you already did question 16, have js script at the end of the body tag
//question 17, declare button one with a const variable
//question 18, get two more button elements with query selector

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const bugBoost = document.querySelector("#bugBoost");
const codeStats = document.querySelector("#codeStats");
const codeName = document.querySelector("codeName");
const codeHealthText = document.querySelector("codeHealth");

const goToCamp = () => {
  button1.innerText = "Go to la casa!!";
  button1.onclick = goHome;
  button2.innerText = "Go to camp";
  button2.onclick = goToTrainingCamp;
  button3.innerText = "Fight Lex Luther";
  button3.onclick = goToCamp;

  text.innerText =
    'You have entered into the training camp!! Do you see a button that says Go to la "casa".';
};

const goHome = () => {
  button1.innerText = "Comprar diez health boost!! 10 kata";
  console.log("la casa");
  button1.onclick = buyBoost;
  button2.innerText = "Buy self defense boost!! 30 kata";
  button2.onclick = buyDefense;
  button3.innerText = "Go to training camp";
  button3.onclick = goToCamp;

  text.innerText = "You have entered la casa!!";
};

//functions, you know these,
//go to the dojo
const goToTrainingCamp = () => {
  console.log("Go to training camp");
};

//fight lex luther
const fightLexLuther = () => {
  console.log("I dare you.");
};

const buyBoost = () => {};

const buyDefense = () => {};

button1.onclick = goHome;
button2.onclick = goToTrainingCamp;
button3.onclick = fightLexLuther;

const updateThis = (location) => {
  //
};
