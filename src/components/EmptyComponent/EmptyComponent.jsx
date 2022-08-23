import React, { useEffect } from 'react'
import "./EmptyComponent.css"
import { Avatar} from '@mui/material';
import UserService from '../../service/user.service';
import { useNavigate } from 'react-router-dom';

function EmptyComponent({infoUser, handleGreeting, idRoom}) {
  
  const {content} = infoUser;
  const name = content.profile?.name || content.username;
  const url = content.profile?.avatar_url || "";
  const status = content.profile?.status;
  
  
  return (
    <div className='empty main'>
      <h1>Welcome, {name}</h1>
      <div className="avatar">                
          <Avatar alt={name} src={url} />
          <div className="username">
              <h3>{name}</h3>
              {status && <p>In Meeting</p>}
          </div>
      </div>
      <button onClick={handleGreeting}>Start a conversation</button>                
                    
        
    </div>
  )
}

export default EmptyComponent