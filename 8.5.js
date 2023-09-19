const numbers = {
    one: 1,
    two: 2,
    three: 3
};

function swap(object) {
    const swappedObject = {};
    for (const key in object) {
        swappedObject[object[key]] = key;
    }

    return swappedObject;
}

const swapped = swap(numbers);
console.log(swapped);
