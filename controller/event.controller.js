var mongoose = require('mongoose');
require('../models/event.model');
var Event = mongoose.model('events');

exports.createEvent = function(req, res){
  Event.create(req.body, function(err, events){
    if (err){
      res.send(err)
    }
    res.json(events);
  });
};

exports.getAllEvents = function(req, res){
  Event.find(function(err, events){
    if (err){
      res.send(err)
    }
    res.json(events);
  });
};

exports.getOneEvent = function(req, res) {
  Event.findById(req.params.event_id, function(err, event) {
    if (err){
      res.send(err);
    }
      res.json(event);
  });
};

exports.updateEvent = function(req, res) {
  Event.findById(req.params.event_id, function(err , event) {
    if(err){
      res.send(err);
    }

    event.title = req.body.title;
    event.description = req.body.description;

    event.save(function(err){
      if (err){
        res.send(err);
      }
      res.json({message : 'event updated'});
    });
  });

};

exports.deleteEvent = function(req, res) {
  Event.remove({ _id : req.params.event_id}, function(err, event){
    if(err) {
      res.send(err);
    }
    res.json({ message: ' Event Successfully deleted' });
  });
};


