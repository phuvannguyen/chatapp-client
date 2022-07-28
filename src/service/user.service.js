import axios from "axios";
import authHeader from "./auth-header";
// import { useUserContext } from "@contexts/UserContext";

const API_URL = "http://localhost:8080/";
// const { userLocal } = useUserContext(); 
// const idUser = userLocal._id;

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: authHeader()
});

const getPublicContent = () => {
  return instance.get("all");
};

const getUser = (id) => {
  return instance.get(`api/users/${id}`)
}

const getRooms = (id) => {
  return instance.get("api/rooms",{params:{_id: id}})
}

const getOneRoom = (idRoom) => {
  return instance.get(`api/rooms/${idRoom}`)
}

const getChats = (idRoom) => {
  return instance.get(`api/rooms/${idRoom}/chats`)
};

const createChat = (idRoom, content) => {
  return instance.post(`api/rooms/${idRoom}/chats`, {
    content: content
  })
}



const UserService = {
  getPublicContent,
  getRooms,
  getOneRoom,
  getChats,
  createChat
  
};
export default UserService;