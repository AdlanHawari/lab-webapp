import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

export default function SocketNative() {
    // componentDidMount() {
    //     // let ws = new WebSocket('ws://localhost:50000');
    // }
    const uuid = "7daea38e-8f07-44f0-aa43-ee7d67fefb2f"
    // const [socket, setsocket] = useState()
    var socket

    const [pesan, setPesan] = useState("")
    // const [clicked, setClicked] = useState(false)

    let connect = (socket) => {
        console.log("Attempting Connection...");
    
        socket.onopen = () => {
            console.log("Successfully Connected");
        };
    
        socket.onmessage = msg => {
            console.log(msg);
            setPesan(msg.data)
        };
    
        socket.onclose = event => {
            console.log("Socket Closed Connection: ", event);
        };
    
        socket.onerror = error => {
            console.log("Socket Error: ", error);
        };
        };

    useEffect(() => {
        socket = new WebSocket(`ws://api.play1.musagreen.com/v1/users/notification/${uuid}/ws`);
        
        // connect()
   
    }, [])
    
    useEffect(() => {
        // socket = new WebSocket(`ws://api.play1.musagreen.com/v1/users/notification/${uuid}/ws`);
        if(socket){

            connect(socket)
        }
   
    }, [socket])

   

   

    function sendMsg(msg){
    console.log("sending msg: ", msg);
    socket.send(msg);
    };

    function send() {
        console.log("hello");
        sendMsg("0");
      }
    return (
        <div className="App">
          <button 
        //   className={classNames(
        //     "py-3 px-4 rounded-xl w-64",
        //     clicked?
        //     "bg-white text-black-500 border-error-dark":
        //     'bg-secondary text-white border '
        //     )}
        //   onClick={()=>
        //   {
        //     send()
        //     setClicked(true)
        //   }}>
        onClick={()=>{
            // send()
            console.log("sending msg:", "0");
            socket.send("0");
            setPesan(0)
        }}
        >
            Hit
        </button>
            <h1>notif: {pesan}</h1>
            <div className={classNames('h-32 w-32',
             pesan=="1"?'bg-error':"bg-secondary")}>
            </div>
        </div>
      )
}
