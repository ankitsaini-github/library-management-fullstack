const Book = require('../models/book');

// get all books
exports.getBooks = (req, res, next) => {
  Book.findAll().then(result => {
    // console.log('ALL BOOKS ======= ',result)
    res.send(result);
  }).catch(err => console.log(err));
};

// add book
exports.postBook = (req, res, next) => {
  const bookname = req.body.bookname;
  const bookissue = req.body.bookissue;
  const bookreturn = req.body.bookreturn;
  const returnstatus = req.body.returnstatus;
  Book.create({
    bookname: bookname,
    bookissue: bookissue,
    bookreturn: bookreturn,
    returnstatus: returnstatus,
  }).then(result => {
    console.log(result);
    res.send(result);
  }).catch(err => console.log(err))
};

//payfine
exports.payFine = (req, res, next) =>{
  const id = req.body.id;
  // const fine = req.body.fine;
  Book.findOne({ where: { id: id } }).then(book => {
    book.returnstatus = true;
    book.paidfine = req.body.fine;
    return book.save();
  }).then((result)=>{
    res.send(result);
  }).catch(err => console.log(err))

}