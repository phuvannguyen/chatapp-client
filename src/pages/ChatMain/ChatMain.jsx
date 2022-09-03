import React, {useEffect, useState, useRef} from 'react'
import ChatMainComponent from '@components/ChatMainComponent'
import UserService from "../../service/user.service"
import { useParams } from 'react-router-dom'
import { useSocketContext } from '@contexts/SocketContext'

function ChatMain() {
  const [chats, setChats] = useState({
    content: [],
    error: "",
    success: false
  });
  const {socketContext} = useSocketContext();
  const [arrivalChat, setArrivalChat] = useState(null);
  

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

  useEffect(() => {    
    socketContext.on("receiveMessage", (chat) => {      
      console.log("Received message", chat);
      setArrivalChat(chat);
     
    })}, [socketContext]);

  useEffect(() => {
    if (arrivalChat?.content.trim()) {      
      setChats({
        ...chats,
        content: [...chats.content, arrivalChat]
      })

    }
    

  }, [arrivalChat]);


  return (
    <ChatMainComponent chats={chats} />
  )
}

export default ChatMain