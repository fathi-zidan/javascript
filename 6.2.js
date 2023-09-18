let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people); // [ 'Mary', 'Devon', 'James' ]
people.pop();
console.log(people); // ['Mary','Devon']
people.unshift('Mate');
console.log(people)  ;//['Mate','Mary','Devon'];
people.push('fathi');
console.log(people);//[ 'Mate', 'Mary', 'Devon', 'fathi' ];
let copy_people = people.slice(1);
console.log(copy_people);// [ 'Mary', 'Devon', 'fathi' ]
let marry_index = people.indexOf('Mary');
console.log(`marry index is ${marry_index}`);
let foo_index = people.indexOf('foo');
console.log(`foo index is ${foo_index}`); //it will print -1 bcz there is no foo
people = ["Greg", "Mary", "Devon", "James"];
console.log(people)  ;




