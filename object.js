/************************Objects*********************** */

//Dot Notation
// console.log(data.firstName);
// console.log(typeof(data.address));

//Bracket Notation
//console.log(data['firstName']);

const nameKey = "Name";
// //console.log("first"+nameKey);
// console.log(data["first"+nameKey]);
// console.log(data["last"+nameKey]);
// console.log(data."first"+nameKey);


// const inter = prompt("what do you want to know about john ? firstName,lastName,age,profession");

// console.log(inter);

// alert(johnData[inter]);
const firstName = "John";
const lastName = "Schmed";

const johnDataArray = [firstName,lastName,1991,31,"teacher"];

const johnData = { firstName : "John" ,
               lastName :"Schmed" ,
               birthYear : 1991,
               age: 31,
               profession: 'teacher',
               friends: ['Michael','Peter','Sam'],
               login: function(){
                  console.log("login function");
               },
               logout:function(){
                  console.log("logout function");
               },
               calcAge: function(){
                  console.log("inside function",this.birthYear);
                  this.age = 2037 - this.birthYear;
               }
            } ;

//johnData.calcAge();
console.log(johnData);
// const sampleData={
//      grade:0,
//      std: 12,
//      calcGrage: function(){
//       return a%this.grade;
//      }
// }

// johnData.location ="India";
// johnData["facebookAccount"] = "@johnschmeds";
// johnData["addressArray"] = ['OfficeBangalore','HouseHyderabad']

// console.log(johnData);
// //Investigate
// //console.log(sampleArray[1].calcAge(1991));

// //console.log(sampleArray);

// // const myFunction = function(){
// //    console.log("I am the function");
// // }
// // const group =[ 0,"rose",false,myFunction()];

// // group[3];


// //****************Object Methods********************/

// //console.log(johnData.calcAge(1991));

// //console.log(johnData["calcAge"](1991));


// // console.log(johnData.calcAge());


// // console.log(johnData.calcAge(1989,2993));


// function greet(firstName) { //Local Scope
//     //limited to greet function
//    console.log(name);
//  return `Hello ${firstName}`

// }

// // //console.log(firstName);
// // let name ="Krishna"; //Global Scope 
// // let str = greet(name);

// //let and const 

// function greet(firstName) { //Local Scope
//    //limited to greet function
//   console.log(name);
// return `Hello ${firstName}`

// }

// //console.log(firstName);
// const name ="Krishna"; //Global Scope 
// const str = greet(name);





