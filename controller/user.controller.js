var mongoose = require('mongoose');
var User = mongoose.model('user');

exports.createUser = function(req, res){
  User.create(req.body, function(err, user){
    if(err){
      res.send(err)
    }
    res.json(user);
  });
};

exports.findUser = function(req, res){
  User.find(function(err, user){
    if (err){
      return res.send(err)
    }
    res.json(user);
  });
};

exports.deleteUser = function(req, res){
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