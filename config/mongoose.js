const mongoose = require('mongoose');





mongoose.connect("mongodb+srv://rahul:rahul001@cluster0.uzoqy7q.mongodb.net/habit_tracker");

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;