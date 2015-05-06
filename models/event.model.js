var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  title: {
    type: String,
    required: 'Please Enter the event title'
  },
  description: {
    type: String,
    required: 'Please enter a brief description'
  },
  startdate: {
    type: Date,
    required: 'Please enter the date'
  },
  enddate: {
    type: Date,
    required: 'Please enter the end date'
  },
  categories: {
    type: String,
    required: 'Please enter the category'
  },
  userId: {
    type: Schema.ObjectId, 
    ref: 'user'
  },
  joinedUsers: [{
    type: Schema.ObjectId,
    ref: 'user'
  }]
  
});

mongoose.model('events', eventSchema);