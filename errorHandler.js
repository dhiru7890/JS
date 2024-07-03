const errors={
    VALIDATION_ERROR:400,
    NOT_FOUND:404,
    UNAUTHORIZED:401,
    FORBIDDEN:403,
    SERVER_ERROR:500,
}
const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode){
        case errors.VALIDATION_ERROR:
            res.json({
                title:"validation Faild",
                message:err.message,
            });
            break;
        case erroes.NOT_FOUND:
            res.json({
                title:"not found",
                message:err.message,
            });
            break;
        case errors.FORBIDDEN:
            res.json({
                title:"forbidden",
                message:err.message,
            });
            break;
        case errors.UNAUTHORIZED:
            res.json({
                title:"unauthorished",
                message:err.message,
            });
            break;
        case errors.SERVER_ERROR:
            res.json({
                title:"server error",
                message:err.message,
            });
        default:
            break;
    };
}
module.exports = errorHandler;