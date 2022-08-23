import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

export default function SocketNative() {
    // componentDidMount() {
    //     // let ws = new WebSocket('ws://localhost:50000');
    // }
    const uuid = "7daea38e-8f07-44f0-aa43-ee7d67fefb2f"
    var socket
    

    // const [pesan, setPesan] = useState("")
    // const [clicked, setClicked] = useState(false)
    useEffect(() => {
        socket = new WebSocket(`ws://api.play1.musagreen.com/v1/users/notification/${uuid}/ws`);
        let connect = () => {
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
        connect()
   
    }, [])
   

   

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
        onClick={send}
        >
            Hit
        </button>
        {/* <h1>{pesan}</h1> */}
        </div>
      )
}
