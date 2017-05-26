/**
 * Created by brian on 26/05/2017.
 */
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({

    name: { type: "String", required: true },


});

module.exports = mongoose.model('user', userSchema);