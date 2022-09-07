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
import Empty from '@pages/Empty';
import AuthRoute from '@utils/AuthRoute'



function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>        
          <Route path="/" element={<Login />} />
          <Route path="/signup/" element={<SignUp />} />
          <Route path="/chat/*" 
              element={
                <AuthRoute>
                  <div className='chatApp'>
                    <Siderbar />
                    <Routes>
                      <Route path={"room/:idRoom"} element={<Main />}/>                    
                      <Route path={""} element={<Empty />}/>
                      <Route path={":user/:id"} element={<Empty />}/>                    
                    </Routes>                    
                  </div>
                </AuthRoute>
                
              } 
            />          
          
        </Routes>
      </BrowserRouter>     
    </div>
  )
}

export default App
