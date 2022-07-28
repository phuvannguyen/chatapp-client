import React, { useEffect, useState } from 'react'
import InputMainComponent from '@components/InputMainComponent'
import UserService from '../../service/user.service'
 

function InputMain() {
   
  const [chat, setChat] = useState({
    content: "",
    error: "",
    success: false
  })


  const handleChange = (e) => {
    setChat({
      ...chat,
      content: e.target.value     

    });   
    

  }
  const handleSubmit = (idRoom, content,  e) => {
    e.preventDefault();           
    UserService.createChat(idRoom, content)
    .then((res) => {      
      setChat({
        content: "",
        error: "",
        success: true
      });        
      

    })
    .catch((error) => {
      setChat({
        ...chat,
        content: "",
        error: error.message,
        success: false

        
      });
      

    });     


  }

  return (
    <InputMainComponent handleSubmit={handleSubmit} handleOnChange={handleChange} chat={chat}/>
  )
}

export default InputMain