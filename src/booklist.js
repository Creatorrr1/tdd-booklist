const { ConsoleReporter } = require("jasmine")

class BookLibrary {
  constructor() {
    this.bookList = []
  }

  add(book) {
    this.bookList.push(book)
    console.log(this.bookList)
    return this.bookList
  }

  remove(book) {
    for (let i = 0; i < this.bookList.length; i += 1) {
      if (this.bookList[i].bookName === book.bookName) {
        this.bookList.splice(i, 1)
        return this.bookList
      }
    } return "book does not exist"
  }

  changeCategory(changeGenreTo, id) {
    for (let i = 0; i < this.bookList.length; i += 1) {
    // #1
    //     if (this.bookList[i].bookName === book.bookName) {
    //         this.bookList[i].genre = changeGenreTo
    //         // console.log(this.bookList[i].genre)
    //         // return this.bookList[i].genre
    //         return changeGenreTo && this.bookList[i]
    //    }

    // #2
        const targetBook = this.bookList[i]
        console.log(targetBook)
        if (id === targetBook.id) {
            targetBook.genre = changeGenreTo
            console.log(targetBook)
            return targetBook
        }
        const errorMessage ="This book cannot be found in the Library"
        console.log(errorMessage)
        return errorMessage
    }
  }
}

module.exports = BookLibrary
