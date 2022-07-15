import { useContext } from "react";
import UserContext from "./UserContext";

function useUserContext(){
  const example = useContext(UserContext)
  return example
}

export default useUserContext