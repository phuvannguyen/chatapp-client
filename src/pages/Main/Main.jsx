import React, {useState, useEffect} from 'react'
import MainComponent from '@components/MainComponent'
import { useRoomContext } from '@contexts/RoomContext'
import UserService from "../../service/user.service"
import { useParams } from 'react-router-dom'

function Main() {
  let {idRoom} = useParams();
  const { room, setRoom} = useRoomContext();
  
  const [roomState, setRoomState] = useState({
    room: {},
    error: "",
    success: false 
  });

  useEffect(() => {
    UserService.getOneRoom(idRoom).
    then((res) => {      
      setRoomState({
        ...roomState, 
        room: res.data,
        error: "",
        success: true
      });
      setRoom({roomIdActivated: idRoom})
      
      

    })
    .catch((error) => {
      setRoomState({
        ...roomState, 
        error: error.res?.data        
      });


    })
  }, [idRoom])
  return (
    <MainComponent roomState={roomState}/>
  )
}

export default Main
