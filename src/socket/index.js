import { io } from "socket.io-client";


const URL = "ws://chat-app-server-02.herokuapp.com/";

const socket = io(URL);

export default socket;