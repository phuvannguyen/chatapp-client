import React, { useState } from 'react'
import HeaderSideComponnent from '@components/HeaderSideComponet'
import Contact from '@pages/Contact';
import UserService from '../../service/user.service';
import Siderbar from '@pages/Siderbar';


function HeaderSider({handleFindUser, handleDeleteFind}) {
  const [valueFind, setValueFind] = useState("");
  

  const handleChange = (e) => {    
    setValueFind(e.target.value);       

  }
  

  return (
    <HeaderSideComponnent handleChange={handleChange} 
                          handleFindUser={handleFindUser} 
                          valueFind={valueFind} 
                          setValueFind={setValueFind} 
                          handleDeleteFind={handleDeleteFind}/>
    
  )
}

export default HeaderSider