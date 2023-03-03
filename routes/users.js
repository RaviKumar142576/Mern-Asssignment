var express = require('express');
var router = express.Router();

//GET,PUT,POST,DELETE,PATCH

/* GET users listing. */

//localhost:3000/users/ "user.view"
router.get('/', (req, res, next)=> {

  console.log("Query Parameter", req.query)  

  res.send('respond with a resource');
});

//localhost:3000/users/:id "user.view"
router.get('/:id', (req, res, next)=> {
  // console.log("Path Parameter", req.userContext)
  console.log("Headers ", req.headers)
  // console.log("Body ", req.body)
  res.send('user address');
});

//localhost:3000/users/ "user.edit"
router.post('/', (req, res, next)=> {
  console.log("userContext ", req.userContext)
  res.send(req.body);
});

module.exports = router;
