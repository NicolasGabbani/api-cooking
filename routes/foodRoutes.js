import express from 'express'
import { FoodModel } from '../models/foodModel.js'
import mongoose from 'mongoose'

export const router = express.Router()

// GET ALL FOOD
router.get('/', (_, res) => {
  FoodModel.find((err, data) => {
    if (err) return res.status(404).send(err)
    res.send(data)
  })
})

// GET ONE FOOD
router.get('/:id', (req, res) => {
  FoodModel.findById(req.params.id, (err, data) => {
    if (err) return res.status(404).send(err)
    res.send(data)
  })
})

// POST NEW FOOD
router.post('/', (req, res) => {
  const food = new FoodModel({
    name: req.body.name,
    unit: req.body.unit
  })

  food.save((err, data) => {
    if (err) return res.status(403).send(err)
    res.send(data)
  })
})

// EDIT FOOD
router.patch('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(403).send(`ID unknow: ${req.params.id}`)

  const updatedFood = {
    name: req.body.name,
    unit: req.body.unit
  }

  FoodModel.findOneAndUpdate(
    req.params.id,
    { $set: updatedFood },
    { new: true },
    (err, data) => {
      if (err) return res.status(403).send(err)
      res.send(data)
    }
  )
})

// DELETE FOOD
router.delete('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(403).send(`ID unknow: ${req.params.id}`)

  FoodModel.findOneAndRemove(
    req.params.id,
    (err, data) => {
      if (err) return res.status(403).send(err)
      res.send(data)
    }
  )
})
