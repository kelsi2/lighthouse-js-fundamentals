/*const sayHello = function () { //declaring function in a variable called sayHello
  console.log("Hello, world"); // function sayHello prints Hello world to the console
}
sayHello(); //calling sayHello function */

const sayHello = function (name) { //improving on previous function by adding a value as input, called name
  console.log("Hello, " + name); //concatenate function input name (parameter) to string "Hello, "
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");