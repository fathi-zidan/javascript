const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}
function getCandy(candyStore, id) {
    const candy = candyStore.candies;
    for (let i = 0; i < candy.length; i++) {
        if (candy[i].id === id) {
            return candy[i];
        }
    }
}
function getPrice(candyStore, id) {
    const candy = candyStore.candies
    for (let i = 0; i < candy.length; i++) {
        if (candy[i].id === id) {
            return candy[i].price;
        }
    }
}
function addCandy(candyStore, id, name, price) {
    new_candy = {
        name: name,
        id: id,
        price: price,
        amount: 1
    }
    candyStore.candies.push(new_candy);
}
function buy(candyStore, id) {
    const candy = candyStore.candies;
    for (let i = 0; i < candy.length; i++) {
        if (candy[i].id === id) {
            candy[i].amount--;
            candyStore.cashRegister += candy[i].price;
        }
    }
}

const found = getCandy(candyStore, '5hd7y');
if (found) {
    console.log("Found candy : ", found);
} else {
    console.log('Candy not Found')
}
console.log(`The Price of the Candy is ${getPrice(candyStore, '5hd7y')}`);

addCandy(candyStore, '6h89', 'choco', 10);
buy(candyStore, '6h89');
console.log(candyStore.candies);
console.log(candyStore.cashRegister);
