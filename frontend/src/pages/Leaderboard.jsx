import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Leaderboard.css';
import groupService from '../services/groupService';
import taskService from '../services/taskService'
import userService from '../services/userService';

const Leaderboard = ({user, setUser}) => {
  // State to control the visibility of the new task container
  const [isTaskContainerVisible, setTaskContainerVisible] = useState(false);
  const [group, setGroup] = useState(null)
  const [taskName, setTaskName] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [taskPoints, setTaskPoints] = useState('')
  const [totalPoints, setTotalPoints] = useState(0)

  const { groupid } = useParams()
  let refreshGroup = [false]
  // const [members, setMembers] = useState([])
  // const [tasks, setTasks] = useState([])

  // Function to toggle the visibility
  const toggleTaskContainer = () => {
      setTaskContainerVisible((prevState) => !prevState);
  };

  useEffect(() => {
    groupService.getGroupById(groupid)
      .then(foundGroup => {
        setGroup(foundGroup)
        setTotalPoints(foundGroup.tasks.reduce((initVal, task) => initVal + task.points, 0))
      }) 
      .catch (error => {
        console.error('group doesnt exist')
      })
  }, refreshGroup)

  if (group === null) {
    return (
      <div>
        There was a problem loading data from the server
      </div>
    )
  }

  const handleAddTask = async (event) => {
    event.preventDefault()
    try {
      const newTask = {
        name: taskName,
        description: taskDesc,
        points: taskPoints,
        group: group.id
      }
      const updatedGroup = await taskService.createTask(newTask, group)
      setGroup(updatedGroup)
      setTaskName('')
      setTaskDesc('')
      setTaskPoints('')
      toggleTaskContainer()
      setTotalPoints(totalPoints + Number(taskPoints))
    } catch(error) {
      console.error('an error occured while trying to create a new task', error)
    }
  } 

  const handleTaskCompletion = async (id) => {
    //todo
    try {
      const updatedUser = await taskService.completeTask(id, user)
      if (updatedUser === null) {
        console.error('this task has already been completed already exists')
      }
      else {
        setUser(updatedUser)
        refreshGroup[0] = !refreshGroup[0]
      }
    } catch(error) {
      console.error('an error occurred while trying to update user state', error)
    }
  }


  return (
    <div className="lb-container">
      <div className="lb-header">
        <div className="lb-group-name">{group.name}</div>
        <div className="user-name-container">
          {user.username}
          <button className="lb-logout-button" onClick={() => setUser(null)}>
            logout
          </button>
        </div>
      </div>

      <div className="lb-main">
        <div className="lb-subheader">Leaderboard</div>
        {group.members.map(member => {
          return <UserCard key={member.id} name={member.username} points={
            member.tasksCompleted.reduce((sum, task) => {
              if (group.tasks.find(gTask => gTask.id === task.id)) {
                return sum + task.points
              }
              return sum + 0
            }, 0)
          } 
          totalPoints={totalPoints} />
        })}
      </div>

      <div className="lb-taskboard">
        <div className="lb-subheader">Taskboard</div>
        {group.tasks.map(task => {
          return <TaskCard key={task.id} title={task.name} description={task.description} points={task.points} id={task.id} handleTaskCompletion={handleTaskCompletion}/>
        })}
      </div>

      {/* Button to toggle the new task container */}
      <button className="taskboard-footer" onClick={toggleTaskContainer}>
        Add task
      </button>

      {/* Conditionally render the new task container based on state */}
      {isTaskContainerVisible && (
        <div className="taskboard-new-task-container">
          <div className="task-form">
            <div className="task-header">
              <h1 className="task-title">Make a new task</h1>
              <button
                className="close-button"
                onClick={toggleTaskContainer}
                aria-label="Close"
              >
                X
              </button>
            </div>

            <form onSubmit={handleAddTask}>
              <div className="new-task-form-group">
                <label htmlFor="taskName" className="form-label">
                  Task name
                </label>
                <input
                  type="text"
                  id="taskName"
                  name="taskName"
                  className="form-input"
                  value={taskName}
                  onChange={e => setTaskName(e.target.value)}
                  required
                />
              </div>

              <div className="new-task-form-group">
                <label htmlFor="taskPoints" className="form-label">
                  Points
                </label>
                <input
                  type="number"
                  id="taskName"
                  name="taskName"
                  className="form-input"
                  value={taskPoints}
                  onChange={e => setTaskPoints(e.target.value)}
                  required
                />
              </div>

              {/* <div className="new-task-form-group">
                <label htmlFor="dueDate" className="form-label">
                  Due date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  className="form-input"
                  required
                />
              </div> */}

              <div className="new-task-form-group">
                <label htmlFor="description" className="form-label">
                  Short description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="form-input description-input"
                  value={taskDesc}
                  onChange={e => setTaskDesc(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Add task
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const TaskCard = ({title, description, points, id, handleTaskCompletion}) => {
  return (
    <div className="lb-task-card">
      <div className="lb-task-header">
        <h1 className="lb-task-title">{title} ({points} points)</h1>
        <button className="lb-task-delete-button">X</button>
      </div>

      <p className="lb-task-description">
        {description}
      </p>

      <div className="lb-task-footer">
        <input type="text" className="lb-points-input" placeholder="60" />
        <div style={{ fontSize: "1.25rem" }}>minutes taken</div>
        <button className="lb-mark-complete" onClick={() => handleTaskCompletion(id)}>Mark complete</button>
      </div>
    </div>
  )
}

const UserCard = ({name, points, totalPoints}) => {
  const percentage = points / totalPoints * 100
  return (
    <div className="player-card">
      <div className="player-image"></div>
      <div className="player-card-content">
        <div className="player-card-header">
          <span className="player-card-name">{name}</span>
          <span className="player-card-points">{points} pts</span>
        </div>
        <div className="player-progress-bar">
          <div
            className="player-progress-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard;
