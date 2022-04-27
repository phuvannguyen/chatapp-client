import React from 'react'
import HeaderSideComponnent from '@components/HeaderSideComponet'
import ContactComponent from '@components/ContactComponent'
import "./SiderbarComponent.css"

function SiderbarComponent() {
  return (
    <div className="siderbar">
      <HeaderSideComponnent />     
      <div className="main_siderbar">
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
        <ContactComponent />
      </div>
    </div>   
    
  )
}

export default SiderbarComponent