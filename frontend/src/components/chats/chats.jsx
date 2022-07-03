import React, { useContext, useEffect  } from 'react'
import { useState } from 'react'
import { SocketContext } from '../../context/socket'

import '../../App.css'
import './chats.css'
import portada from  '../../assets/img/avatar.svg'
import arrow from '../../assets/img/arrow_left.svg'

export default function Chats() {
    const [messages, setMessages] = useState("")
    const socket = useContext(SocketContext)


    const handleChange = (e)=>{
        setMessages(e.target.value)
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        socket.emit('client:messages', messages)
    }

    useEffect(() => {
        socket.on('server:messages', (msg)=>{
            console.log(msg)
        })
    },[socket])
    

    return (
        <div className='chats'>
            <div className="header">
                <img src={arrow} alt="" />
                <img src={portada} alt="" />
                <div>

                </div>
                    <p>Yordy
                    <p>online</p>
                </p>
            </div>
            <div className="chats-content">

            </div>
            <div className="form-message">
                <form className='form'>
                    <input type="text" placeholder='Message' onChange={handleChange}/>
                </form>
                <button className='btn-message' type='submit' onSubmit={handleSubmit}>send</button>
            </div>
           
        </div>
    )
}
