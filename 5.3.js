let password = prompt("Enter a password");
// if (password === null) {
//     alert('You did not enter a password'); 
// }else if(password.length > 7){
//     console.log("Strong!");
// }else if(password.length<7){
//     console.log ("Weak!") ;     
// }

// password.length>7 ? console.log("Strong!") : console.log ("Weak!") ; 

password.length>7 && /[A-Z]/.test(password) ? console.log(" very Strong!") 
: password.length>7 ? console.log ("Strong!") : console.log ("Weak!") ;