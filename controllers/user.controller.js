/**
 * Created by brian on 26/05/2017.
 */
var user = require('../models/user.model');
var mongoose = require('mongoose');


module.exports = {

    findAll: function (req,res) {

        user.find(function (err, users) {
            if (err)
                res.send(err);
            else
            //res.json(users);
            res.render('user', users);
        })
    }


};
