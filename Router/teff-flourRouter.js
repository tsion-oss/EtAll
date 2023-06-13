const Router = require('express').Router()
const controller = require('../controller/teff-flourController')


Router.get('/', controller.getTeff)
Router.get('/:id', controller.getTeffByID)


module.exports = Router