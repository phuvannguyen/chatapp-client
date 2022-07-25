import React from 'react'
import MessagerComponent from '@components/MessagerComponent'

function Messager({chat, error, success}) { 
  return (
    <MessagerComponent chat={chat} error={error} success={success}/>
  )
}

export default Messager