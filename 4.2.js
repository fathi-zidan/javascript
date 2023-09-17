let x = prompt("whats your grade in letter form?");
x = x.toLowerCase();
if (x === "a") {
    console.log("you grade is between 90-100");
}else if(x === "b"){
    console.log ("your grade is between 80 - 89 ");
}else if(x === "c"){
    console.log ("your grade is between 70 - 79 ");
}else if(x === "d"){
    console.log ("your grade is between 65 - 69 ");
}else if(x === "f"){
    console.log ("your grade is between 0 - 64 ");
}else{
    console.log('please enter a valid input');
    alert('please enter a valid input');
}

let y = prompt("whats your grade in number form?");
x = parseInt(y);
if (y>=90 && y<=100 ) {
    console.log("you grade A");
}else if(y>=80 && y<=89){
    console.log ("your grade is between B ");
}else if(y>=70 && y<=79){
    console.log ("your grade is C ");
}else if(y>=65 && y<=69){
    console.log ("your grade is D ");
}else if(y>=0 && y<=64){
    console.log ("your grade is  F ");
}else{
    console.log('please enter a valid input');
    alert('please enter a valid input');
}

