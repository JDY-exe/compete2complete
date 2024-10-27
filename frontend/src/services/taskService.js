import axios from 'axios'

const baseurl = 'http://localhost:3000/api/tasks'

const createTask = async (task, group) => {
  const newTask = (await axios.post(baseurl, task)).data

  group.members = group.members.map(member => member.id)
  group.tasks = group.tasks.map(task => task.id)
  await axios.put(`http://localhost:3000/api/groups/${group.id}`, {...group, tasks: group.tasks.concat(newTask.id)})
  const updatedGroupRes = await axios.get(`http://localhost:3000/api/groups/${group.id}`)
  const updatedGroup = updatedGroupRes.data

  return updatedGroup
}

const completeTask = async (taskid, passedUser) => {
  const userRes = await axios.get(`http://localhost:3000/api/users/${passedUser.id}`)
  const user = userRes.data
  user.groups = user.groups.map(group => group.id)
  user.tasksCompleted = user.tasksCompleted.map(task => task.id)
  if (user.tasksCompleted.find(id => id === taskid)) {
    return null
  }
  const updatedUserRes = await axios.put(`http://localhost:3000/api/users/${user.id}`, {...user, tasksCompleted: user.tasksCompleted.concat(taskid)})
  const updatedUser = updatedUserRes.data
  return updatedUser
}

export default { createTask, completeTask }