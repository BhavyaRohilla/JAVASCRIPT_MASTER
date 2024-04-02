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
