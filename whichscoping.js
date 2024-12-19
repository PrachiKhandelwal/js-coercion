/*
var teacher="Shreya";
function ask(question){
    console.log(teacher,question);
};
function fun(){
    var teacher="priya";
    ask("how are you?");
};
fun(); //Shreya how are you?
*/

/*
var teacher="Shreya";

function fun(){
    var teacher="priya";
    function ask(question){
        console.log(teacher,question); 
    };
    ask("how are you?");
};
fun(); //priya how are you?
*/

/*
var teacher="Shreya";
function fun(){
    var teacher="priya";
    ask("how are you?");
    function ask(question){
        console.log(teacher,question); 
    };
};
fun(); //priya how are you?
*/

/*
var teacher="Shreya";
function fun(){
    ask("how are you?");
    var teacher="priya";
    function ask(question){
        console.log(teacher,question); 
    };
};
fun(); //undefined how are you?
*/
/*

let i=1;
console.log(y); //undefined
while(i<10){
    var y=10;
    i++;
};
console.log(i,y); //10 10
*/

//SCOPE OF FUNCTION EXPRESSIONS: they get the scope of their corresponding variable in which they are assigned
console.log(f) //incase f is declared usinng var, this prints undefined. If f is declared using let/const, it throws reference error
 
var f=function fun(){
    console.log("inside fun"); 
};
f();//we can call the function like this only and not like fun()