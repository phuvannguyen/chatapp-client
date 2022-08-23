import ContactComponent from "@components/ContactComponent";
import React, { useEffect, useState } from 'react'
import { useRoomContext } from "@contexts/RoomContext";
import { useNavigate } from 'react-router-dom';
import UserService from '../../service/user.service';
import { useUserContext } from "@contexts/UserContext";

function Contact({value}) {
  const { room, setRoom } = useRoomContext();
  const {userLocal} = useUserContext();
  const username = value.username; 

  let navigate = useNavigate(); 
  
  const handleUserClick = (_id, e) =>  {        
    e.preventDefault();        
    setRoom({roomIdActivated: _id});
    //check if room is already, navigate to the existing room or navigate to the new user
    async function checkRoomExists() {
      try {
        let roomExisted = await UserService.findJoinedByUser(_id, userLocal._id);        

        if (roomExisted.data) {
          navigate(`/chat/room/${roomExisted.data._id}`);
        } else {
          navigate(`/chat/${username}/${_id}`);      

        }
      } catch (error) {
        console.log("error", error);
        
      }
    };

    checkRoomExists();

  }; 

  return (
    <ContactComponent value={value}  handleUserClick={handleUserClick}/>
    
  )
}

export default Contact