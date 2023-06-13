const db = require('../db')
const { Teff } = require('../model')


const getTeff = async (req, res) => {
    try {
        const teffs = await Teff.find()
        return res.status(200).json({ teffs })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getTeffByID = async (req, res) => {
    try{
        const { id } = req.params
        const teff = await Teff.findById(id)
        if(!teff) throw Error('Coffee not found')
        res.json(teff)
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getTeff,
    getTeffByID
}