
// let population = 5.408;
// let language;
// language = 'Norse';
// const continent = 'Europe';
// const isIsland = false;
// const country = 'Norway';
// halfNorway = population / 2;
// const populationFinland = 6.0;
// const averagePopulation = 33.0;
// let description = country + ' is in ' + continent + ' and its ' + population + ' people speak ' + language

// console.log(description);
// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);
// console.log(halfNorway);
// population++
// console.log(population);
// console.log(population > populationFinland);
// console.log(population < averagePopulation);

// let massMark = 78
// let heightMark = 1.69
// let massJohn = 92
// let heightJohn = 1.95

// console.log(massMark, massJohn, heightMark, heightJohn);

// let bmiMark = massMark / heightMark ** 2;
// console.log(bmiMark);
// let bmiJohn = massJohn / heightJohn ** 2;
// console.log(bmiJohn);



massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiMark, bmiJohn);
let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);


if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`)
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)
}

