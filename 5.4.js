let color = prompt("Enter a color");
color = color.toLowerCase();
switch(color){
    case "yellow":
    case "pink":
    case "orange":
        console.log("light colors");
        break;
    case "blue":
    case "purple":
    case "brown":
        console.log("Dark colors");
        break;    
    default:
        console.log("Unknown Color");
}