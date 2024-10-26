import "./Groups.css";
import AddGroupModal from "./AddGroupModal";
import React, { useState } from "react";

const groups = [
  { name: "CS 250 HW :C", assignments: 14 },
  { name: "CS 250 HW :C", assignments: 14 },
  { name: "CS 250 HW :C", assignments: 14 },
  { name: "CS 250 HW :C", assignments: 14 },
];
function Groups() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddGroup = (groupName) => {
    // Add your logic to add the new group
    const newGroup = { name: groupName, assignments: 0 };
    setGroups([newGroup]);
    // Update your groups state here
    setIsModalOpen(false);
  };

  return (
    <div className="groups-container">
      <div className="header">
        <h1 className="title">My Groups</h1>
        <div className="user-info">
          <span className="username">Fallen</span>
          <div className="avatar"></div>
        </div>
      </div>
      <div className="groups-list">
        {groups.map((group, index) => (
          <div key={index} className="group">
            <span className="group-name">{group.name}</span>
            <span className="assignments-count">
              {group.assignments} assignments
            </span>
          </div>
        ))}
      </div>

      <div className="group join-group" onClick={() => setIsModalOpen(true)}>
        <span className="group-name">+ Join Group</span>
      </div>

      <AddGroupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => handleAddGroup(groupName)}
      />
    </div>
  );
}

export default Groups;
