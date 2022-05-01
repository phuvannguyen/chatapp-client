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
// 


function App() {
  const chat = "chat";
  const id = "id";
  const user = "phu1994";
  const room = "room1"

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
          </div>} />
          <Route path={"/" + chat + "/"} //This is default fucntion: When routter: /chat/: left component is siderbar and right component is user profile
          element={
          <div className='chatApp'>
            <Siderbar />
            <EmptyComponent />
          </div>} />
        <Route path={"/" + chat + "/" + room + "/" + id} 
          element={
          <div className='chatApp'>
            <Siderbar />
            <Main />
          </div>} />     

        
      </Routes>
    </BrowserRouter>
     
    </div>
  )
}

export default App
