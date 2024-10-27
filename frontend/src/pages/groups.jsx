import React, { useState, useEffect } from "react";
import "./Groups.css";
import AddGroupModal from "./AddGroupModal";
import groupService from '../services/groupService'

const Box = ({ name, assignments }) => {
  return (
    <div className="group">
      <span className="class-group-name">{name}</span>
      <div className="divider"></div>
      <span className="assignments-count">{assignments} assignments</span>
    </div>
  );
};

function Groups({user}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groups, setGroups] = useState([])

  useEffect(() => {
    groupService.getGroups()
      .then((response) => {
        const groups = response
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
          <span className="username">{user.username}</span>
          <div className="avatar"></div>
        </div>
      </div>
      <div className="groups-list">
        {groups.map((group) => (
          <Box key={group.id} name={group.name} assignments={0} />
        ))}
        <div className="group join-group" onClick={() => setIsModalOpen(true)}>
          <span className="class-group-name">+ Join Group</span>
        </div>
        
      </div>

      <AddGroupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Groups;
