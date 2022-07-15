import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserContextProvider from '@contexts/UserContext'
import RoomContextProvider from '@contexts/RoomContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <RoomContextProvider>
            <App />
        </RoomContextProvider>        
    </UserContextProvider> 
    
  
    
  
)
