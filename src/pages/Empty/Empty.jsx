import React, { useEffect, useState } from 'react'
import EmptyComponent from '@components/EmptyComponent'
import { useParams } from 'react-router-dom'
import UserService from '../../service/user.service';
import { useUserContext } from '@contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function Empty() {
  let { id } = useParams();
  let navigate = useNavigate();
  const { userLocal } = useUserContext();

  const [infoUser, setInfoUser] = useState({
    content: "",
    error:""
  });
  const _id = infoUser.content._id;
  const member = userLocal._id;  
  const title = infoUser.content.profile?.name || infoUser.content?.username;

  const handleGreeting = () => {
    async function onGreeting() {
      try {
        let createOneRoom =  await UserService.createOneRoom(title, _id, member);
        const {data} = createOneRoom;
        if (data) {
          const createAChat = await UserService.createChat(data._id, `Hello, Nice to meet you, ${title}`);
          console.log(createAChat.data);
          if (createAChat) {
            navigate(`/chat/room/${data._id}`);
          }

        };
        


      } catch (error) {
        console.log(error);        
      }
    };
    onGreeting();

  };


  useEffect(() => {
    UserService.getUser(id)
    .then((response) => {
      console.log(response.data);
      setInfoUser({
        ...infoUser,
        content:response.data
      })

    })
    .catch(error => {
      setInfoUser({
        ...infoUser,
        error: error.response.data
      })

    })   
  }, [id]);

  return (
    <EmptyComponent infoUser={infoUser} handleGreeting={handleGreeting} />
  )
}

export default Empty