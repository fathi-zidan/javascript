const arr = [3,4,4,3,6,3];
let arr2 = [];
for(let i =0 ; i<arr.length;i++){
    if(arr2.indexOf(arr[i])=== -1){
        arr2.push(arr[i]);
    }
    console.log(arr2);
}