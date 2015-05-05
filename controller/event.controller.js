
var Event = mongoose.model('events');

exports.createevent = function(req, res){
  Event.create(req body, function(err, events){
    if (err){
      res.send(err, events)
    }
    res.json();
  });

};

