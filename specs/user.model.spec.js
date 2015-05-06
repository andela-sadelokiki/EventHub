require('../models/user.model');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase');

var user = mongoose.model('user');

describe('Users model test', function() {

  beforeEach(function(done) {
    User = new user({
    firstname : 'olatoyosi',
    lastname : 'famakinde',
    email : 'email',
    password : 'sugar'
    });
     done();
  });

  describe("Should not save if any of the fields are empty", function() {
    it('should throw an error', function(done){
      User.firstname = '';
      User.save(function(error){
        expect(error).not.toBeNull();
        console.log(error);
        done();
      });
    });

  });
})
