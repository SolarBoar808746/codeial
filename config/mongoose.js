const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development', {useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'Error connecting to mongodb'));

db.once('open', function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;