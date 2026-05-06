//this simply means that variable and functions decleartions are moved to the top to thier respective scope
console.log(a);
// console.log(b);

var a = 10; //undefined value will print
// let b = 10; // reference error will print

//Because for var => vai hoisting a is initialized to undefined but not for other variable declaration keywords 
// now practice question on hoisting

sayHi();

function sayHi() {
  console.log("Hello");
}

sayHi2();

var sayH2 = function() {
  console.log("Hello 2");
};