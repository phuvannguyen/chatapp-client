import RoomComponent from "@components/RoomComponent";
import React, { useEffect, useState } from 'react'
import { useRoomContext } from "@contexts/RoomContext";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import UserService from '../../service/user.service';


function Room({value}) {
  const { room, setRoom } = useRoomContext();
  const [chat, setChat] = useState("");  
  let navigate = useNavigate();
 
  
  const handleUserClick = (_id, e) =>  {    
    e.preventDefault();        
    setRoom({roomIdActivated: _id});    
    navigate(`/chat/room/${_id}`);
  }
  
  useEffect(() => {
   
    UserService.getChats(value._id)
    .then((res) => {
      console.log(res.data);
      setChat(res.data)

    })
    .catch((err) => {
      console.log(err)
    })
  }, []);    

  
  
  
  return (
    <RoomComponent value={value}  handleUserClick={handleUserClick} chat={chat}/>
    
  )
}

export default Room