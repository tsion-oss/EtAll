const db = require('../db')
const { Coffee } = require('../model')


const getCoffee = async (req, res) => {
    try {
        const coffees = await Coffee.find()
        return res.status(200).json({ coffees })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCoffeeByID = async (req, res) => {
    try{
        const { id } = req.params
        const coffee = await Coffee.findById(id)
        if(!coffee) throw Error('Coffee not found')
        res.json({ coffee })
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

const createCoffee = async (req, res) => {
    try{
        const coffee = await new Coffee(req.body)
        await coffee.save()
        return res.status(201).json({coffee})
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

const updateCoffee = async (req, res) => {
    try{
        let { id } = req.params
        let coffee = await Coffee.findByIdAndUpdate(id, res.body, { new: true })
        if (coffee) {
            return res.status(200).json(coffee)
        }
         throw new Error('Flight not found')
    } catch (error){
       return res.status(500).send(error.message)
    }
}

const deleteCoffee = async (req, res) => {
    try{
        const { id } = req.params
        const deleted = await Coffee.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Coffee deleted')
        }
        throw new Error('Flight not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
  
  module.exports = {
    getCoffee,
    getCoffeeByID,
    createCoffee,
    updateCoffee,
    deleteCoffee
  }