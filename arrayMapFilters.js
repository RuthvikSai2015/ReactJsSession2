//filter method
let oldAgesArray = [31,42,43,14];

// console.log("oldAges Array --",oldAgesArray);
let newAgesArray = oldAgesArray.filter(checkAdult => {return checkAdult>=18});

function checkAdult(age){
    return age >= 18;
}

// console.log("after filtering",newAgesArray);
// newAgesArray.forEach(age => console.log(age));
//array of student object
let students  = [ { id: '001',name:"Avin" ,sports:"Cricket"},
                  { id: '002',name:"Sri" ,sports:"Basketball"},
                  { id: '003',name:"Ashley" ,sports:"Hockey"},
                  { id: '004',name:"Nikit" ,sports:"Basketball"}
                ];

let student =  { "id": '001',
                 "name":"Avin" ,
                 "sports":"Cricket"
                };

console.log(student);


//filter the students who are playing basketball
// console.log("array object-----",students);
//Map functionality 
let basketBallPlayers = students.filter(function(student){
    return student.sports === "Basketball";
}).map(function(student){
    return student.name;
})

console.log(basketBallPlayers);


