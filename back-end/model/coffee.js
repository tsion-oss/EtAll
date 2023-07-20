const { Schema } = require('mongoose')

const coffeeSchema = new Schema(
    {
        type: {type: String, required: true},
        name: {type: String, required: true},
        image: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true}
        
    },
    {timestamps: true}
)

module.exports = coffeeSchema