import React, {useEffect, useState} from 'react'
import ChatMainComponent from '@components/ChatMainComponent'
import { useRoomContext } from '@contexts/RoomContext'
import UserService from "../../service/user.service"

function ChatMain() {
  return (
    <ChatMainComponent />
  )
}

export default ChatMain