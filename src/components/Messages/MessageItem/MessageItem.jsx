import React from 'react'
import s from './MessageItem.module.css'

const MessageItem = (props) => {
  return (
    <div>
      {props.messageText}
    </div>
  )
}

export default MessageItem