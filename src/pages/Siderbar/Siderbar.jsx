import React, { useEffect, useState } from 'react'
import SiderbarComponent from '@components/SiderbarComponent'
import { useUserContext } from '@contexts/UserContext'
import UserService from "../../service/user.service"

function Siderbar(props) {  
  const { userLocal, setUserLocal } = useUserContext();
  const [contact, setContact] = useState({
    contacts: [],
    error: "",
    success: false,
    searching: false 
  });
  const [search, setSearch] = useState("")
  const [resultFind, setResultFind] = useState({
    result: [],
    error: ""
  });
  const { _id } = userLocal;
  
  const handleFindUser =(value, e, emptyValue) => {    
    e.preventDefault();
    setSearch(value.trim());
    setContact({
      ...contact,
      searching:true
    })               
    emptyValue("");
  };

  const handleDeleteFind = () => {
    setContact({
      ...contact,
      searching: !contact.searching
      

    })
  }

  useEffect(() => {
    UserService.getUsers(search)
      .then((response) => {
        if (response.data.length === 0) {
          setResultFind({
            result: [],
            error: "Can't find the result. Please find by another keyword"
          });
          return;
        };
        setResultFind({
          result: response.data,
          error:""
        });        

      })
      .catch((error) => {
        setResultFind({
          ...resultFind,
          result: [],
          error: error.response.data
        });
        

      });
    return setResultFind({
      result: [],
      error: ""

    })       
      
      

  }, [search]);

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
                        handleFindUser={handleFindUser} 
                        handleDeleteFind={handleDeleteFind}/>
  )
}

export default Siderbar