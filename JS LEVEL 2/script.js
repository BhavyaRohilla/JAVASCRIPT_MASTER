"use strict";

/* ab = 21;
console.log(ab); */

/*

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
// const if = 23;
*/

/*
function logger() {
  console.log("My name is bhavya");
}

// Calling
// Running
// invoking function    DOUBT
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

// function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  //   const age = 2037 - birthYear;
  //   return age;
  return 2037 - birthYear;
}

console.log(age1);
// const age1 = calcAge1(1991);

// function expression
// const age2 = calcAge2(1991);

const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
console.log(calcAge2);

const age2 = calcAge2(1991);
console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2001, "Bhavya"));
console.log(yearsUntilRetirement(1999, "Sarah"));
*/

/*
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
  //   return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "ABC"));
console.log(yearsUntilRetirement(1970, "Mike"));
*/

/*
// Arrays
const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "peter"];
console.log(friends);

const years = new Array(1991, 1992, 1993, 1994, 2024);
console.log(years);

console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// friends = ["Bob", "Alice"];

const firstName = "Bhavya";
const bhavya = [
  firstName,
  "Rohilla",
  2024 - 2001,
  "Teacher",
  "Student",
  friends,
];
console.log(bhavya);
console.log(bhavya.length);

// Exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const year = [1990, 2001, 2002, 2003];
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge([year[year.length - 1]]),
];

console.log(ages);
*/

const frineds = ["Micheal", "Steven", "Peter"];
console.log(frineds);

// Add element
const newLength = frineds.push("Jay");

console.log(frineds);
console.log(newLength);

frineds.unshift("John");
console.log(frineds);

//Remove element
const popped = frineds.pop(); //Last
console.log(popped);
console.log(frineds);

frineds.shift(); //First
console.log(frineds);

console.log(frineds.indexOf("Steven"));

if (frineds.includes("Steven")) {
  console.log("You have a friend called Steven");
}

const bhavyaArray = [
  "Bhavya",
  "Rohilla",
  2024 - 2001,
  "Teacher",
  ["Micheal", "Steven", "Peter"],
];

// objects

const bhavya = {
  firstName: "Bhavya",
  lastName: "Rohilla",
  age: 2024 - 2001,
  job: "Teacher",
  frineds: ["Micheal", "Steven", "Peter"],
};

console.log(bhavya);
//Dot notation
console.log(bhavya.lastName);
//Bracket Notation
console.log(bhavya["age"]);

const nameKey = "Name";
console.log(bhavya["first" + nameKey]);
console.log(bhavya["last" + nameKey]);

// console.log(bhavya.'last' + nameKey);

const interestedIn = prompt(
  "What do you want to know about bhavya? Choose between firstName, lastName, age, job, and friends"
);

// console.log(bhavya[interestedIn]);

if (bhavya[interestedIn]) {
  console.log(bhavya[interestedIn]);
} else {
  console.log(
    "Wrong Request!! Choose between firstName, lastName, age, job, and friends"
  );
}

bhavya.location = "Sirsa";
bhavya["x"] = "@bhavyarohilla1";
console.log(bhavya);

// Challenge
// "bhavya has 3 friends, and his best friend is called micheal"

console.log(
  `${bhavya.firstName} has ${bhavya.frineds.length} friends, and his best friend is called ${bhavya.frineds[0]}.`
);
