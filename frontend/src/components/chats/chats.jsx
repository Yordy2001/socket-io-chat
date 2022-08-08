import React, { useContext, useEffect  } from 'react'
import { useState } from 'react'
import { SocketContext } from '../../context/socket'

import './chats.css'

import portada from  '../../assets/img/avatar.svg'
import arrow from '../../assets/img/arrow_left.svg'

export default function Chats(tel) {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const socket = useContext(SocketContext)

    const handleChange = (e)=>{
        setMessage(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        socket.emit('client:messages', {message, tel:tel.id})
    }

    useEffect(() => {
        socket.on('server:messages', (msg)=>{
            setMessages([msg])
        })
    }, [socket])

    return (
        <div className='chats'>
            <div className="header">
                <img src={arrow} alt="" />
                <img src={portada} alt="" />
                <div>
                    <p>Yordy </p>
                    <p>online</p>
                </div>
            </div>
            <div className="messages-content">
                <div className='msg-block'>
                    {/* {
                        messages.map((msg, key) => {
                            return<div key={key}>
                                <p className='messsge user-msg'>{msg.message}</p>
                            </div>
                        })
                    } */}
                </div>
            </div>
            <div className="form-message">
                <form className='form-chats' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Message' onChange={handleChange}/>
                </form>
                <button className='btn-message' type='submit' onSubmit={handleSubmit}>send</button>
            </div>
           
        </div>
    )
}
