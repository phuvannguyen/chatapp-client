import React from 'react'
import "./ContactComponent.css"
import { Avatar} from '@mui/material';

function ContactComponent({value, handleUserClick}) {  
  const url = value?.profile?.avatar_url || ""; //handle case underfind.
  const username = value.profile?.name || value.username;
  
  return (    
    <div  className="chat_header" >
      {value && 
        <div className='chat_avatar' onClick={(e) => handleUserClick(value._id, e)} role="button" tabIndex={0}>
          <Avatar alt={value.title} src={url} />
            <div className="chat_headerinfo">
              <h3>{username}</h3>                             
            </div>                    

      </div>
      }       
        
    </div>
    
  )
}

export default ContactComponent