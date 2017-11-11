var mongoose = require('mongoose');

//definir config do BD
var url = 'localhost';
var db = 'Library';

//abrir conexão com o BD
mongoose.connect('mongodb://'+url+'/'+db,{useMongoClient: true}, function (err) {
    if (err) {
        console.log('Falha na conexão BD - ' + err);
    } else {
        console.log('Conexão BD: OK');
    }
});

//define as collections do MongoDB
var bookSchema = new mongoose.Schema({
    name: String,
    author: String
}, {collection: 'Book'});

module.exports = {
    Mongoose: mongoose,
    BookSchema: bookSchema
};

