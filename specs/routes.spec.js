var mongoose = require('mongoose');
var express = require('express');
var supertest = require('supertest');
var server = require('../server');
var user = mongoose.model('user');
var newUser;

describe('tests for routes', function() {
  beforeEach(function(done) {
    newUser = new user({firstname : 'toyosi',
        lastname : 'fam',
        email : 'me@gahoo.com',
        password : 'sugar'});

     newUser.save(function(err){
        if(err) console.log(err);
      });
      done();
});
 afterEach(function(done) {
    newUser.remove(function(err){
      if(err) {
        console.log(err);
      }
    });
    done();
  });

it('should add a new user to the database', function(done) {

supertest(server).post('/signUp')
    .send({
    firstname : 'toyosi',
    lastname : 'fam',
    email : 'me@gahoo.com',
    password : 'sugar'
  })
  .set('Accept', 'application/json')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if(err) {
        console.log(err);
    }
    else{  
    expect(res.body).toEqual(jasmine.objectContaining(res));
    }
    done();
  });

  });
});

