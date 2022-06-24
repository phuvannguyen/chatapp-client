import React from 'react'
import HeaderSideComponnent from '@components/HeaderSideComponet'
import ContactComponent from '@components/ContactComponent'
import "./SiderbarComponent.css"

function SiderbarComponent({contact}) {
  const { contacts, error, success} = contact;

  return (
    <div className="siderbar">
      <HeaderSideComponnent />
      {success && 
        <div className="main_siderbar">        
          {contacts.map((value, index) => {
            return (<ContactComponent value={value} />)         
            

          })}
      </div>
      }
      {/* check error occur when can't reload data from server */}
      {error && 
        <div className="main_siderbar">
          <div className="alert alert-danger">
            {error}
          </div>          
        </div>
      }    

    </div>   
    
  )
}

export default SiderbarComponent