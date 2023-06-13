const { Schema } = require('mongoose')

const spiceSchema = new Schema(
    {
        type: {type: String, required: true},
        name: {type: String, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        ingredient: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = spiceSchema