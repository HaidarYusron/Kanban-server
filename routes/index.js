const router = require("express").Router()
const userController = require('../controllers/userController')
//const {User} = require('../models')
const {authentication,authorization} = require('../middlewares/auth')
const taskController = require('../controllers/taskController')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/loginGoogle', userController.googleLogin)
router.use(authentication)

router.get('/tasks/' , taskController.getTask)
router.post('/tasks/', taskController.postTask)

router.put('/tasks/:id', authorization, taskController.putTask)
router.get('/tasks/:id' , authorization, taskController.findTaskbyId)
router.delete('/tasks/:id', authorization, taskController.deleteTask)
router.patch('/tasks/:id', authorization, taskController.patchCategory)

module.exports = router