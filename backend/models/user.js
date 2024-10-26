const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: String,
  groups: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  }],
  tasksCompleted: [{
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    },
    time: {
      type: Number,
      required: true
    },
    completed: {
      type: Date,
      default: Date.now
    }
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('User', userSchema)