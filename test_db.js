//test_db.js

//Data Model
var addressDB = require('./models/addressDB.js');




new addressDB({
    name: "Kara M",
    address: "1511 SE Grover St, Seattle",
    phone: "503-455-3333",
    info: "home"
}).save();

new addressDB({
    name: "Sally May",
    address: "5230 NW Apple Ave",
    phone: "503-455-3333",
    info: "mom"
}).save();

// FIND BOOKS
addressDB.find({}, function(err, address){
    if (err) console.log(err);
    
    //log all books
    console.log(address);
});
