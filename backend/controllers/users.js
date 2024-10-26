const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

userRouter.post('/', async (request, response) => {
  const {username, password} = request.body
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
    await User.findByIdAndDelete(request.params.id)
    response.status(204).end()
  } catch(error) {
    response.status(404).json({error: 'user doesnt exist'})
  }
})

module.exports = userRouter