import React from 'react'
import "./MessagerComponent.css"

function MessagerComponent() {
    const currentTime = new Date().toUTCString()
  return (
    <div>            
      <p className="chat_message">
        <span className="username">NgạoSenPai</span>
            This is the first message
        <span className="timestamp">{currentTime}</span>
      </p>
      <p className="chat_message chat_receiver">
          <span className="username">Phu Nguyen</span>
              This is the second message
          <span className="timestamp">{currentTime}</span>
      </p>
    </div>
  )
}

export default MessagerComponent