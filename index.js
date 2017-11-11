var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var db = require('./db');

var app = express();
//define o wrapper de JSON
app.use(bodyParser.json());
//setar porta da aplicação
app.set('port', process.env.PORT || 3000);

//importar arquivo do banco de dados
app.use(db);

//define as rotas que usarão os links
app.use('/api', routes);

//inicia servidor
http.createServer(app).listen(app.get('port'), function () {
    console.log('Server running in port ' + app.get('port'))
});