const Months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
const Days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

function getdate (){
const My_Date = new Date('2023-09-20T07:47:08.738Z');
const day = My_Date.getDay();
const month = My_Date.getMonth();
const year = My_Date.getFullYear();
const date = My_Date.getDate();
return `Today is ${Days[day]} the ${date} of ${Months[month]} ${year}`
}
let x = getdate();
console.log(x);

