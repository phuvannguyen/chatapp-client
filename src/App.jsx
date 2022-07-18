import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";
// NOTICE:
// EXAMPLE IMPORT
import Login from '@pages/Login'
import SignUp from '@pages/SignUp'
import Main from '@pages/Main';
import Siderbar from '@pages/Siderbar';
import EmptyComponent from '@components/EmptyComponent';
import { useRoomContext } from '@contexts/RoomContext';
import { useUserContext } from '@contexts/UserContext';


function App() {
  const { room } = useRoomContext();
  const { userLocal } = useUserContext();

  const id = userLocal._id;
  const user = userLocal.username;

  const chat = "chat";
  const rooms = "room"
  const idRoom = room.roomIdActivated; 
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={ />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup/" element={<SignUp />} />
        <Route path={"/" + chat + "/" + user + "/" + id}
          element={
            <div className='chatApp'>
              <Siderbar />
              <EmptyComponent />
            </div>
          } 
        />
        <Route path={"/" + chat + "/"} //This is default fucntion: When routter: /chat/: left component is siderbar and right component is user profile
          element={
            <div className='chatApp'>
              <Siderbar />
              <EmptyComponent />
            </div>
          } 
        />
        <Route path={"/" + chat + "/" + rooms + "/" + idRoom} 
          element={
            <div className='chatApp'>
              <Siderbar />
              <Main />
            </div>
          } 
        />     
        
        
      </Routes>
    </BrowserRouter>
     
    </div>
  )
}

export default App
