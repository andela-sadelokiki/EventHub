
var Event = mongoose.model('events');

exports.createevent = function(req, res){
  Event.create(req body, function(err, events){
    if (err){
      res.send(err)
    }
    res.json(events);
  });
};

exports.getevents = function(req, res){
  Event.find(function(err, events){
    if (err){
      res.send(err)
    }
    res.json(events);
  });
};

exports.deleteevents = function(req, res) {
  Event.remove({
    _id : req.params.user_id
  },
    function(err, events){
    if(err) {
      res.send(err);
    }
    res.json(events);
  });
};


