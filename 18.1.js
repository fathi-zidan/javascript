const h1 = document.querySelector("h1");
console.log("h1: ",h1);

const p = document.querySelector("p");
console.log("p:",p) ;

const a = document.querySelector("a");
console.log("a:",a);

const img = document.querySelector('img');
console.log("image",img);

const div1 = document.querySelector('.x');
console.log(".x :",div1 );

const div2 = document.getElementById('y');
console.log("#y :",div2 )

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach((input,i) => {
    console.log("input",i + "=",input);
});

const inputs2 = document.getElementsByTagName('input');
console.log(inputs2);
const arr = Array.from(inputs2);

arr.forEach((input,i) => {
    console.log("input",i + "=",input);
});





