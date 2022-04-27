import React from 'react'
import "./HeaderSideComponent.css"
import { Avatar, IconButton} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import DialpadOutlinedIcon from '@mui/icons-material/DialpadOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

function HeaderSideComponnent() {
  return (
    <div className='header-sider'>
        <div className="user-info">
            <div className="avatar">
                <Avatar alt="Phu Nguyen" src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
                <div className="username">
                    <h3>Phu Nguyen</h3>
                    <p>In Meeting</p>
                </div>
            </div>            
            <MoreHorizIcon />        
        </div>
        <div className="search">
            <div className="search-form">
                <SearchIcon />
                <form >
                    <input type="text"  placeholder='People, Users, Group'/>
                </form>
            </div>
            <DialpadOutlinedIcon />     
        </div>
        <div className="icon">
            <div className="chat">
                <IconButton>
                    <ChatBubbleOutlineOutlinedIcon />
                </IconButton>
                <p>Chats</p>
            </div>
            <div className="contacts">
                <IconButton>
                    <MenuBookOutlinedIcon />
                </IconButton>
                <p>Contacts</p>
            </div>
            <div className="notification">
                <IconButton>
                    <NotificationsNoneRoundedIcon />
                </IconButton>
                <p>Notifications</p>
            </div>
        </div>
        
    </div>
  )
}

export default HeaderSideComponnent