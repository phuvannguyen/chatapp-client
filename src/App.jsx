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
// 


function App() {
  const id = "chat"

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={ />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup/" element={<SignUp />} />
        <Route path={"/" + id + "/"} 
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
