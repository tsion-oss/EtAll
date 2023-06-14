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


const createTeff = async (req, res) => {
    try{
        const teff = await new Teff(req.body)
        await teff.save()
        return res.status(201).json({teff})
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

const updateTeff = async (req, res) => {
    try{
        let { id } = req.params
        let teff = await Teff.findByIdAndUpdate(id, res.body, { new: true })
        if (teff) {
            return res.status(200).json(teff)
        }
         throw new Error('Flight not found')
    } catch (error){
       return res.status(500).send(error.message)
    }
}

const deleteTeff = async (req, res) => {
    try{
        const { id } = req.params
        const deleted = await Teff.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Teff deleted')
        }
        throw new Error('Teff not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getTeff,
    getTeffByID,
    createTeff,
    updateTeff,
    deleteTeff
}