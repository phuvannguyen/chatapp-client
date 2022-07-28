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



function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>        
          <Route path="/" element={<Login />} />
          <Route path="/signup/" element={<SignUp />} />
          <Route path="/chat/*" 
              element={
                <div className='chatApp'>
                  <Siderbar />
                  <Routes>
                    <Route path={"room/:idRoom"} element={<Main />}/>                    
                    <Route path={""} element={<EmptyComponent />}/>
                    <Route path={":user/:id"} element={<EmptyComponent />}/>                    
                  </Routes>
                  <EmptyComponent />
                </div>
              } 
            />          
          
        </Routes>
      </BrowserRouter>     
    </div>
  )
}

export default App
