const book = {
    title: 'The Lord of the Rings',
    author: 'John Ronald Reuel Tolkien',
    publish_year: 1999,
    book_color: 'white'
}
function books(x) {
    return `Title:${book.title}, Author:${book.author}, Publish Year:${book.publish_year} , color: ${book.book_color}`;
}
console.log("Book:\n", books(book));