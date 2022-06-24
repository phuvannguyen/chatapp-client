import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/";

const getPublicContent = () => {
  return axios.get(API_URL + "all", { headers: authHeader() });
};

const getRooms = (id) => {
  return axios.get(API_URL + "api/" + "rooms",{headers:  authHeader(), params:{_id: id}})
}


const UserService = {
  getPublicContent,
  getRooms
  
};
export default UserService;