const express = require('express')
const Router = express.Router()


const coffeeRouter = require('./coffeeRouter')
const spiceRouter =  require('./spiceblendRouter')
const teffRouter = require('./teff-flourRouter')



Router.use('/coffees', coffeeRouter)
Router.use('/spices', spiceRouter)
Router.use('/teffs', teffRouter)




module.exports = Router