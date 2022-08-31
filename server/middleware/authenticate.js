
module.exports = async(req, res, next ) =>{
    console.log(req.session.authenticated);
    try {
        if(req.session.authenticated ){
            await next()
        }else{
            res.sendStatus(401)
        }
    } catch (error) {
        console.log(error)
    }

};
