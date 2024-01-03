const ErrorHandler = require("../utils/ErrorHandler")

module.exports = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error";
}

//WRONG MONGODB ERROR
if(err.name === "CastError"){
    const message = `Resources not found with this id... Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
}

//DUPLICATE KEY ERROR
if(err.code === 1100){
    const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400)
}

//WRONG JWT ERROR
if(err.name === "JsonWebTokenError"){
    const message = `Your url is invalid please try again in 5 minutes`;
    err = new ErrorHandler(message, 400)
}

//EXPIRED TOKEN
if(err.name === "TokenExpiredError") {
    const message = `Your url is expires please try again later`;
    err = new ErrorHndler(message, 400);
}

res.status(err.statusCode).json({
    sucess: false,
    message: err.message
})