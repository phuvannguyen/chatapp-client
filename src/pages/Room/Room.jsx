import RoomComponent from "@components/RoomComponent";
import React, { useEffect, useState } from 'react'
import { useRoomContext } from "@contexts/RoomContext";
import { useUserContext } from "@contexts/UserContext";
import { useSocketContext } from "@contexts/SocketContext";
import { useNavigate } from 'react-router-dom';
import UserService from '../../service/user.service';


function Room({value}) {

  const { setRoom } = useRoomContext();
  const {userLocal} = useUserContext();
  const idUser = userLocal._id;
  const {socketContext} = useSocketContext();  
  const [chat, setChat] = useState("");
  const [arrivalChat, setArrivalChat] = useState(null);
  const [users, setUsers] = useState([]); 
  let navigate = useNavigate();
 
  
  const handleUserClick = (_id, e) =>  {    
    e.preventDefault();        
    setRoom({roomIdActivated: _id});    
    navigate(`/chat/room/${_id}`);
  }
  
  useEffect(() => {
   
    UserService.getChats(value._id)
    .then((res) => {      
      setChat(res.data)

    })
    .catch((err) => {
      console.log(err)
    })
  }, []);
  useEffect(() => {
    let usersList = [...value.member, value.owner];
    let filteredUsers = usersList.filter(id => id !== idUser);
  
    filteredUsers.forEach(userId => {
      UserService.getUser(userId)
        .then(user => {
          setUsers([...users, user.data]);          

          })
        .catch(err => {
          console.log(err.message);
        });
      
      });

    



  }, [])
  
  useEffect(() => {    
    socketContext.on("receiveMessage", (chat) => {
      if (chat.conversation === value._id)
      setArrivalChat(chat);
      
      
      
     
    })}, [socketContext]);

  useEffect(() => {
    if (arrivalChat?.content.trim()) {             
            
      setChat({
        ...chat,
        ...arrivalChat
      })
           

    }
    

  }, [arrivalChat]);    
  
  return (
    <RoomComponent value={value}  handleUserClick={handleUserClick} chat={chat} user={users} arrivalChat={arrivalChat}/>
    
  )
}

export default Room