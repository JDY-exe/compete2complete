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
        <header className="header">
          <h1 className="title">My Groups</h1>
          <div className="user-info">
            <span className="username">Fallen</span>
            <div className="avatar"></div>
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