import React from 'react'
import "./EmptyComponent.css"
import { Avatar} from '@mui/material'; 

function EmptyComponent({infoUser}) {  
  const {content} = infoUser;
  const username = content.profile?.name || content.username;
  const url = content.profile?.avatar_url || "";
  const status = content.profile?.status

  
  return (
    <div className='empty main'>
      <h1>Welcome, {username}</h1>
      <div className="avatar">                
          <Avatar alt={username} src={url} />
          <div className="username">
              <h3>{username}</h3>
              {status && <p>In Meeting</p>}
          </div>
      </div>
      <button>Start a conversation</button>                
                    
        
    </div>
  )
}

export default EmptyComponent