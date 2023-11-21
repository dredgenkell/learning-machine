/*

DATA TYPES

let js = 'amazing';
console.log(22 + 227);

console.log("Jonas")
console.log(29)

let firstName = 'Nami'


console.log(firstName)
console.log(firstName)
console.log(firstName)

// let jonas$Nami = "JN";
// let $function = 27;

// let Person = 'Nami';

let myFirstJob = 'Programmer';
let myCurrentJob = 'Engineer';

console.log(myCurrentJob)

let country = 'Norway';
console.log(country);

let continent = 'Eurasia';
console.log(continent)

let population = '5.408 million'
console.log(population)



// VALUES AND TYPES

let javaScriptIsFun = true;
console.log(javaScriptIsFun)

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Nami');

javaScriptIsFun = 'Yes?'

console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year)

year = 1994;
console.log(year)

console.log(typeof null);


// LET,CONST,VAR

let age = 30;
age = 29;

const birthYear = 1994;
// birthYear = 1998;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Yamato'

console.log(lastName);
*/


// // Math Operators

// const now = 2037;
// const ageNami = now - 2023;
// const ageRobin = now - 2011;
// console.log(ageNami);
// console.log(ageNami, ageRobin);


// console.log(ageNami * 2, ageRobin / 2, 2 ** 3);
// // 2 ** 3 means to to the power of 3 = 2 * 2 * 2

// const firstName = 'Nami';
// const lastName = 'Onami';
// console.log(firstName + ' ' + lastName);


// // Assigment Operators

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x)

// //Comparison Operators

// console.log(ageNami > ageRobin); // >, <? >=, <=
// console.log(ageNami >= 18);
// console.log(ageRobin >= 18);

// const isFullAge = ageRobin >= 18;

// console.log(now - 2023 < now - 2011);

// const now = 2037;
// const ageNami = now - 2023;
// const ageRobin = now - 2011;

// console.log(now - 2023 < now - 2011);

// // console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10;
// console.log(x, y);

// const average = (ageNami + ageRobin) / 2;
// console.log(average);
// console.log(ageNami, ageRobin);

// const firstName = 'Nami';
// const job = 'pirate';
// const birthYear = '1994';
// const year = 2023;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string..`);

// console.log(`String with \n\
//   multiple \n\
//   lines`);

// console.log(`String
//                 multiple
//                 lines`)



// IF ,  ELSE

// const age = 15;
// const isFullAge = age >= 18;

// if (isFullAge) {
//   console.log('Nami can start pirate license ○( ＾皿＾)っ Hehehe…');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Nami is too young, wait another ${yearsLeft} years!`)
// };

// const birthYear = 2009;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// };

// console.log(century);

// //TYPE CONVERSION
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Nami'));
// console.log(typeof NaN);

// console.log(String(23), 23);


// //TYPE COERCION

// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2'); //also works for dividing

// let n = '1' + 1;
// n = n - 1;
// console.log(n);


//EQUALITY OPERATORS

// 5 falsy values: 0, '', undefined, null, NaN;

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Nami'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// // const money = 0;
// if (money) {
//     console.log("Don't spend it all!");
// } else {
//     console.log('You should get a job!');
// };


// let height;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED')
// };


// const age = '18';
// if (age === 18)
//     console.log('You just become an adult! (sctict)');

// if (age == 18)
//     console.log('You just become an adult! (loose)');

// const favourite = Number(prompt("Whats your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);


// if (favourite === 23) {   //22 === 23 -> FALSE
//     console.log('Cool! 23 is an amazing nuber')
// } else if (favourite === 7) {
//     console.log('7 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7')
// };

// if (favourite !== 23) console.log('Why not 23, bro?');


// const hasDriversLicence = true; //A
// const hasGoodVision = false; // B

// // console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// // console.log(!hasDriversLicence);

// // const shouldDrive = hasDriversLicence && hasGoodVision;

// // if (shouldDrive) {
// //     console.log('Nami is able to drive!')
// // } else {
// //     console.log('Time for a walk baby')
// // };


// const isTired = false; //C
// console.log(hasDriversLicence && hasGoodVision && isTired);

// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log('Nami is able to drive!')
// } else {
//   console.log('Time for a walk baby')
// };


//SWITCH STATEMENTS

// const day = 'tuesday';

// switch (day) {
//   case 'monday': //day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//     break;
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend!');
//     break;
//   default:
//     console.log('Not a valid day..');
// }

// if (day === 'thursday') {
//   console.log('Write code examples')
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'tuesday' || day === 'wednesday') {
//   console.log('Prepare theory videos');
// } else {
//   console.log('Not a valid day..')
// };


// EXPRESSIONS AND STATEMENTS
// 3 + 4
// 1994
// true && false && !false

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Nami'
// console.log(`i'm ${2037 - 1994} years old ${me}`)

//CONDITIONAL OPERATOR

const age = 17;
// age >= 18 ? console.log('I like to drink beer') :
//   console.log('I like to drink water');

const drink = age >= 18 ? 'wine?' : 'water!';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine?';
} else {
  drink2 = 'water!';
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? 'wine?' : 'water!'}`)
