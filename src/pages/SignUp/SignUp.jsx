import React, {useState, useRef} from 'react'
import axios from "axios"
import SignUpForm from '@components/Registation'

function SignUp() {
  const form = useRef();
  const checkBtn = useRef();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    error: "",
    success: false
  });
     
  const handleChange = (e) => {
    const value = e.target.value;
    const name =  e.target.name;      
    setUser({...user, [name] : value});  
    

  };
  // handle emtpy value in username, password, email and confirm email
  const required = (value) => {
    if (!value) {
      <div className="alert alert-danger">
        <span>This field is required!</span>
        <a class="close">&times;</a>
      </div>
    }
  };

  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger">
          <span>The username must be between 3 and 20 characters.</span>
          <a class="close">&times;</a>
        </div>
      );
    }
  };


  const validateEmail = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (!re.test(String(value).toLowerCase())) {
       return (
        <div className="alert alert-danger" >
          This is not a valid email.
        </div>
      );
     };     
  };

  const validatePassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" >
          The password must be between 6 and 40 characters.
        </div>
      );
    };   
     
  }

  

  const confirmPassword = (value,props, components) => {    
    if (value !== components['password'][0].value) {
      return (
        <div className="alert alert-danger" >
          Passwords are not equal.
        </div>
      )
    }   

  }

  const handleSubmit = (e) => {
    const {username, email, password, confirm_password} = user;
    e.preventDefault();
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      axios.post('http://localhost:8080/api/registation', {
        username, email,  password
      })
      .then(function (response) {        
        setUser({
          ...user,
          error: "Sign Up is successed",
          success: true
        });
        console.log(response);
      })
      .catch(function (error) {
        setUser({
          ...user,
          error: error.response.data,
          success: false
        });
        console.log(user.error);
      });

    };   

  }

  return (
    <SignUpForm user={user} 
                refs={{form, checkBtn}}
                validate={{required, vusername, validateEmail, validatePassword, confirmPassword}}
                handleChange={handleChange} handleSubmit={handleSubmit}/>
  )
}

export default SignUp