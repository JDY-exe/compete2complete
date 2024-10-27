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

export default { createTask }