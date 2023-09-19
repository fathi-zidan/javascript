const book1 = {
    title: 'The Lord of the Rings',
    author: 'John Ronald Reuel Tolkien',
    publish_year: 1999
}
const book2 = {
    title: 'The Midnight Library ',
    author: ' Matt Haig',
    publish_year: 2002
}
const bookUtils = {
    getFirstPublished: function (book1, book2) {
        return book1.publish_year < book2.publish_year ? book1.title : book2.title;
    },
    setNewEdition: function (book, edition) {
        book.latestEdition = edition;
    },
    setLanguage: function (book, language) {
        book.language = language;
    },
    setTranslation: function (book, language, translator) {
        book.translation = {
            language: language,
            translator: translator
        }
    },
    setPublisher: function (book, name, location) {
        book.publisher = {
            name: name,
            location: location
        }
    },
    isSamePublisher: function (book1, book2) {
        if (book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location) {
            // console.log("they are identical");
            return true;
        } else {
            // console.log('not same publisher');
            return false;
        }
    }
}
const first_publish = bookUtils.getFirstPublished(book1, book2);
console.log("the first pulished book is : ", first_publish);

const new_edition = bookUtils.setNewEdition(book1, 2023);
console.log("book1 after using the setNewEdition method:\n", book1);

const new_edition2 = bookUtils.setNewEdition(book2, 2021);
console.log("book2 after using the setNewEdition method:\n", book2);

const set_language = bookUtils.setLanguage(book1, "English");
console.log("the language of book1 is :", book1.language);

const set_language2 = bookUtils.setLanguage(book2, "France");
console.log("the language of book2 is :", book2.language);

bookUtils.setTranslation(book1, 'French', 'Louis');
console.log(`${book1.title} has been translated into ${book1.translation.language} by ${book1.translation.translator}`);

bookUtils.setTranslation(book2, 'turkish', 'Fathi');
console.log(`${book2.title} has been translated into ${book2.translation.language} by ${book2.translation.translator}`);

bookUtils.setPublisher(book1, 'Publisher A', 'New York');
bookUtils.setPublisher(book2, 'Publisher A', 'New York');

const samePublisher = bookUtils.isSamePublisher(book1, book2);
console.log(`Do these books have the same publisher? ${samePublisher}`);