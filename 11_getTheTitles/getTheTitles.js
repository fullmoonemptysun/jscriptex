const getTheTitles = function(bookInfo) {
    const bookTitles = bookInfo.map(function(book){
        return book.title;
    })

    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
