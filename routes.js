module.exports =function(app){
  var controller = require('./controller/controller');

  app.post('/createnew', controller.creater);

  app.get('/viewuser', controller.finder);
  
  app.delete('/deleteuser', controller.remover);
}