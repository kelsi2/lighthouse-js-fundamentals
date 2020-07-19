/*const sayHello = function () { //declaring function in a variable called sayHello
  console.log("Hello, world"); // function sayHello prints Hello world to the console
}
sayHello(); //calling sayHello function 

const sayHello = function (name) { //improving on previous function by adding a value as input, called name
  console.log("Hello, " + name); //concatenate function input name (parameter) to string "Hello, "
}
sayHello("Caliban"); //don't need to rewrite greeting code every time, now can just input name to the function
sayHello("Miranda");
sayHello("Ferdinand");*/

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole("John"); //outputs "Hello, John" to console

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("John"); //returns "Hello, John" to variable and outputs nothing to the console
console.log(greeting); //returns can be printed to console later, same result as calling previous function (sayHelloToConsole)

