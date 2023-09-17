let language = prompt("Enter your Language");
language=language.toLowerCase();
switch(language){
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in a number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("4th place");
        break;
    case "arabic" :
        console.log ("5th 5th most spoken language") ;
        break;
    default :
    console.log("Not in the top 5");
}