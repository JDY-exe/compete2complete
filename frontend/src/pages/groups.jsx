import './Groups.css';


const groups = [
    { name: 'CS 250 HW :C', assignments: 14 },
    { name: 'CS 250 HW :C', assignments: 14 },
    { name: 'CS 250 HW :C', assignments: 14 },
    { name: 'CS 250 HW :C', assignments: 14 },
];
function Groups() {
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
                <span className="assignments-count">{group.assignments} assignments</span>
              </div>
            ))}
            <div className="group join-group">
              <span className="group-name">+ Join Group</span>
            </div>
          </div>
        </div>
      );
};

export default Groups