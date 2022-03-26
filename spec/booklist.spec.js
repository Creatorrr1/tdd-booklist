const BookLibrary = require("../src/booklist.js");
const Book = require("../src/book.js");

// const BookLibrary = require('../src/booklist')
// const Book = require('../src/book')

describe("Basket", () => {
  it("Can add one book into the list", () => {
    // setup
    const bookLibrary = new BookLibrary();
    const book = new Book("Shakespeare", "Macbeth", "Drama",1);
    // execute
    const expectedList = [book];
    const newBookLibrary = bookLibrary.add(book);
    // verify
    expect(newBookLibrary).toEqual(expectedList);
  });

  it("Can remove one book into the list", () => {
    // setup
    const bookLibrary = new BookLibrary();
    const book = new Book("Shakespeare", "Macbeth", "Drama",1);
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
    const book = new Book("Shakespeare", "Macbeth", "Drama",1);
    const book2 = new Book("hello", "hi", "hey",2);

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
    const book = new Book("Shakespeare", "Macbeth", "Drama",1);
    const updatedBook = new Book("Shakespeare", "Macbeth", "Thriller",1);
    // execute
    const expected = updatedBook
    bookLibrary.add(book);
    const genreChange = bookLibrary.changeCategory("Thriller",1)
    // verify
    expect(expected).toEqual(genreChange)
  });

  it("Can change the genre of the book", () => {
    // setup
    const bookLibrary = new BookLibrary();
    const book = new Book("Shakespeare", "Macbeth", "Drama",1);
    // execute
    bookLibrary.add(book);
    const genreChange = bookLibrary.changeCategory("Thriller",3)
    result = "This book cannot be found in the Library"
    // verify
    expect(result).toEqual(genreChange)
  });


});
