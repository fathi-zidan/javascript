const movies = [
    { id: 1, name: "Movie 1", type:"action" },
    { id: 2, name: "Movie 2",type:"drama" },
    { id: 3, name: "Movie 3",type:"action" },
    { id: 4, name: "Movie 4",type:"action"},
];
function movie_foreach(movies) {
    const array = [];
    movies.forEach(ele => {
        array.push({ id: ele.id, name: ele.name })
    });
    return array;

}
function movie_map(movies) {
    const new_arr =  movies.map(ele => {
        return { id: ele.id, name: ele.name };

    })
    return new_arr;

}

console.log(movie_foreach(movies));
console.log(movie_map(movies))