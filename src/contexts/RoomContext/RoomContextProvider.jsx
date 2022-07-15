import { useState } from "react";
import RoomContext from "./RoomContext";

function RoomContextProvider({ children }){   

  const [room, setRoom] = useState({    
    roomIdActivated: ""
  })
  return (
    <RoomContext.Provider value={{room, setRoom}}>
      { children }
    </RoomContext.Provider>
  )
}

export default RoomContextProvider