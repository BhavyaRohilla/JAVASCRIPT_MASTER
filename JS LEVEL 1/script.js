// ph - 1
/*
let js = "Amazing";
// if (js === "Amazing") alert("JavaScript is FUN!!");

console.log(40 + 8 + 23 - 10);

console.log("Bhavya");
console.log(23);

let firstName = "Matilda";
// let first = 'bhavya';
// let firstNamePerson;
// let first_name_person;

// let bhavya&paisa = "BJP";
// let new = 27;

// let  function = 23;
// let _function =

console.log(firstName);
console.log(firstName);
console.log(firstName);

let person = "Priyanka";
let PI = 3.1415;
console.log(PI);

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

// ph - 2
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof false);
console.log(typeof javascriptIsFun);

let elvishYadav = false;
console.log(typeof elvishYadav);
console.log(typeof "elvishYadav");

let year;
console.log(year);
console.log(typeof year);

year = 2021;
console.log(typeof year);
*/

// DAY - 2

//let, const, var
/*
ph - 1

let age = 56;
console.log(age);
age = 31;
console.log(age);

const birthYear = 1991;
// birthYear = 1990;

var job = "Programmer";
job = "Teacher";
console.log(job);

lastName = "Shaktiman";
console.log(lastName);

const now = 2037;
const ageBhavya = now - 2001;
const ageSarah = now - 2018;

console.log(ageBhavya, ageSarah);

console.log(ageBhavya * 2, ageSarah / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Bhavya";
const lastName = "Rohilla";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100

x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operator
console.log(ageBhavya > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageBhavya = now - 2001;
const ageSarah = now - 2018;

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageBhavya + ageSarah) / 2;
console.log(averageAge);

// challenge

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
const firstName = "Bhavya";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const msg =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(msg);

const msgNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(msgNew);

console.log(`Just a regular string.....`);

console.log(
  "String with \n\
multiple \n\
lines"
);

const age = 15;
if (age >= 18) {
  console.log("sarah can start driving license 🚗");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}

const birthYear1 = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Bhavya"));
console.log(typeof NaN);

console.log(String(23), 23);
*/

/*
// type coercion

console.log("I am " + 23 + "Years old");
console.log("23" - "10" - 3);
console.log("23" / 2);

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);
*/

// Day - 4
/*
let currYear = "2024";
console.log("In 10 Years, it will be " + currYear + 10);
console.log(currYear + 10);

console.log("In 10 years, it will be " + Number(currYear) + 10);
console.log(Number(currYear) + 10);

console.log(Number("Br12345"));

console.log(typeof NaN);

console.log(String(23), 23);
*/

// */ +-

// Type coercion
/*
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("46" / 2);
console.log("46" > "2");

console.log("23" + "10" - 3); // 2307
console.log("23" - "10" + 3); // 16
console.log("23" - "10" + "3"); //  133
console.log(2 + 3 + 4 + "5"); // 95
*/

/*******************************************************************************/
//Day - 5
// 5 falsy value: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Bhavya"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't Spend it all :) ");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("YaY! height is defined");
} else {
  console.log("height is undefined");
}

// Equality operator == vs ===

const age = 18;
if (age === 18) console.log("You just became an adult :D");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("Number is not 23 or 7 or 9");
}

// !=, !==

if (favourite !== 23) console.log("Why not 23?");
