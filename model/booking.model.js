var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

firstName: String,

lastName : String,

emailId : String,

gender : String,

from : Date,

to : Date,

numberOfTickets : Number,

age : Number

});

module.exports = mongoose.model('Consumer', userSchema);