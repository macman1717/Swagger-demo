var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/post-helloWorld', function(req, res, next) {
  res.send('you posted something!');
});

router.get('/helloWorld', function(req, res, next) {
  /*

   */
  res.send('Hello World!');
});

router.delete('/helloWorld/:id', function(req, res, next) {
  /*
  #swagger.summary='this is a summary'
  #swagger.description='this is a description'
  #swagger.parameters['id'] = { description: 'Some description...'}
  #swagger.responses[404] = { description: 'Not Found' }
  #swagger.responses[502] = { description: 'Bad Gateway' }
   */

  res.send('Deleting resource associated with id: ' + req.params.id);
});

module.exports = router;
