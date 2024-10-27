import React, { useState } from "react";
import "./AddGroupModal.css";
import groupService from '../services/groupService'

const AddGroupModal = ({ isOpen, onClose, setGroups, groups, user }) => {
  const [groupName, setGroupName] = useState("");
  const [groupId, setGroupId] = useState('');
  const [toggleJoin, setToggleJoin] = useState(false);

  const handleAdd = async (event) => {
    event.preventDefault()
    try {
      const newGroupObj = {
        name: groupName,
        members: [user.id]
      }
      const newGroup = await groupService.addGroup(newGroupObj, user.id)
      console.log(newGroup)
      setGroups(groups.concat(newGroup))
      setGroupName('');
      onClose();
    } catch(error) {
      console.error('an error occurred while trying to add a group', error)
    }
  };

  const handleJoin = async (event) => {
    event.preventDefault()
    try {
      const newGroup = await groupService.joinGroup(groupId, user.id)
      setGroups(groups.concat(newGroup))
      setGroupId('')
      onClose()
    } catch(error) {
      console.log('an error occurred while trying to join a group; the id likely doesnt exist', error)
    }
  }

  if (!isOpen) return null;
  if (toggleJoin) {
    return (
      <div className="modal-container">
        <form onSubmit={handleJoin} className="modal">
          <h1>Join an existing group:</h1>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
  
          <input
            type="text"
            placeholder="Enter an existing group's id"
            value={groupId}
            onChange={(e) => setGroupId(e.target.value)}
            className="group-input"
          />
  
          <div className="join-existing">
            <div className="join-existing-link" onClick={() => setToggleJoin(!toggleJoin)}>Create a new group</div>
          </div>
  
          <button className="modal-button cancel" onClick={onClose}>
            Cancel
          </button>
          <button type='submit' className="modal-button confirm" >
            Confirm
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="modal-container">
      <form onSubmit={handleAdd} className="modal">
        <h1>Add a new group:</h1>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="group-input"
        />

        <div className="join-existing">
          <div className="join-existing-link" onClick={() => setToggleJoin(!toggleJoin)}>or join an existing one</div>
        </div>

        <button className="modal-button cancel" onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className="modal-button confirm">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default AddGroupModal;
