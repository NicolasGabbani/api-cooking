import mangoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const foodSchema = mangoose.Schema({
  "name": {
    type: String,
    required: true,
    unique: true
  },
  "unit": {
    type: String,
    default: 'kg'
  }
})

foodSchema.plugin(uniqueValidator)

export const FoodModel = mangoose.model('Food', foodSchema)
