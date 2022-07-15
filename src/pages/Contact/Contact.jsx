import ContactComponent from "@components/ContactComponent";
import React, { useEffect, useState } from 'react'
import { useRoomContext } from "@contexts/RoomContext";

function Contact({value}) {
  const [id, setId] = useState("");
  const {room, setRoom} = useRoomContext();   

  
  const handleUserClick = (_id) =>  {    
    setRoom(
      {
        roomIdActivated: _id
      }
      
    );  
      
    

  }
  
  return (
    <ContactComponent value={value}  handleUserClick={handleUserClick}/>
  )
}

export default Contact