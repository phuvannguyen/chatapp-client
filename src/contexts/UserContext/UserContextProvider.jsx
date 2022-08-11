import { useState } from "react";
import UserContext from "./UserContext";
import { useParams } from "react-router-dom";

function UserContextProvider({ children }){
  const data = JSON.parse(localStorage.getItem("user"));

  const user = data?.user || undefined;
  const token = data?.token || undefined; 
  let userGlobal;  

  user && token ? userGlobal =  user : userGlobal = "";     

  const [userLocal, setUserLocal] = useState({
    ...userGlobal
  })
  return (
    <UserContext.Provider value={{userLocal, setUserLocal}}>
      { children }
    </UserContext.Provider>
  )
}

export default UserContextProvider