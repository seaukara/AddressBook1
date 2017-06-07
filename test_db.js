//test_db.js

//Data Model
var addressDB = require('./models/addressDB.js');


//ADD BOOKS ///////////////////////////////////////////////

new addressDB({
    name: "Kara Manseau",
    address: "1511 E Mercer St, Seattle",
    phone: "503-455-3333",
    info: "home"
}).save();

new addressDB({
    name: "Mary Manseau",
    address: "5230 NW 137th Ave",
    phone: "503-455-3333",
    info: "mom"
}).save();

// FIND BOOKS
addressDB.find({}, function(err, address){
    if (err) console.log(err);
    
    //log all books
    console.log(address);
});