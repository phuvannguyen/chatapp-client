import { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }){
  const data = JSON.parse(localStorage.getItem("user"));
  let userGlobal;
  const { userLocal, token } = data;
  userLocal && token ? userGlobal =  userLocal : userGlobal = ""; 
  

  const [user, setUser] = useState({
    userGlobal
  })
  return (
    <UserContext.Provider value={{user, setUser}}>
      { children }
    </UserContext.Provider>
  )
}

export default UserContextProvider