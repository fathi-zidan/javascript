let num =25;
let user_num = prompt("Enter your guess");
while (user_num != num) {
    if(user_num < 25){
        alert ("Too low!");
    }else if(user_num > 25){
        alert ("Too high!");
    }
    user_num = prompt("Enter your guess");
}
alert(`You guessed it right! The number was ${num}`);