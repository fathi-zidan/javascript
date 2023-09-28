const numbers = [1, -5, 666, 2, 400, 11];
function sort_asending(arr){
   const sorted = arr.sort((a,b)=>{
        return a-b;
    })
    return sorted;
}
function sort_desending(arr){
    const sorted = arr.sort((a,b)=>{
        return b-a ;
    });
    return sorted;
}
console.log('numbers before', numbers); 
console.log("numbers after", sort_asending(numbers)); 
console.log(`numbers after`, sort_desending(numbers));