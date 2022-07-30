/**********************Call backs******************** */

function taskOne(){
    console.log("task one");
}
function taskTwo(){
   console.log("task two");
}


// setTimeout(taskOne,5000);
// taskTwo();
/*************Server Example */

function serverRequest(query,callback){
    console.log("before response");
    setTimeout(function(){
        let response = query + "full";
        callback(response);
    },5000)
}
function getResults(response){
    console.log("Response from the server: "+response);
    console.log("after response");
}
// serverRequest("The glass is half ",getResults);
// console.log("after callbacks execution");

/******************Functional Programming***********************/
//one way object literals
let data = {
    "property": "value"
}

//function constructor 
// function user(email,name,birthYear){
//     this.email = email;
//     this.name = name ;
//     this.birthYear = birthYear;
// }

let user = {
    email:"",
    name:"",
    birthYear:"",
}
// let userOne = new user("savitha@gmail.com","savitha");
// console.log("user One ", userOne);


user.calculateAge = function(){
    console.log("The cureent age is:"+(2037 - this.birthYear));
}
console.log(user);
// let person1 = new user("savitha@gmail.com","savitha",1984);
// console.log(person1);
// let person2 = new user("john.k@gmail.com","john",1991);
// console.log(person2);
// console.log(user.prototype);

// person1.calculateAge();
// person2.calculateAge();

// let johnData = {
//     email: "savitha@gmail.com",
//     name:"Savitha",
//     birthYear: 1991
// }


