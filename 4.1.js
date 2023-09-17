let num_sibling = prompt("How many sibling do you have?");
num_sibling = parseInt(num_sibling);
if(num_sibling === 1){
    console.log("one sibling!");
}else if(num_sibling > 1){
    console.log(`${num_sibling} siblings!`);
}else{
    console.log('No sibling');
}