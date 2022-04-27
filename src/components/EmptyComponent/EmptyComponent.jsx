import React from 'react'
import "./EmptyComponent.css"
import { Avatar} from '@mui/material'; 

function EmptyComponent() {
  return (
    <div className='empty'>
      <h1>Welcome, Phu Nguyen</h1>
      <div className="avatar">                
          <Avatar alt="Phu Nguyen" src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
          <div className="username">
              <h3>Phu Nguyen</h3>
              <p>In Meeting</p>
          </div>
      </div>
      <button>Start a conversation</button>                
                    
        
    </div>
  )
}

export default EmptyComponent