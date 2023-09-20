const array = ["Hello", "Good Day", "YourWelcome", "hotdog", "hamburgers"];
const letters = {};

function count(arr) {
    for (const element of arr) {
        const element_lowercase = element.toLowerCase();
        for (const char of element_lowercase) {
            if (letters[char]) {
                letters[char]++;
            } else {
                letters[char] = 1;
            }
        }
    }
    return letters;

}
let x = count(array);
console.log("x: ", x, "\n");