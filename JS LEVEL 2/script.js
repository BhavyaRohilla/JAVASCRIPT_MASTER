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
