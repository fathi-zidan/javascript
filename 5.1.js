let language = prompt("Enter the language spoken in the country: ");
let isIsland = prompt("Is the country an island? (true/false): ");
let population = Number(prompt("Enter the population of the country: "));
let country = prompt("Enter the name of the country: ");

const sarahLanguage = "English";
const sarahPopulation = 50000000; 
const sarahIsland = false;

if (language === sarahLanguage && population < sarahPopulation && isIsland.toLowerCase() == sarahIsland.toString()) {
    console.log(`You should live in ${country}.`);
} else {
    console.log(`${country} does not meet your criteria.`);
}

