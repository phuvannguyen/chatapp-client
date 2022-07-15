import { useContext } from "react";
import RoomContext from "./RoomContext";

function useRoomContext(){
  const example = useContext(RoomContext);  
  return example
}

export default useRoomContext