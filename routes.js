module.exports = function(app) {

  var userCtrl = require('./controller/user.controller');

  app.post('/signUp', userCtrl.createUser);
  app.get('/viewUser', userCtrl.findUser);
  app.delete('/deleteUser', userCtrl.deleteUser);

}