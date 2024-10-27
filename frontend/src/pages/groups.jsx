import React, { useState, useEffect } from "react";
import "./Groups.css";
import AddGroupModal from "./AddGroupModal";
import groupService from '../services/groupService'
import { useNavigate } from "react-router-dom";

const Box = ({ name, assignments, onClick }) => {
  return (
    <div className="group" onClick={onClick}>
      <span className="class-group-name">{name}</span>
      <div className="divider"></div>
      <span className="assignments-count">{assignments} assignments</span>
    </div>
  );
};

function Groups({user, setUser}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groups, setGroups] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    groupService.getUserGroups(user.id)
      .then((response) => {
        const groups = response
        console.log(groups)
        setGroups(groups)
      })
      .catch((error) => {
        console.error('there was an error retrieving groups', error)
      })
  }, [])

  return (
    <div className="groups-container">
      <div className="groups-header">
        <h1 className="title">My Groups</h1>
        <div className="user-info">
          <div className="groups-logout-wrapper">
            <button className='groups-logout-btn' onClick={() => setUser(null)}>logout</button>
          </div>
          <span className="username">{user.username}</span>
          <div className="avatar"></div>
        </div>
      </div>
      <div className="groups-list">
        {groups.map((group) => (
          <Box key={group.id} name={group.name} assignments={group.tasks.length} onClick={() => navigate(`/groups/${group.id}`)}/>
        ))}
        <div className="group join-group" onClick={() => setIsModalOpen(true)}>
          <span className="class-group-name">+ Join Group</span>
        </div>
        
      </div>

      <AddGroupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setGroups={setGroups}
        groups={groups}
        user={user}
      />
    </div>
  );
}

export default Groups;
