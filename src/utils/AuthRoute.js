import { useEffect } from "react";
import { useUserContext } from "@contexts/UserContext"
import { useNavigate } from "react-router-dom";

function AuthRoute ({children}) {
  let navigate = useNavigate();
  const {userLocal} = useUserContext();  
  const idUser = userLocal?._id;  
  
  useEffect(() => {
    if(!idUser) {       
      //Not signed in
      navigate("/")
    }

  }, []); 
  
  //Signed in
  return children
}
export default AuthRoute