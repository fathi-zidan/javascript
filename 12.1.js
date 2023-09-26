const library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];
function readable(library) {
    library.forEach(element => {
        if (element.readingStatus === true) {
            console.log(`${element.title} written by ${element.author} : reading status is ${element.readingStatus}`);
        }
    });

}
console.log("The readable books are:");
readable(library);
console.log("\n");

function printall(library) {
    library.forEach(element => {
        console.log(`title: ${element.title}, Author: ${element.author}, readingStatus: ${element.readingStatus}`);
    });
}
console.log("All the Books : \n");
printall(library);