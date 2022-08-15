import React, { useState } from 'react'
import HeaderSideComponnent from '@components/HeaderSideComponet'
import UserService from '../../service/user.service';


function HeaderSider() {
  const [valueFind, setValueFind] = useState("");
  const [resultFind, setResultFind] = useState("");

  const handleChange = (e) => {    
    setValueFind(e.target.value);       

  }
  
  const handleSubmit =(value, e) => {
    e.preventDefault();
    UserService.getUsers(value)
      .then((response) => {
        setResultFind(response.data);        

      })
      .catch((error) => {
        setResultFind(error.response.data);
        

      });
    console.log(resultFind);     
    setValueFind("");

  } 

  return (
    <div>
      <HeaderSideComponnent handleChange={handleChange} 
                          handleSubmit={handleSubmit} 
                          valueFind={valueFind}/>
      {/* <ContactComponent resultFind={resultFind}/> */}

    </div>
    
  )
}

export default HeaderSider