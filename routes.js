var express = require('express');
var router = express();
var db = require('./db');
var Book = db.Mongoose.model('books', db.BookSchema, 'books');

//rotas
router.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

router.get('/books', function (req, res) {
    Book.find({}).lean().exec(function(e,docs){
        res.json(docs);
        res.end();
    });
});

router.post('/newBook', function (req, res) {
    var newbook = new Book(req.body);
    newbook.save(function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json({
            ok: true,
            msg: "Salvo com sucesso"
        });
        res.end();
    });
});



module.exports = router;