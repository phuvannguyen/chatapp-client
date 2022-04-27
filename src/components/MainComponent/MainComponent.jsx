import React from 'react'
import "./MainComponent.css"
import HeaderMainComponent from '@components/HeaderMainComponent'
import ChatMainComponent from '@components/ChatMainComponent'
import InputMainComponent from '@components/InputMainComponent'
import EmptyComponent from '@components/EmptyComponent'

function MainComponent() {
  const trueOrFalse = Math.random() < 0.5;
  return (
    <div className="main">
      <HeaderMainComponent />
      {trueOrFalse ? <ChatMainComponent /> : <EmptyComponent />}
      <InputMainComponent />
    </div>
  )
}

export default MainComponent