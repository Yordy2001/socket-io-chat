import React, { useContext } from 'react'
import { useState } from 'react'
import { SocketContext } from '../../context/socket'

import './chats.css'

import portada from  '../../assets/img/avatar.svg'
import arrow from '../../assets/img/arrow_left.svg'
import send from '../../assets/icon/icons8-send-25.png'

export default function Chats(props) {

    const socket = useContext(SocketContext)

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    let {num} = JSON.parse(localStorage.getItem('chat-session'))

    socket.on('server:messages', (msg)=>{
        console.log(msg);
        setMessages([...messages, msg.data])
    })

    const handleChange = (e)=>{
        setMessage(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        socket.emit('client:messages', {message, tel:props.id})  
    }

    return (
        <div className='chats'>
            <div className="header">
                <img src={arrow} alt="" onClick={()=>{props.handleOpen()}}/>
                <img src={portada} alt="" />
                <div>
                    <p>Yordy</p>
                    <p>online</p>
                </div>
            </div>
            <div className="messages-content">
                {/* <div className='msg-block'> */}
                    {
                        messages?.map((msg, key) => {
                            return<div className='msg-block' key={key}>
                                <p className= {`messsge ${num === msg.tel ? 'friend-msg' : 'user-msg'}`}>{msg.message}</p>
                            </div>
                        })
                    }
                {/* </div> */}
            </div>
            <div className="form-message">
                <form className='form-chats' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Message' onChange={handleChange}/>
                </form>
                <button className='btn-message' type='submit' onSubmit={handleSubmit}>
                    <img src={send} alt="" />
                </button>
            </div>
        </div>
    )
}
