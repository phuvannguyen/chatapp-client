import React, {useState, useEffect} from 'react'
import MainComponent from '@components/MainComponent'
import { useRoomContext } from '@contexts/RoomContext'
import UserService from "../../service/user.service"

function Main() {
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
      });
      
      

    })
    .catch((error) => {
      setRoomState({
        ...roomState, 
        error: error.res.data        
      });


    })
  }, [room.roomIdActivated])
  return (
    <MainComponent roomState={roomState}/>
  )
}

export default Main
