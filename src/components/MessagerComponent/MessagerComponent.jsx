import React from 'react'
import { useParams } from 'react-router-dom';
import "./MessagerComponent.css"

function MessagerComponent({chat, error, success}) {
    let { id } = useParams(); 
    
    const username = chat.profile?.name || chat.owner.username;
    const idChater = chat.id;
    const content = chat.content;
    const timeChat = new Date(chat.createdAt).toUTCString();
       
    const currentTime = new Date().toUTCString()
    
    
  return (
    <div>
      {!success && 
      <p className="chat_message">
        <span className="username">""</span>
            {error}
        <span className="timestamp">{currentTime}</span>
      </p>}
      {success && 
      <p className={id === idChater ? "chat_message": "chat_message chat_receiver"}>
        <span className="username">{username}</span>
            {content}
        <span className="timestamp">{timeChat}</span>
    </p>    
    }

      
    </div>
  )
}

export default MessagerComponent