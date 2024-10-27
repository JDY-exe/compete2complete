const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

userRouter.get('/', async (request, response) => {
  try {
    const users = await User.find({})
    response.json(users)
  } catch (error) {
    console.error('an error occured while trying to get users', error)
    response.status(400).json('an error occurred while retrieving users')
  }
})

userRouter.get('/:id', async (request, response) => {
  try {
    const user = await User.findById(request.params.id).populate('groups')
    response.json(user)
  } catch (error) {
    console.error('an error occured while trying to get user', error)
    response.status(400).json('an error occurred while retrieving user')
  }
})

userRouter.post('/', async (request, response) => {
  const {username, password} = request.body
  const checkDup = await User.findOne({username})
  if (checkDup) {
    return response.status(400).json({error: 'user already exists'})
  }
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)
  
  const user = new User({
    username,
    passwordHash,
    groups: [],
    tasksCompleted: []
  })

  const returnedUser = await user.save()
  
  response.status(201).json(returnedUser)
})

userRouter.delete('/:id', async (request, response) => {
  try {
    if ((await User.findById(request.params.id)) === null) {
      return response.status(404).json({error: 'not found'})
    }
    await User.findByIdAndDelete(request.params.id)
    response.status(204).end()
  } catch(error) {
    response.status(404).json({error: 'user doesnt exist'})
  }
})

module.exports = userRouter