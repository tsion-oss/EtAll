const express = require('express');
const Router = express.Router();
const controller = require('../controller/coffeeController.js')


Router.get('/', controller.getCoffee)
Router.post('/', controller.createCoffee)
Router.get('/:id', controller.getCoffeeByID)
Router.put('/:id', controller.updateCoffee)
Router.delete('/:id', controller.deleteCoffee)


module.exports = Router