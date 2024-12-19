//global scope

//1.
/*
let name="prachi";
function fun(){
    console.log(name);
};
fun(); //prachi
console.log(name);//prachi
*/

//2.
/*
console.log(name);//ReferenceError: cannot access name before initialization and execution ends
let name="prachi";
function fun(){
    console.log(name);
};
fun();
console.log(name);
*/

/*
//3.
console.log(name); //undefined
var name = "prachi";
function fun() {
  console.log(name);
}
fun(); //prachi
console.log(name); //prachi

//4.
{
    const y=9;
}
console.log(y); //  throws an error due to block scope

//5.

{
  var z = 91;
}
console.log(z); // returns 91
*/

//6.
/*
var x = 9;
if (x === 9) {
  var x = 8;
  console.log(x); // returns 8
}
console.log(x); // returns 8 only bcz var cannot be block scoped, so  it is having global scope only here

//10.
var x = 9;
function outerFunc() {
  console.log("line 61", x); //x=undefined
  if (x === 9) { //x=undefined
    var x = 8;
    console.log(x); 
  }
}
outerFunc();
console.log(x); //x=9

//11.
var x = 9;
function outerFunc() {
  if (x === 9) {
    console.log("x is",x);
    var x = 8; //var is function scoped here, so  initialized to  undefined during 1st phase
    console.log(x); 
  }
}
outerFunc();
console.log(x); //x=9

//12.
var x = 9;
function outerFunc() {
  if (x === 9) {
    let x = 8; //shadowing will happen
    console.log(x); //8
  }
}
outerFunc();
console.log(x); //x=9

//13.
var x = 9;
function outerFunc() {
  if (x === 9) {
    console.log("x is",x); //throws error, cant access let variable before initialization
    let x = 8; 
    console.log(x); 
  }
}
outerFunc();
console.log(x); 
//above snippet throws error due to outerFunc()'s x (created using let) 

//14.
let a=10;
{
    let a=20;
    console.log(a); //20
}
console.log(a); //10

//15.
var teacher="himanshu";
function fun(){
  var teacher="priya";
  console.log(teacher);
};
function gun(){
  var student="riya";
  console.log(student);
};
fun(); 
gun();
console.log(teacher);

//16.
var teacher="himanshu";
function fun(){
  var teacher="priya";
  content="prachi"; //this content variable become autoglobal
  console.log(teacher);
};
function gun(){
  var student="riya";
  console.log(student);
};
fun(); 
gun();
console.log(teacher);
console.log(content);

//17.
"use strict";
var teacher="himanshu";
function fun(){
  var teacher="priya";
  content="prachi"; //this content variable become autoglobal
  console.log(teacher);
};
function gun(){
  var student="riya";
  console.log(student);
};
fun(); 
gun();
console.log(teacher);
console.log(content); //throws error that content is not defined

//17.
function fun() {
  var x = 10;
  function gun() {
    var y = 20;
    console.log(x);
    console.log(y);
  }
  gun();
  console.log(x);
  console.log(y);
}
fun();

//18.

{
  function greet(){
    console.log("Hello");
  }
}
greet();

//19.
"use strict";
{
  function greet(){
    console.log("Hello");
  }
  greet();//prints "Hello"
}
greet();//throws error due to strict mode

//19.
"use strict";
{
  var p=9;
  console.log(p); //prints 9
}

console.log(p); //prints 9 even in strict mode
*/

