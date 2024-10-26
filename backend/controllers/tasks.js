const taskRouter = require('express').Router()
const Task = require('../models/task')

taskRouter.get('/', async (request, response) => {
  try {
    const tasks = await Task.find({})
    response.json(tasks)
  } catch(error) {
    console.error('failed to get all tasks', error)
    response.status(400).end()
  }
})

taskRouter.post('/', async (request, response) => {
  const task = new Task(request.body)
  try {
    const returnedTask = await task.save()
    response.status(201).json(returnedTask)
  } catch(error) {
    console.error('an error occured while trying to post', error)
    response.status(400).end()
  }
})

taskRouter.put('/:id', async (request, response) => {
  try {
    const task = request.body
    const newTask = await Task.findByIdAndUpdate(request.params.id, {...task}, {new: true})
    response.json(newTask)
  } catch(error) {
    console.error('could not update task', error)
  }
})

module.exports = taskRouter