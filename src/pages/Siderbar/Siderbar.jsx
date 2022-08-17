import React, { useEffect, useState } from 'react'
import SiderbarComponent from '@components/SiderbarComponent'
import { useUserContext } from '@contexts/UserContext'
import UserService from "../../service/user.service"

function Siderbar(props) {  
  const { userLocal, setUserLocal } = useUserContext();
  const [contact, setContact] = useState({
    contacts: [],
    error: "",
    success: false 
  });
  const [resultFind, setResultFind] = useState("");
  const { _id } = userLocal;
  
  const handleFindUser =(value, e, emptyValue) => {
    e.preventDefault();
    UserService.getUsers(value)
      .then((response) => {
        setResultFind(response.data);        

      })
      .catch((error) => {
        setResultFind(error.response.data);
        

      });
      console.log(resultFind);         
      emptyValue("");
  }

  
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
        error: err.message
      })

    })

  }, []);
  
  
  return (
    <SiderbarComponent contact={contact} 
                        resultFind={resultFind} 
                        handleFindUser={handleFindUser}/>
  )
}

export default Siderbar