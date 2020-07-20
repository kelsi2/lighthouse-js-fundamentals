/*function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);

console.log(2 + 10 - 19 + 4 - 90 + 1);
console.log(-20 + -19 - (-10) - (-1) + 24);
console.log((10 / 5) * 4 - 20);
console.log(4096 % 12);

console.log(43 > 47);
console.log(12 == 17);
console.log(3 <= 3);
console.log(1 != 0);

console.log((1.5 + 5 - 2) * 10 - 3);

console.log("Hello" + 5 * 10);

var celsius = 12;
var fahrenheit = (celsius * 1.8 + 32); /* convert celsius to fahrenheit here

console.log(fahrenheit);

var my_string = 'n';
var ASCII_value = my_string.charCodeAt(0);
console.log(ASCII_value);

var my_string = "Elephantine";
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}

var joke = ("Why couldn't the shoes go out and play? \n They were all \"tied\" up!");
console.log(joke);

var haiku = 'Blowing from the west' + '\nFallen leaves gather' + '\nIn the east.'
console.log(haiku);

console.log("Hello" % 10);
console.log(5("Hello"));

console.log("3" > 1);
console.log(3 != "3");
console.log(true >= 0);
console.log(1 !== false);
console.log("false" === 0);
console.log(3 === 3);

var thingOne = 'red';
var thingTwo = 'blue';
console.log(thingOne + ' ' + thingTwo);

var fullName = 'Kelsi Proulx';

var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15
var total = (bill + tip);
console.log('$' + total);

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';
var madLib = 'The Intro to JavaScript course is ' + adjective1 + '. James and Julia are so ' + adjective2 + '. I cannot wait to work through the rest of this ' + adjective3 + ' content!';
console.log(madLib);

var firstName = 'Kelsi';
var interest = 'coding';
var hobby = 'read';
var awesomeMessage = 'Hi, my name is ' + firstName + '. I love ' + interest + '. In my spare time, I like to ' + hobby + '.'
console.log(awesomeMessage);*/

//PART 2 (conditionals)

/*var money = 100.50;
var price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.")
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!")
} else {
  console.log("That's not enough, you still owe me money.")
}*/

/*var runner = "Kendyll";
var position = 2;
var medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2); {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.")

var number = 2;
if (0 === number % 2) {
  console.log("even");
} else {
  console.log("odd");
}

let musicians = 1;

if (musicians <= 0) {
  console.log("not a group");
} else if(musicians === 1) {
  console.log("solo");
} else if(musicians === 2) {
  console.log("duet");
} else if(musicians === 3) {
  console.log("trio");
} else if (musicians === 4) {
  console.log("quartet");
} else {
  console.log("this is a large group");
}

var room = "dining room";
var weapon = "";
var suspect = "Mr. Parkes";
var solved = false;
if (room === "dining room" && suspect === "Mr. Parkes") {
  weapon = "knife";
  solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
  weapon = "pool stick";
  solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
  weapon = "trophy";
  solved = true;
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
  weapon = "poison"
  solved = true;
}
if (solved === true) {
  console.log(suspect + ' did it in the ' + room + ' with the ' + weapon + "!");
}

var balance = -325.00;
var checkBalance = true;
var isActive = true;

if (checkBalance === true) {
  if (isActive === true && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".")
  } else if (isActive === true && balance === 0) {
    console.log("Your account is empty.");
  } else if (isActive === true && balance < 0) {
    console.log("Your balance is negative. Please contact bank.")
  } else if (isActive === false) {
    console.log("Your account is no longer active.");
  } else {
    console.log("Thank you. Have a nice day!");
  }
}

let flavor = "vanilla";
let vessel = "cone";
let toppings = "sprinkles";

if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "peanuts" || toppings === "sprinkles")) {
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".")
  }

var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve = 8.47;

var size = "NA";

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
  size = "S";
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
  size = "M"
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
  size = "L";
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
  size = "XL";
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
  size = "2XL";
} else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
  size = "3XL";
} else {
  size = "NA";
}

console.log(size);

var eatsPlants = true;
var eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");
console.log(category);

var education = 'a Professional degree';
var salary = 0;

switch (education) {
  case 'no high school diploma':
    salary = 25636;
    break;
  case 'a high school diploma':
    salary = 35256;
    break;
  case 'an Associate\'s degree':
    salary = 41496;
    break;
  case 'a Bachelor\'s degree':
    salary = 59124;
    break;
  case 'a Master\'s degree':
    salary = 69732;
    break;
  case 'a Professional degree':
    salary = 89960;
    break;
  case 'a Doctoral degree':
    salary = 84396;
    break;
}
console.log('In 2015, a person with ' + education + ' earned an average of $' + salary.toLocaleString("en-US") + '/year.');

var x = 1;
while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else if (x % 5 === 0) {
    console.log("James");
  } else if (x % 3 === 0) {
    console.log("Julia");
  } else {
    console.log(x);
  }
  x = x + 1;
}

var num = 99;
while (num >= 1) {
  if (num === 1) {
    console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
  } else if (num === 2) {
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottle of juice on the wall!")
  } else {
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num -1) + " bottles of juice on the wall!")
  }
  num = num - 1;
}

x = 60;
while (x >= 0) {
  if (x === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (x === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (x === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (x === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (x === 6) {
    console.log("Main engine start");
  } else if (x === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
    console.log("T-" + x + " seconds");
  }
  x = x - 1;
}

for (let x = 9; x >= 1; x--) {
  console.log("hello " + x);
};

for (let x = 5; x < 10; x++) {
  console.log(x);
}

for (var k = 0; k < 200; k++) {
  console.log(k);
}

let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}
console.log(solution);

let row = 0;
let seat = 0;

for (row = 0; row <= 25; row++) {
  for (seat = 0; seat <= 99; seat++) {
    console.log(row+ "-" +seat);
  }
}

const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is ', total);

function laugh() {
  return "hahahahahahahahahaha!";
}
console.log(laugh());

var sound = "";
function laugh(num) {
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
}
console.log(laugh(3));

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length) {
  var triangle = "";
  var lineNumber = 1;
  for (lineNumber = 1; lineNumber <= length; lineNumber++) {
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}
console.log(buildTriangle(10));

var sound = "";

var laugh = function (num) {
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
}
console.log(laugh(10));

var cry = function myFunction() {
  var sound = "boohoo!";
  return sound;
};
console.log(cry());

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function (num) { //inline function expression using laugh() function above. returns "I am happy, haha"
  var sound = "";
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
});

let udaciFamily = ["Julia", "James", "Kelsi"];
console.log(udaciFamily);

let crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0] = 2.57;
prices[2] = 50.77;
prices[6] = 347.88;
console.log(prices);

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(arrayTeam) {
  if (arrayTeam.length >= 7)
    return true;
else
  return false;
}
console.log(hasEnoughPlayers(team));

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor);
crew.push(sister);
crew.push(shepherd);

console.log(crew);

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function (item, index) {
  if (item % 3 === 0) {
    test[index] = test[index] + 100;
  }
});
console.log(test);

var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
let totals = bills.map(function (element) {
  element *= 1.15;
  element = element.toFixed(2);
  element = Number(element);

  return element;
});
console.log(totals);

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var row = 0; row < numbers.length; row++) {
   for (var column = 0; column < numbers[row].length; column++) {
     if (numbers[row][column] % 2 === 0) {
       numbers[row][column] = "even";
     } else {
       numbers[row][column] = "odd";
     }
   }
}
console.log(numbers);

const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I"];

console.log("My favourite " + director + " film is " + films[1]);

const oddNumbers = [1, 3, 5, 7, 9];
const randomStuff = [1.15, "bicycle", true]; //bad array, best to keep the same data types and related values together

var umbrella = {
  color: "pink",
  isOpen: true,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  close: function () {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }
  }
};

var breakfast = {
  name: "The Lumberjack",
  price: "$9.95",
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
};
console.log(breakfast);

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function() {
    return ("Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.")
  }
};

console.log(savingsAccount.printAccountSummary());

var facebookProfile = {
  name: "Kelsi",
  friends: 56,
  messages: ["lol", "coding FTW", "nerding out"],
  postMessage: function(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends = facebookProfile.friends + 1;
  },
  removeFriend: function () {
    if (facebookProfile.friends > 0)
      facebookProfile.friends = facebookProfile.friends - 1;
  },
};*/

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
donuts.forEach(donutSummaries);

function donutSummaries(donuts.type, donuts.cost) {
  console.log(donuts.type + " cost $" + donuts.cost + " each")
}