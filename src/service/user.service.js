import axios from "axios";
import authHeader from "./auth-header";
// import { useUserContext } from "@contexts/UserContext";

const API_URL = "http://localhost:8080/";
// const { userLocal } = useUserContext(); 
// const idUser = userLocal._id;

const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: authHeader()
});

const getPublicContent = () => {
  return instance.get("all");
};

const getUsers = (valueFind) => {
  return instance.get(`api/users`, {params: {content: valueFind}})
}

const getUser = (id) => {
  return instance.get(`api/users/${id}`)
}

const getRooms = (id) => {
  return instance.get("api/rooms",{params:{_id: id}})
}

const findJoinedByUser = (ownerId, memberId) => {
  return instance.get(`api/users/${ownerId}/${memberId}`)

}

const createOneRoom = (title, _id, member) => {
  return instance.post("api/rooms",{
    title: title, 
    description: "personal", 
    _id: _id,
    member: member
  })
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
  getUsers,
  getRooms,
  getOneRoom,
  createOneRoom,
  getChats,
  createChat,
  getUser,
  findJoinedByUser
  
  
};
export default UserService;