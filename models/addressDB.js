//bookDB,js

var mongoose = require('mongoose');
var credentials = require('../lib/credentials.js');

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 }  } };

console.log(credentials)
mongoose.connect(credentials.mongo.development.connectionString, options);


var dbConnect = mongoose.connection; 
dbConnect.on('error', 
console.error.bind(console, 'Connection Error:')); 


var addressSchema = mongoose.Schema({
   name: String,
   address: String,
   phone: String,
   info: String,
});
var Address =  mongoose.model('Address', addressSchema);


module.exports = Address;
