import React from 'react'
import "./ContactComponent.css"
import { Avatar } from '@mui/material';

function ContactComponent({ value }) {
  return (    
    <div className="chat_header">
      <div className='chat_avatar'>
        <Avatar alt={value.title} src="" />
        <div className="chat_headerinfo">
          <h3>{value.title}</h3>
          <p>Have nothing message</p>                 
        </div>               

      </div>
        
    </div>
  )
}

export default ContactComponent