import React from 'react'
import HeaderSider from '@pages/HeaderSider';
import "./SiderbarComponent.css"
import Contact from '@pages/Contact';

function SiderbarComponent({contact}) {
  const { contacts, error, success} = contact;

  return (
    <div className="siderbar">
      <HeaderSider />
      {success && 
        <div className="main_siderbar">        
          {contacts.map((value, index) => {
            return (<Contact value={value} key={index}/>)       
            

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