const {Task} = require('../models')
const {User} = require('../models')
class Controller {

    static getTask(req,res,next){
        
        Task.findAll({ include: User })
            .then((task)=>{
                // console.log(task);
                res.status(200).json(task)
            })
            .catch((err)=>{
                next(err)
            })
    }

    static postTask(req,res,next){
        
        let input = {
            title: req.body.title,
            category: "backlog",
            UserId: req.loggedUser.id,
            description: req.body.description 
        }
        Task.create(input)
            .then((data)=>{
                res.status(201).json(data)
            })
            .catch((err)=>{
                next(err)
            })
    }

    static deleteTask(req,res,next){
        let id = +req.params.id
        Task.destroy({where:{id}})
            .then(()=>{
                res.status(200).json({msg:'Succesfully delete'})
            })
            .catch((err)=>{
                next(err)
            })
    }

    static putTask(req,res,next){
        let update = {
            title: req.body.title,
            description: req.body.description
        }
        
        let id = +req.params.id

        Task.update(update,{where: {id}, returning: true})
            .then((data)=>{
                res.status(200).json(data[1])
            })
            .catch((err)=>{
                next(err)
            })

    }

    static patchCategory(req,res,next){
        
        let category = req.body.category
        let id = +req.params.id

        Task.update({category},{where: {id}, returning: true})
        .then((data)=>{
            res.status(200).json(data[1])
        })
        .catch((err)=>{
            next(err)
        })
    }

    static findTaskbyId(req,res,next){
        let id = +req.params.id

        Task.findByPk(id)
            .then((task)=>{
                res.status(200).json(task)
            })
            .catch((err)=>{
               next(err)
            })
    }

}

module.exports = Controller