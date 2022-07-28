import React, {useEffect, useState} from 'react'
import ChatMainComponent from '@components/ChatMainComponent'
import { useRoomContext } from '@contexts/RoomContext'
import UserService from "../../service/user.service"

function ChatMain() {
  const [chats, setChats] = useState({
    content: [],
    error: "",
    success: false
  }) 
  const {room} = useRoomContext();
  const roomIdActivated = room.roomIdActivated;  

  useEffect(() => {    
    UserService.getChats(roomIdActivated).
    then((res) => {      
      setChats(
        {
          ...chats,
          content: res.data,
          success: true
  
        }
      ); 
       

    })
    .catch((error) => {
      setChats({
        ...chats,        
        error: error.res.data
      });     
    })

  }, [roomIdActivated])
  return (
    <ChatMainComponent chats={chats}/>
  )
}

export default ChatMain