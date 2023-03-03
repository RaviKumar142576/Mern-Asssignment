const jwt = require('../jwt');

function AuthorizationMiddleware(req, res, next){
    console.log("Inside Middleware")
    const { authorization } = req.headers;
    const { permissions } = req.headers;
    if(!permissions == ['user.edit']){
        res.send("You dont have Permission");
    }else{
    res.send("Hello Admin");
    next();
    }
}

module.exports = AuthorizationMiddleware