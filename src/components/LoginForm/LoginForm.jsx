import React from 'react'
import "./LoginForm.css"
import GoogleIcon from '@mui/icons-material/Google'
import GitHubIcon from '@mui/icons-material/GitHub'

function LoginForm() {
  return (
    <div className="loginForm">
        <h1> Login</h1>
        <form className='form'>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <a href='#'>Forget password?</a>
            <label>
                <input type="checkbox" /> 
                Remember
            </label>
            <button type='submit'>Login</button>        


        </form>
        <h3>
                Don't have a account ? <a href='#'>Sign Up</a>
        </h3>
        <h3>Login with</h3>
        <div className='social'>
            <div className="google">
                <GitHubIcon />
            </div>
            <div className="github">
                <GoogleIcon />
            </div>


        </div>

    </div>
  )
}

export default LoginForm