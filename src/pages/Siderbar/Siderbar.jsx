import React, { useEffect, useState } from 'react'
import SiderbarComponent from '@components/SiderbarComponent'
import Contact from '@pages/Contact'
import { useUserContext } from '@contexts/UserContext'
import UserService from "../../service/user.service"

function Siderbar() {
  const { userLocal, setUserLocal } = useUserContext();
  const [contact, setContact] = useState({
    contacts: [],
    error: "",
    success: false 
  });
  const { _id } = userLocal;
  useEffect(() => {
    UserService.getRooms(_id).
    then((res) => {
      setContact({
        ...contact,
        contacts: res.data,
        error:"",
        success: true
      });
    }) 
    .catch((err) => {
      setContact({
        ...contact,
        error: err.res.data
      })

    })

  }, []);
  
  
  return (
    <SiderbarComponent contact={contact}/>
  )
}

export default Siderbar