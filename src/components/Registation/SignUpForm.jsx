import React from 'react'
import "./SignUpForm.css"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";



function SignUpForm({user, handleChange, handleSubmit, refs, validate}) {
  const {required, vusername, validateEmail, validatePassword, confirmPassword} = validate;
  return (
    <div className="signup-form">
      <h1>Sign Up</h1>    
      
          <Form  onSubmit={handleSubmit} ref={refs.form}>
            {!user.success && (
              <div className="form-signup">
                <Input type="text" className="username" placeholder='User name' name="username" onChange={handleChange} value={user.username} validations={[required, vusername]}/>
                <Input type="email" className='email' placeholder='Email' name="email" onChange={handleChange} value={user.email} validations={[required, validateEmail]}/>
                <Input type="password" placeholder='Password' name="password" onChange={handleChange} value={user.password} validations={[required, validatePassword, ]}/>
                <Input type="password" placeholder='Confirm password' name="confirm_password" onChange={handleChange} value={user.confirm_password} validations={[required, confirmPassword]} />
                <button type="submit" >Sign Up</button>                
              </div>
            )}
            {user.error && (
              <div className={ user.success ? "alert alert-success" : "alert alert-danger" }>
                {user.error}
              </div>
          )}
            <CheckButton style={{ display: "none" }} ref={refs.checkBtn} />                
            
          </Form>
          <h3>Do you have a account? <a href="/">Login</a></h3>     
           
      
    </div>
  )
}

export default SignUpForm