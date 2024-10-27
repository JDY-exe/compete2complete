import React, { useState } from "react";
import "./AddGroupModal.css";

const AddGroupModal = ({ isOpen, onClose }) => {
  const [groupName, setGroupName] = useState("");

  const handleAddGroup = (groupName) => {
    // Add your logic to add the new group
    const newGroup = { name: groupName, assignments: 0 };
    setGroupName(newGroup);
    // Update your groups state here
    onClose();
  };

  const handleSubmit = () => {
    if (groupName.trim()) {
      handleAddGroup(groupName);
      setGroupName("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal">
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

        <button className="modal-button cancel" onClick={onClose}>
          Cancel
        </button>
        <button className="modal-button confirm" onClick={handleSubmit}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default AddGroupModal;
