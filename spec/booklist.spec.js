const BookLibrary = require("../src/booklist.js");
const Book = require("../src/book.js");

// const BookLibrary = require('../src/booklist')
// const Book = require('../src/book')

describe("Basket", () => {
  it("Can add one book into the list", () => {
    // setup
    const bookLibrary = new BookLibrary();
    const book = new Book("Shakespeare", "Macbeth", "Drama");
    // execute
    const expectedList = [book];
    const newBookLibrary = bookLibrary.add(book);
    // verify
    expect(newBookLibrary).toEqual(expectedList);
  });

  it("Can remove one book into the list", () => {
    // setup
    const bookLibrary = new BookLibrary();
    const book = new Book("Shakespeare", "Macbeth", "Drama");
    // execute
    const expectedList = [];
    const newBookLibrary = bookLibrary.add(book);
    bookLibrary.remove(book)
    // verify
    expect(newBookLibrary).toEqual(expectedList);
  });

  it("Can return message if book does not exist", () => {
    // setup
    const bookLibrary = new BookLibrary();
    const book = new Book("Shakespeare", "Macbeth", "Drama");
    const book2 = new Book("hello", "hi", "hey");

    // execute
    const expectedList = [book];
    const newBookLibrary = bookLibrary.add(book);
    const doNotExist = bookLibrary.remove(book2)
    result = "book does not exist"
    // verify
    expect(newBookLibrary).toEqual(expectedList);
    expect(result).toEqual(doNotExist);

  });

  it("Can change the genre of the book", () => {
    // setup
    const bookLibrary = new BookLibrary();
    const book = new Book("Shakespeare", "Macbeth", "Drama");
    // execute
    const expectedList = [];
    const newBookLibrary = bookLibrary.add(book);
    const genreChange = bookLibrary.changeCategory(book, "Thriller")
    result = "Thriller"
    // verify
    expect(newBookLibrary).toEqual(expectedList);
    expect(result).toEqual(genreChange)
  });


});
