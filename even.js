const isEven = function (num) {
  return num % 2 === 0; //parameter = number, returns Boolean value representing if number is even
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

/*console.log(tenIsEven); //returns true
console.log(elevenIsEven); //returns false*/

console.log(isEven(10)); //simplify above code (don't need to define new variables to do something with them)
console.log(isEven(11));