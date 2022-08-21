import React from 'react'
import HeaderSider from '@pages/HeaderSider';
import "./SiderbarComponent.css"
import Room from '@pages/Room';
import Contact from '@pages/Contact';

function SiderbarComponent(props) {
  const {contact,resultFind,handleFindUser, handleDeleteFind}   = props;  
  const { contacts, error, success, searching} = contact;
  

  return (
    <div className="siderbar">
      <HeaderSider handleFindUser={handleFindUser} handleDeleteFind={handleDeleteFind}/>
      {
        searching && <div className="main_siderbar">          
          {resultFind.result.map((value, index) => {
            return (<Contact value={value} key={index} />)
          })}
          {resultFind.error && <div className="chat_found_nothing" >{resultFind.error}</div>}

        </div>
      }      
      {success && 
        <div className="main_siderbar">        
          {contacts.map((value, index) => {
            return (<Room value={value} key={index}/>)       
            

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