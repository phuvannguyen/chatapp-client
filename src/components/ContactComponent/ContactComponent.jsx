import React from 'react'
import "./ContactComponent.css"
import { Avatar } from '@mui/material';

function ContactComponent() {
  return (
    <div className="chat_header">
      <div className='chat_avatar'>
        <Avatar alt="Ngaosenpai" src="" />
        <div className="chat_headerinfo">
          <h3>NgạoSenpai</h3>
          <p>Em đang làm việc ở Đà Nẵng</p>                   
        </div>   
               

      </div>
        
    </div>
  )
}

export default ContactComponent