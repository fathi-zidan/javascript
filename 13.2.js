const foods = ["falafel", "sabich", "hummus","pizza with extra pineapple"];
const sorted1 = foods.sort();
console.log(sorted1); 
const sorted2 = foods.sort((a, b) => (a > b ? -1 : 1));
console.log(sorted2);
const sorted2_2 = foods.sort().reverse();
console.log("sorted2_2: ", sorted2_2 ); 

const words = [
    "apple",
    "supercalifragilisticexpialidocious",
    "hi",
    "zoo"
  ];
  words.sort((a, b) => b.length - a.length);
  console.log(words);
  