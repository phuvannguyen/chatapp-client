import React from 'react'
import "./ChatMainComponent.css"
import Messager from '@pages/Messager';

function ChatMainComponent({chats, chatRef}) {
  const {content, error, success} = chats;  
  
  return (
    <div className='chat-main' ref={chatRef}>
      {error && (<Messager error={error} success={success}/>)}
      {content.map((element, index) => 
        <Messager key={index} chat={element} error={error} success={success}/>)}
             
    </div >
    
  )
}

export default ChatMainComponent