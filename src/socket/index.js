import { io } from "socket.io-client";


const URL = "ws://localhost:8071/";

const socket = io(URL);

export default socket;