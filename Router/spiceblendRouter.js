const Router = require('express').Router()
const controller = require('../controller/spiceblendController')


Router.get('/', controller.getSpice)
Router.get('/:id', controller.getSpiceByID)
Router.post('/', controller.createSpice)
Router.put('/:id', controller.updateSpice)
Router.delete('/:id', controller.deleteSpice)


module.exports = Router