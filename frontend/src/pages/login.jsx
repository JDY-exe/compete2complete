import './Login.css'
import loginService from '../services/loginService'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = ({user, setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [toggleSignUp, setToggleSignUp] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
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

    return(
        <div className='login-page'>
            <div className="login-container">
                <div className="header">
                    <h1 className="title">Login</h1>
                    <svg className="arrow-icon" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2" fill="none"/>
                    </svg>
                </div>
                <form onSubmit={handleSubmit}>
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