import React, { useEffect, useState } from 'react'
import EmptyComponent from '@components/EmptyComponent'
import { useParams } from 'react-router-dom'
import UserService from '../../service/user.service';

function Empty() {
  let { id } = useParams();
  console.log("This is id", id);
  const [infoUser, setInfoUser] = useState({
    content: "",
    error:""
  })
  useEffect(() => {
    UserService.getUser(id)
    .then((response) => {
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
  }, [id])


  return (
    <EmptyComponent infoUser={infoUser}/>
  )
}

export default Empty