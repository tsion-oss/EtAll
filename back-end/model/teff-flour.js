const { Schema } = require('mongoose')

const teffSchema = new Schema(
    {
        type: {type: String, required: true},
        name: {type: String, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String, required: true},
        productInfo: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = teffSchema