const world_population = 7900000000;

function percentageOfWorld1(population){
    let p = (population / world_population )*100;
    // console.log(p.toFixed(2) + "%");
    return p.toFixed(1);
}
let china = percentageOfWorld1(1441000000);
let sweden = percentageOfWorld1(10000000);
let england = percentageOfWorld1(100000000);
console.log("china: " + china );
console.log("sweden: "+ sweden);
console.log("england:" + england);
console.log("\n");
//--------------------------------------------------
const percentageOfWorld2 = (population)=>{
    let p = (population / world_population )*100;
    return p.toFixed(1);
}
// let china2 = percentageOfWorld2(1441000000);
let sweden2 = percentageOfWorld2(180000000);
let england2 = percentageOfWorld2(1000000000);
console.log("china: " + percentageOfWorld2(1441000000));
console.log("sweden: "+ sweden2);
console.log("england:" + england2);
//---------------------------------------------------
// (function percentageOfWorld3(population){
//     let p = (population / world_population )*100;
//     console.log(p.toFixed(2) + "%");
//     return p.toFixed(1);
// })();
