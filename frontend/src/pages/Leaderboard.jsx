import React, { useState } from 'react';
import './Leaderboard.css';

function Leaderboard() {
    // State to control the visibility of the new task container
    const [isTaskContainerVisible, setTaskContainerVisible] = useState(false);

    // Function to toggle the visibility
    const toggleTaskContainer = () => {
        setTaskContainerVisible((prevState) => !prevState);
    };

  return (
    <div className="lb-container">
      <div className="lb-header">
        <div className="lb-group-name">Group Name</div>
        <div className="user-name-container">
          username
          <button className="lb-logout-button">
            logout
          </button>
        </div>
      </div>
      <div className="main-card-container">
        <div className='group-leaderboard'>
          <div className="group-lb-header">
            Leaderboard
          </div>
        </div>
        <div className='group-taskboard'>
          <div className="group-taskboard-header">
            Taskboard
          </div>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className="lb-container">
  //     <div className="lb-header">
  //       <div className="lb-group-name">Group Name</div>
  //       <div className="user-name-container">
  //         username
  //         <button className="lb-logout-button">
  //           logout
  //         </button>
  //       </div>
  //     </div>

  //     <div className="lb-main">
  //       <div className="lb-subheader">Leaderboard</div>

  //       <div className="player-card">
  //         <div className="player-image"></div>
  //         <div className="player-card-content">
  //           <div className="player-card-header">
  //             <span className="player-card-name">Marin Kitagawa</span>
  //             <span className="player-card-points">102 pts</span>
  //           </div>
  //           <div className="player-progress-bar">
  //             <div
  //               className="player-progress-fill"
  //               style={{ width: "50%" }}
  //             ></div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="player-card">
  //         <div className="player-image"></div>
  //         <div className="player-card-content">
  //           <div className="player-card-header">
  //             <span className="player-card-name">Gojo Satoru</span>
  //             <span className="player-card-points">10 pts</span>
  //           </div>
  //           <div className="player-progress-bar">
  //             <div
  //               className="player-progress-fill"
  //               style={{ width: "5%" }}
  //             ></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="lb-taskboard">
  //       <div className="lb-subheader">Taskboard</div>

  //       <div className="lb-task-card">
  //         <div className="lb-task-header">
  //           <h1 className="lb-task-title">DSA HW 5</h1>
  //           <button className="lb-task-delete-button">X</button>
  //         </div>

  //         <p className="lb-task-description">
  //           Probably the worst wording on a homework ever.
  //         </p>

  //         <div className="lb-task-footer">
  //           <input type="text" className="lb-points-input" placeholder="60" />
  //           <div style={{ fontSize: "1.25rem" }}>minutes taken</div>
  //           <button className="lb-mark-complete">Mark complete</button>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Button to toggle the new task container */}
  //     <button className="taskboard-footer" onClick={toggleTaskContainer}>
  //       Add task
  //     </button>

  //     {/* Conditionally render the new task container based on state */}
  //     {isTaskContainerVisible && (
  //       <div className="taskboard-new-task-container">
  //         <div className="task-form">
  //           <div className="task-header">
  //             <h1 className="task-title">Make a new task</h1>
  //             <button
  //               className="close-button"
  //               onClick={toggleTaskContainer}
  //               aria-label="Close"
  //             >
  //               X
  //             </button>
  //           </div>

  //           <form>
  //             <div className="new-task-form-group">
  //               <label htmlFor="taskName" className="form-label">
  //                 Task name
  //               </label>
  //               <input
  //                 type="text"
  //                 id="taskName"
  //                 name="taskName"
  //                 className="form-input"
  //                 required
  //               />
  //             </div>

  //             <div className="new-task-form-group">
  //               <label htmlFor="dueDate" className="form-label">
  //                 Due date
  //               </label>
  //               <input
  //                 type="date"
  //                 id="dueDate"
  //                 name="dueDate"
  //                 className="form-input"
  //                 required
  //               />
  //             </div>

  //             <div className="new-task-form-group">
  //               <label htmlFor="description" className="form-label">
  //                 Short description
  //               </label>
  //               <textarea
  //                 id="description"
  //                 name="description"
  //                 className="form-input description-input"
  //                 required
  //               />
  //             </div>

  //             <button type="submit" className="submit-button">
  //               Add task
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}

export default Leaderboard;
