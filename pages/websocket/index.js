import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export default function WebSocketPage() {
  const uuid = "7daea38e-8f07-44f0-aa43-ee7d67fefb2f"
  
  const domain_websocket = `http://api.play1.musagreen.com/v1/users/notification/${uuid}`
  
  const [notif, setNotif] = useState('')
  let socket

  useEffect(() => socketInitializer(), [])

  const socketInitializer = async () => {
    // await fetch(`ws://${domain}/users/notification/${uuid}`);
    socket = io(domain_websocket)

    socket.on('connect', () => {
      console.log('connected')
    })

    // socket.on('update-input', msg => {
    //   setInput(msg)
    // })

    socket.on('notification', msg => {
      setInput(msg)
    })
  }


  
  
  return (
    <div>index</div>
  )
}
