import { useState } from "react";
import SocketContext from "./SocketContext";
import socket from "../../socket"

function SocketContextProvider({ children }){

  const [socketContext, setSocketContext] = useState(socket);  
  
  return (
    <SocketContext.Provider value={{socketContext, setSocketContext}}>
      { children }
    </SocketContext.Provider>
  )
}

export default SocketContextProvider