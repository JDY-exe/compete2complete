const groupRouter = require('express').Router()
const Group = require('../models/group')

groupRouter.get('/', async (request, response) => {
  try {
    const groups = await Group.find({})
    response.json(groups)
  } catch(error) {
    console.error('error during get for group', error)
    response.status(400).json({error: 'an error occurred while getting groups'})
  }
})

groupRouter.post('/', async (request, response) => {
  try {
    const group = new Group(request.body)
    const returnedGroup = await group.save()
    response.status(201).json(returnedGroup)
  } catch(error) {
    console.error('error occurred while trying to create group')
    response.status(400).json({error: 'an error occurred while trying to create group'})
  }
})

// add post request

module.exports = groupRouter