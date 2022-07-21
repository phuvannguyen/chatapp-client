import React, {useEffect, useState} from 'react'
import ChatMainComponent from '@components/ChatMainComponent'
import { useRoomContext } from '@contexts/RoomContext'
import UserService from "../../service/user.service"

function ChatMain() {
  const { room } = useRoomContext();
  const [roomState, setRoomState] = useState({
    room: {},
    error: "",
    success: false 
  });

  useEffect(() => {
    UserService.getOneRoom(room.roomIdActivated).
    then((res) => {
      setRoomState({
        ...roomState, 
        room: res.data,
        error: "",
        success: true
      })

    })
    .catch((error) => {
      setRoomState({
        ...roomState, 
        error: error.res.data        
      })


    })
  }, [])
  return (
    <ChatMainComponent roomState={roomState}/>
  )
}

export default ChatMain