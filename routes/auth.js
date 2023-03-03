const express = require('express');
const router = express.Router();
const tokenService = require('../jwt');

// localhost:3000/auth/login
// router.get('/login', (req, res)=>{
//    const permissions = ['user.view']
//    const token = tokenService.generateToken({ user:"xyz", id:200, permissions});
//    res.send({token});

// });
router.get('/login', (req, res)=>{
   const permissions = ['user.edit']
   const token = tokenService.generateToken({ user:"xyz", id:200, permissions});
   res.send({token});
});


module.exports = router;