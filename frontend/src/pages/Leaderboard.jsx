import './Leaderboard.css'
function Leaderboard() {
    return (

        <div class="lb-container">
            <div className="lb-header">
                <div className="group-name">Group Name</div>
                <div className="user-name">Chris P. Bacon</div>
            </div>
            <div className="lb-main">
                <div className="lb-subheader">Leaderboard</div>


                {/* This can be a different component to make it scalable */}
                <div className="player-card">
                    <div className="player-image"></div>
                    <div className="player-card-content">
                        <div className="player-card-header">
                            <span className="player-card-name">Marin Kitagawa</span>
                            <span className="player-card-points">102 pts</span>
                        </div>
                        <div className="player-progress-bar">
                            <div
                                className="player-progress-fill" style={{ width: "50%" }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="player-card">
                    <div className="player-image"></div>
                    <div className="player-card-content">
                        <div className="player-card-header">
                            <span className="player-card-name">Gojo Satoru</span>
                            <span className="player-card-points">10 pts</span>
                        </div>
                        <div className="player-progress-bar">
                            <div
                                className="player-progress-fill" style={{ width: "5%" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="lb-taskboard">
                <div className="lb-subheader">Taskboard</div>

                {/* insert individual tasks */}



                <div className="lb-task-card">
                    <div className="lb-task-header">
                        <h1 className="lb-task-title">DSA HW 5</h1>
                        <button className="lb-task-delete-button">X</button>
                    </div>

                    <p className="lb-task-description">Probably the worst wording on a homework ever.</p>

                    <div className="lb-task-footer">
                        <input
                            type="text"
                            className="lb-points-input"
                            value={120}
                            aria-label="Points"
                        />
                        <button className="lb-mark-complete">
                            Mark complete
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )

}

export default Leaderboard