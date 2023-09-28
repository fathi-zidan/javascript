const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];
function names(arr){
    const names_arr =[];
    arr.forEach(element => {
        names_arr.push(element.name);
    });
    return names_arr;
}    
function birthday(arr){
    
   const birthday_before_1990 =  arr.filter((element)=>{
    const birth_Year = new Date(element.birthday).getFullYear();
        if(birth_Year<1990){
            return element;
        }
    });
    return birthday_before_1990;
}

console.log("names:", names(data));
console.log('birthday:', birthday(data))