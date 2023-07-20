const Router = require('express').Router()
const controller = require('../controller/teff-flourController')


Router.get('/', controller.getTeff)
Router.get('/:id', controller.getTeffByID)
Router.post('/', controller.createTeff)
Router.put('/:id', controller.updateTeff)
Router.delete('/:id', controller.deleteTeff)


module.exports = Router