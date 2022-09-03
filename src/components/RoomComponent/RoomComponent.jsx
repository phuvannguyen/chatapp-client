import React from 'react'
import "./RoomComponent.css"
import { Avatar} from '@mui/material';

function RoomComponent({value, handleUserClick, chat, user, arrivalChat}) {    
  const url = value?.profile?.avatar_url || "";  
  const content = arrivalChat? arrivalChat.content: chat[chat.length - 1]?.content || "Have nothing messages"; //handle case underfind.
  
  const titleRoom = user.length === 1 ? 
                    user[0]?.profile?.name || user[0]?.username 
                    :
                    value.title
  return (    
    <div  className="chat_header"  onClick={(e) => handleUserClick(value._id, e)} role="button" tabIndex={0}>
      <div className='chat_avatar'>
        <Avatar alt={value.title} src={url} />
          <div className="chat_headerinfo">
            <h3>{titleRoom}</h3>
            <p>{content}</p>                 
          </div>                      

      </div>
        
    </div>
  )
}

export default RoomComponent