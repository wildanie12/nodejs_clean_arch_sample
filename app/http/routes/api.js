const router = require('express').Router()

const userController = require('../controllers/user.controller')

router.route('/users')
    .get(userController.index)
    .post(userController.store)

router.route('/users/:userID')
    .get(userController.show)
    .put(userController.update)
    .delete(userController.destroy)

module.exports = router