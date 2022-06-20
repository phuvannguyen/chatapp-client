import { useContext } from "react";
import UserContext from "./UserContext";

function useUserContext(){
  const example = useContext(UserContext)
  console.log("example")
  return example
}

export default useUserContext