import React from 'react'
import "./MainComponent.css"
import HeaderMainComponent from '@components/HeaderMainComponent'
import ChatMainComponent from '@components/ChatMainComponent'
import InputMainComponent from '@components/InputMainComponent'


function MainComponent() {
  
  return (
    <div className="main">
      <HeaderMainComponent />
      <ChatMainComponent />
      <InputMainComponent />
    </div>
  )
}

export default MainComponent