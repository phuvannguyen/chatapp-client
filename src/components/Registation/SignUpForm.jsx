import React from 'react'
import "./SignUpForm.css"

function SignUpForm() {
  return (
    <div className="signup-form">
      <h1>SignUp</h1>
      <form className="form-signup">
        <input type="text" className="username" placeholder='User name'/>
        <input type="email" className='email' placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <input type="password" placeholder='Confirm password' />
        <button type="submit">Sign Up</button>
      </form>
      <h3>Do you have a account? <a href="/">Login</a></h3>     
      
    </div>
  )
}

export default SignUpForm