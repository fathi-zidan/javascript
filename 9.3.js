const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
let areEqual = true;

if (food1.length === food2.length) {
  for (let i = 0; i < food1.length; i++) {
    if (food1[i] !== food2[i]) {
      areEqual = false; 
      break; 
    }
  }
} else {
  areEqual = false; 
}

if (areEqual) {
  console.log(areEqual);
} else {
  console.log(areEqual);
}
