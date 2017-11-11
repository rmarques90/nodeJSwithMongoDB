var express = require('express');
var router = express();
var db = require('./db');

//rotas
router.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

router.get('/books', function (req, res) {
    var Books = db.Mongoose.model('books', db.BookSchema, 'books');
    Books.find({}).lean().exec(function(e,docs){
        res.json(docs);
        res.end();
    });
});

router.post('/newBook', function (req, res) {
    var Book = db.Mongoose.model('books', db.BookSchema, 'books');
    var newbook = new Book({ name: req.body.name, author: req.body.author });
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