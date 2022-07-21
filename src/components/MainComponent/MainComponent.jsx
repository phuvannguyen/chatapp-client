import React, { useEffect } from 'react'
import "./MainComponent.css"
import HeaderMainComponent from '@components/HeaderMainComponent'
import ChatMainComponent from '@components/ChatMainComponent'
import InputMainComponent from '@components/InputMainComponent'
import HeaderMain from '@pages/HearderMain'
import ChatMain from '@pages/ChatMain'
import InputMain from '@pages/InputMain'


function MainComponent({roomState}) {   
  
  return (
    <div className="main">
      <HeaderMain roomState={roomState}/>
      <ChatMain roomState={roomState}/>
      <InputMain roomState={roomState}/>
    </div>
  )
}

export default MainComponent