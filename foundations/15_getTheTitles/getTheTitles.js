const getTheTitles = function(array) {
    const titles = array.map((book) => book.title);
    return titles
};

// const books = [
//     {
//         title: 'Book',
//         author: 'Name'
//     },
//     {
//         title: 'Book2',
//         author: 'Name2'
//     }
// ]


console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
