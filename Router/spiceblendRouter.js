const Router = require('express').Router()
const controller = require('../controller/spiceblendController')


Router.get('/', controller.getSpice)
Router.get('/:id', controller.getSpiceByID)


module.exports = Router