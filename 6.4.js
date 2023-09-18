const totalPopulation = 36789;
const population = [10000, 200, 400, 500];

function populationPercentages(population) {
    let percentages = [];
    for (let i = 0; i < population.length; i++) {
        percentages[i] = (population[i] / totalPopulation) * 100;
        console.log(i,percentages[i]);
    }
    return percentages;
}

console.log(`The percentage of the people in each country is ${populationPercentages(population)}`);
