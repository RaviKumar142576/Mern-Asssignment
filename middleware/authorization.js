const jwt = require('../jwt');

function AuthenticationMiddleware(req, res, next){
    console.log("Inside Middleware")
    const { authorization } = req.headers;
    if(!authorization){
        res.send("Go and get the token");
    }else{
    const payload =  jwt.verify(authorization);
    req.userContext = {...payload};
    console.log(payload);
    next();
    }
}

module.exports = AuthorizationMiddleware