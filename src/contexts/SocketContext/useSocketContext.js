import { useContext } from "react";
import SocketContext from "./SocketContext";

function useSocketContext(){
  const example = useContext(SocketContext)
  return example
}

export default useSocketContext