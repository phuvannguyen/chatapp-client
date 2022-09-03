import React from 'react'
import "./HeaderMainComponent.css"
import { Avatar, IconButton} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

function HeaderMainComponent({titleHeader}) {  
  
  const currentTime = new Date().toString() 
  return (
    <div className="header-main">
      <div className="usermain-info">
        <Avatar alt="ngaoasen" src="" />
        <div className="username">
          <h3>{titleHeader}</h3>
          <p>{currentTime}</p>
        </div>
      </div>
      <div className="icon">
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <PeopleOutlineIcon />
        </IconButton>       

      </div>

    </div>
  )
}

export default HeaderMainComponent