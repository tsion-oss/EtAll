const db = require('../db')
const { Spice } = require('../model')


const getSpice = async (req, res) => {
    try {
        const spices = await Spice.find()
        return res.status(200).json({ spices })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getSpiceByID = async (req, res) => {
    try{
        const { id } = req.params
        const spice = await Spice.findById(id)
        if(!spice) throw Error('Spice not found')
        res.json(spice)
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getSpice,
    getSpiceByID
}