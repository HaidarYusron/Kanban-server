const { verify } = require('../helper/jwt')
const { User,Task } = require('../models')

function authentication (req,res,next){
    const { access_token } = req.headers
    const decoded = verify(access_token)

    if(access_token){
        User.findOne({
            where: {email: decoded.email}
        })
        .then((user)=>{
            if(user){
                
                req.loggedUser = {
                    id: decoded.id,
                    email: decoded.email
                }
                next() 
            } else {
                next({message: "Please login first!"})
            }
            
        })
        .catch((err)=>{
            next({message: "Invalid Token Access!"})
        })
    } else {
        next({message: "Internal Server Error!"})
    }
}

function authorization(req,res,next){
    let id = +req.params.id
    //console.log(id,'masuk author');
    Task.findByPk(id)
        .then((data)=>{
            //console.log(data);
            if(data){
                if(req.loggedUser.id === data.UserId){
                    next()
                } else {
                    next("Unauthorized")
                }
            } else {
                next("Data not found")
            }
        })
        .catch((err)=>{
            next(err)
        })
}

module.exports = {authentication,authorization}
