const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) { //for loop
  console.log(packingList[i]);
}

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) { //while loop (same result as for loop but uses extra lines)
  console.log(packingList[i]);
  i++;
}