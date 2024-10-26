import './Login.css'
function Login() {
    return(
        <div class="login-container">
        <div class="header">
            <h1 class="title">Login</h1>
            <svg class="arrow-icon" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" stroke-width="2" fill="none"/>
            </svg>
        </div>
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required></input>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required></input>
            </div>
            <button type="submit" class="submit-btn">Go!</button>
        </form>
    </div>
    )

}

export default Login