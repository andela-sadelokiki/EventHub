var mongoose = require('mongoose');
require('../models/user.model');
var User = mongoose.model('user');

exports.creater = function(req, res){
  console.log(req.body)
  User.create(req.body, function(err, user){
    if(err){
      res.send(err)
    }
    res.json(user);
  });
};

exports.finder = function(req, res){
  User.find(function(err, user){
    if (err){
      return res.send(err)
    }
    res.json(user);
  });
};

exports.remover = function(req, res){
  User.remove({
       _id : req.params.user_id
      },
    function(err, user){
      if (err){
        res.send(err)
      }
      res.json(user);
  });
};