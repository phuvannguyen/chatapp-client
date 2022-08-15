import React, {useEffect, useState} from 'react'
import ChatMainComponent from '@components/ChatMainComponent'
import UserService from "../../service/user.service"
import socket from '../../socket/index.js'
import { useParams } from 'react-router-dom'

function ChatMain() {
  const [chats, setChats] = useState({
    content: [],
    error: "",
    success: false
  });

  let {idRoom} = useParams();    
  const roomIdActivated = idRoom;
 
  useEffect(() => {    
    UserService.getChats(roomIdActivated).
    then((response) => {      
      setChats(
        {
          ...chats,
          content: response.data,
          success: true
  
        }
      );     

    })
    .catch((error) => {      
      setChats({
        ...chats,        
        error: error.response.data
      });     
    })
  }, [roomIdActivated]);

  // useEffect(() => {    
  //   socket.content = {chat: chats.content};
  //   socket.connect();
    
  // }, [chats.content]);
  return (
    <ChatMainComponent chats={chats}/>
  )
}

export default ChatMain