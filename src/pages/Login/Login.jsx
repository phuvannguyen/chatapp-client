import LoginForm  from '@components/LoginForm'
import React, {useState, useRef} from 'react'
import axios from "axios"

function Login() {
  const form = useRef();
  const checkBtn = useRef();
  const [user, setUser] = useState({
    username: "",    
    password: "",
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

  const validatePassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" >
          The password must be between 6 and 40 characters.
        </div>
      );
    };   
     
  }
  
  

  const handleSubmit = (e) => {
    const {username, password} = user;
    e.preventDefault();
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      axios.post('http://localhost:8080/api/login', {
        username, password
      })
      .then(function (response) {
        setUser({
          ...user,
          error: "Login sucess",
          success: true
        });
        console.log(response)
      })
      .catch(function (error) {
        setUser({
          ...user,
          error: error.response.data,
          success: false
        });
        console.log(error)
      });
  
    }

    }   
    
    


  return (
    <LoginForm user={user} 
               handleChange={handleChange} 
               handleSubmit={handleSubmit} 
               refs={{form, checkBtn}} 
               validate={{required, vusername, validatePassword}}/>
  )
}

export default Login