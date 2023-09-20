const my_country = {
    country: 'Finland',
    capital: 'Helsinki',
    language: ' Finnish',
    population: 6000000,
    neighbours: ['norway', 'russia', 'sweden'],
    describe: function () {
        return `Finland has ${this.population} people, their mother tongue is ${this.language},
        they have ${this.neighbours.length} countries and a capital called ${this.capital}`
    },
    checkIsland: function () {
        return this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}
let x = my_country.describe();
console.log(x);
console.log("\n");
my_country.checkIsland();
console.log(` isIsland : ${my_country.isIsland}`);