module.exports = function(app) {

  var userCtrl = require('./controller/user.controller');

  app.post('/signUp', userCtrl.createUser);
  app.get('/getAllUsers', userCtrl.getAllUser);
  app.delete('/deleteUser', userCtrl.deleteUser);

}