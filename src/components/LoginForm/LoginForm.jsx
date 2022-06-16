import React from 'react'
import "./LoginForm.css"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import GoogleIcon from '@mui/icons-material/Google'
import GitHubIcon from '@mui/icons-material/GitHub'

function LoginForm({user, refs, validate, handleChange, handleSubmit}) {

    const {username, password, error, success} = user;
    const {form, checkBtn} =  refs;
    const {required, vusername, validatePassword} = validate;
  return ( 

    <div className="loginForm">
        <h1> Login</h1>
        <Form ref={form}>
            {!success && (
                <div className="form">
                    <Input  type="text" placeholder='Username' 
                            name="username" 
                            onChange={handleChange} 
                            value={username} 
                            validations={[required, vusername]}/>
                    <Input  type="password" 
                            placeholder='Password' 
                            name="password" 
                            onChange={handleChange} 
                            value={password} 
                            validations={[required, validatePassword]}/>
                    <a href='#'>Forget password?</a>
                    <label>
                        <input type="checkbox" /> 
                        Remember
                    </label>
                    <button type='submit' onClick={handleSubmit}>Login</button>

                </div>
            )}
            {error && (
              <div className={success ? "alert alert-success" : "alert alert-danger" }>
                {error}
              </div>
          )}

            <CheckButton style={{ display: "none" }} ref={refs.checkBtn} />          


        </Form>
        <h3>
                Don't have a account ? <a href='/signup'>Sign Up</a>
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