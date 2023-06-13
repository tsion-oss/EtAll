const mongoose = require('mongoose')
const coffeeSchema = require('./coffee')
const spiceSchema = require('./spiceblend')
const teffSchema = require('./teff-flour')

const Coffee = mongoose.model('Coffee', coffeeSchema)
const Spice = mongoose.model('Spice', spiceSchema)
const Teff = mongoose.model('Teff', teffSchema)

module.exports = {
    Coffee,
    Spice,
    Teff
}