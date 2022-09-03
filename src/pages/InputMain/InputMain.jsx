import React, { useEffect, useRef, useState } from 'react'
import InputMainComponent from '@components/InputMainComponent'
import UserService from '../../service/user.service'
import { useUserContext } from '@contexts/UserContext'
import { useParams } from 'react-router-dom'
import { useSocketContext } from '@contexts/SocketContext'

function InputMain() {
  let { idRoom } = useParams();
  const {userLocal} = useUserContext();
  const {socketContext} = useSocketContext();
  const [chat, setChat] = useState({
    content: "",
    error: "",
    success: false
  });
  const [currentUser, setCurrentUser] = useState(null);   

  useEffect(() => {
    socketContext.emit("addUser", {userId: userLocal._id, idRoom});
    socketContext.on("getUser", (user) => {
      console.log(user);      
      setCurrentUser(user);      
    })

  }, [idRoom]); 
 
  
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
      //handle socket      
      const {username} =  userLocal;             
                
      socketContext.emit("createChat", {chat: {...res.data, 
                                      owner: {_id: res.data.owner, 
                                              username: username, 
                                              }, 
                                      }});        
      

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