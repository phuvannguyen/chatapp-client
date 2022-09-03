import React, {useState, useEffect} from 'react'
import HeaderMainComponent from '@components/HeaderMainComponent'
import { useUserContext } from '@contexts/UserContext';
import UserService from '../../service/user.service';
function HeaderMain({roomState}) {
  const {userLocal} = useUserContext();
  const idUser = userLocal._id;
  const {room} = roomState;
  
  const {title} = room;  
  const [titleHeader, setTitleHeader] = useState("No Name");
  
  
  useEffect(() => {
    
    if (room.title) {
      let usersList = [...room.member, room.owner];
      let filteredUsers = usersList.filter(id => id !== idUser);
      let data = [];
      let setTitle;
      for (let userId of filteredUsers) {
        UserService.getUser(userId)
          .then(user => {
            data.push(user.data);
          })
      };      
      setTitle = data.length === 1 ?  data[0].profile?.name || data[0].username : title;
      setTitleHeader(setTitle);   
  }}, [room]); 
  
  return (
    <HeaderMainComponent titleHeader={titleHeader}/>
  )
}

export default HeaderMain