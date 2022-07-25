import ContactComponent from "@components/ContactComponent";
import React, { useEffect, useState } from 'react'
import { useRoomContext } from "@contexts/RoomContext";
import { useNavigate } from 'react-router-dom';

function Contact({value}) {
  const { room, setRoom } = useRoomContext();  
  
  const chat = "chat";
  const rooms = "room"; 
  

  let navigate = useNavigate(); 
  
  const handleUserClick = (_id, e) =>  {    
    e.preventDefault();        
    setRoom({roomIdActivated: _id});    
    navigate("/" + chat + "/" + rooms + "/" + _id);     
    

  }
  
  return (
    <ContactComponent value={value}  handleUserClick={handleUserClick}/>
  )
}

export default Contact