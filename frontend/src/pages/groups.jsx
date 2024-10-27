import React from 'react';
import './Groups.css';

const Box = ({ name, assignments }) => {
    return (
      <div className="group">
        <span className="group-name">{name}</span>
        <div className="divider"></div>
        <span className="assignments-count">{assignments} assignments</span>
      </div>
    );
};

const groups = [
  { name: 'CS 250 HW :C', assignments: 14 },
  { name: 'CS 250 HW :C', assignments: 14 },
  { name: 'CS 250 HW :C', assignments: 14 },
  { name: 'CS 250 HW :C', assignments: 14 },
  { name: 'CS 250 HW :C', assignments: 14 },
  { name: 'CS 250 HW :C', assignments: 14 },
  { name: 'CS 250 HW :C', assignments: 14 },
  { name: 'CS 250 HW :C', assignments: 14 },
  { name: 'CS 250 HW :C', assignments: 14 },
  { name: 'CS 250 HW :C', assignments: 14 },
  
];

const Groups = () => {
    return (
      <div className="groups-container">
        <header className="groups-header">
          <h1 className="groups-title">My Groups</h1>
          <div className="user-info">
            <span className="groups-username">Fallen</span>
            <div className="groups-avatar"></div>
          </div>
        </header>
        <div className="groups-list">
          {groups.map((group, index) => (
            <Box key={index} name={group.name} assignments={group.assignments} />
          ))}
          <div className="group join-group">
            <span className="group-name">+ Join Group</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Groups;