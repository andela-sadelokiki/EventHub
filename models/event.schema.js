var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  title: String,
  description: String,
  startdate: Date,
  enddate: Date,
  time: Number
});

mongoose.model('events', eventSchema);