import React from 'react'
import "./InputMainComponent.css"
import { IconButton} from '@mui/material';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined'
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined'
import FilePresentIcon from '@mui/icons-material/FilePresent'
import CreateIcon from '@mui/icons-material/Create';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useParams } from 'react-router-dom'


function InputMainComponent({handleSubmit, handleOnChange, chat}) {
  const { idRoom } = useParams();  
  return (
    <div className="input-main">
      <div className="input-form">
        <SentimentSatisfiedIcon />
        <form onSubmit={(e) => handleSubmit(idRoom, chat.content, e)} type="submit">
          <input type="text" placeholder='Type a message' value={chat.content} onChange={handleOnChange} />
          <CreateIcon />
          <button >
            <SendRoundedIcon />            
          </button>        
          
        </form>

      </div>
      <div className="icon">
        <IconButton>
          <FilePresentIcon />
        </IconButton>
        <IconButton>
          <ContactMailOutlinedIcon />          
        </IconButton>
        <IconButton>
          <MicNoneOutlinedIcon />
        </IconButton>
      </div>

    </div>
  )
}

export default InputMainComponent