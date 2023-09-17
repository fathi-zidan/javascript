let year = prompt("Enter a year");
if ((year % 400 == 0) || (year%4==0) && (year%100 !==0)){
    console.log(`${year} is leap`) ;
}else{
    console.log(` ${year} isn't leap`);
}