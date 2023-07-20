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


const createSpice = async (req, res) => {
    try{
        const spice = await new Spice(req.body)
        await spice.save()
        return res.status(201).json({spice})
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

const updateSpice = async (req, res) => {
    try{
        let { id } = req.params
        let spice = await Spice.findByIdAndUpdate(id, res.body, { new: true })
        if (spice) {
            return res.status(200).json(spice)
        }
         throw new Error('Flight not found')
    } catch (error){
       return res.status(500).send(error.message)
    }
}

const deleteSpice = async (req, res) => {
    try{
        const { id } = req.params
        const deleted = await Spice.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Spice deleted')
        }
        throw new Error('Spice not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getSpice,
    getSpiceByID,
    createSpice,
    updateSpice,
    deleteSpice
}