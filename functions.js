// /************************Functions******************** */

// /********* */

// let firstName =  "Krishna";
// function logger(){
//     console.log("first Name-------",firstName);
// }
// // logger();
// // logger();
// // logger();
// // logger();

// //Food Processor example

// // function fruitProcessor(apples,oranges){
// //     //console.log(apples,oranges);
// //     const juice = `Juice with ${apples} and ${oranges}`;
// //     return juice ;
// // }
// // const appleJuice = fruitProcessor(5,4);
// // console.log("return value----",appleJuice);

// let fruitProcessor = function(apples,oranges){
//     console.log(apples,oranges);
// }
// console.log(fruitProcessor(5,7));

// // function fruitProcessor(apples,oranges){
// //     //console.log(apples,oranges);
// //     return `Juice with ${apples} and ${oranges}` ;
// // }

// //Calculating the Age 
// const calcAge = function(birthYear){
//     return  2037 - birthYear;
// }
// const age1 = calcAge(1991);
// const age2 = calcAge(1989);

// //console.log(age1,age2); //

// //Arrow Functions
//  const calcAge3 = birthYear => 2037 - birthYear;

//  calcAge3(1990);

//  console.log(age1,age2,calcAge3(1990));

//  const yearsUntilRetirement = (birthYear,age) => {
//    // const age = 2037 - birthYear;
//     const retirementYears = (2037 - birthYear) - age;
//     return retirementYears;
//  }

//  console.log(yearsUntilRetirement(1991,31));
function cutPieces(fruit){
    return fruit*4;
}
function fruitProcessor(apples,oranges){
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange`;
    return juice ;
}
//console.log(fruitProcessor(2,3));

const fruits1 = "apple";
const fruits2 = "orange";

// const fruits = ["apple","orange","grapes"];
// console.log("before adding element------",fruits);
// fruits[3]="mango";
// console.log("after adding element-----",fruits);

const data = ['Sachin','Kumar',2037-1991,'teacher'];

// data.push('Michael,John');

// console.log(data);

// console.log("pop return--------",data.pop());

// console.log(data);

// console.log("pop return--------",data.pop());

// console.log(data);

// console.log("pop return--------",data.pop());

// console.log(data);

data.unshift('John');

//console.log(data);

data.shift();

// console.log(data);
// //-1 indicates element is not present in array 
// //if it is present returns the index of the element
// console.log(data.indexOf('Kumar'));

// //includes returns boolean value 
// console.log(data.includes('Kumar'));

data.push(23);
console.log(data);
console.log(data.includes('23')); // strict equality ===
console.log(data.indexOf('23'));// -1 

const johnArray = ['john','schmed',1991,'teacher','Micheal,steven,bob'];




