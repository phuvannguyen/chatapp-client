import React from 'react'
import { useParams } from 'react-router-dom';
import { useUserContext } from '@contexts/UserContext';
import "./MessagerComponent.css"

function MessagerComponent({chat, error, success}) {
    const {userLocal} = useUserContext();
    
    
    const username = chat.profile?.name || chat.owner.username;
    const idChater = chat.owner._id;
    const content = chat.content;
    const timeChat = new Date(chat.createdAt).toLocaleString();
       
    const currentTime = new Date().toLocaleString();
    
    
  return (
    <div>
      {!success && 
      <p className="chat_message">
        <span className="username">""</span>
            {error}
        <span className="timestamp">{currentTime}</span>
      </p>}
      {success && 
      <p className={userLocal._id === idChater ? "chat_message": "chat_message chat_receiver"} >
        <span className="username">{username}</span>
            {content}
        <span className="timestamp">{timeChat}</span>
    </p>    
    }

      
    </div>
  )
}

export default MessagerComponent