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

function user(email,name){
    this.email = email;
    this.name = name ;
}
console.log(user);
let userOne = new user("savitha@gmail.com","savitha");
console.log("user One ", userOne);
