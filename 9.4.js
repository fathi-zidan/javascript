const steps = prompt("Enter a number");
let str = '';

for (let x = 1; x <= steps; x++) { //row
  for (let y = 1; y <= x; y++) { //column
    str += '#';
  }
  if (x < steps) {
    str += '\n';
  }
}
console.log(str);
