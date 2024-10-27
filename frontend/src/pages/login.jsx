import './Login.css'
import loginService from '../services/loginService'
import userService from '../services/userService'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = ({user, setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [toggleSignUp, setToggleSignUp] = useState(false)
    const [accountCreated, setAccountCreated] = useState(false)

    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login(username, password)
            setUser(user)
            setUsername('')
            setPassword('')
            navigate('/')
        } catch(error) {
            console.error('an error occured while trying to login', error)
            setError('wrong username or password')
        }
    }

    const handleSignup = async (event) => {
        event.preventDefault()
        try {
            await userService.signup(username, password)
            setUsername('')
            setPassword('')
            setAccountCreated(true)
        } catch (error) {
            setError('A user with this username already exists')
        }
    }

    const switchContext = () => {
        setToggleSignUp(!toggleSignUp)
        setError(null)
        setUsername('')
        setPassword('')
    }

    if (accountCreated) {
        return (
            <div className="login-page">
                <div className="login-container">
                    <h1 className="title login-success">Login Successful</h1>
                    <div>
                        Account has been created successfully
                    </div>
                    <div className='create-acct-link return-to-login' onClick={() => {switchContext(); setAccountCreated(false)}}>
                        Back to Login Page
                    </div>
                </div>
            </div>
        )
    }

    if (toggleSignUp) {
        return(
            <div className="login-page">
                <div className="login-container">
                    <div className="header">
                        <h1 className="title">Sign Up</h1>
                        <svg className="arrow-icon" viewBox="0 0 24 24">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2" fill="none"/>
                        </svg>
                    </div>
                    <form onSubmit={handleSignup}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" value={username} required
                            onChange={event => {setUsername(event.target.value); setError(null)}}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" value={password} required
                            onChange={event => {setPassword(event.target.value); setError(null)}}></input>
                        </div>
                        <ErrorMessage error={error}/>
                        <div className='create-acct-link' onClick={switchContext}>
                            Back to Login Page
                        </div>
                        <button type="submit" className="submit-btn">Go!</button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <div className="login-page">
            <div className="login-container">
                <div className="header">
                    <h1 className="title">Login</h1>
                    <svg className="arrow-icon" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2" fill="none"/>
                    </svg>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={username} required
                        onChange={event => {setUsername(event.target.value); setError(null)}}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} required
                        onChange={event => {setPassword(event.target.value); setError(null)}}></input>
                    </div>
                    <ErrorMessage error={error}/>
                    <div className='create-acct-link' onClick={switchContext}>
                        Don't have an account? Create one here
                    </div>
                    <button type="submit" className="submit-btn">Go!</button>
                </form>
            </div>
        </div>

    )

}

const ErrorMessage = ({error}) => {
    if (!error) {
        return
    }
    console.log('whats happening')
    return (
        <div className="login-error">
            {error}
        </div>
    )
}

export default Login