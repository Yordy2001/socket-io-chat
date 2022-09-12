import axios from 'axios'
import React, { useContext, useEffect, useState, useRef } from 'react'
import { SocketContext } from '../../context/socket'

import './chats.css'
import arrow from '../../assets/img/arrow_left.svg'
import send from '../../assets/icon/icons8-send-25.png'

export default function Chats(props) {

    const buttonRef = useRef(null)
    const socket = useContext(SocketContext)

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [user, setUser] = useState([])
    let { num } = JSON.parse(localStorage.getItem('chat-session'))

    socket.on('server:messages', (msg) => {
        setMessages([...messages, msg.data])
    })

    const getUser = async () => {
        const { data } = await axios.get(`http://localhost:4000/${props.id}`)
        setUser(data)
        console.log(data);
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        buttonRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit('client:messages', { message, tel: props.id })
    }

    return (
        <div className='chats'>
            <div className="header">
                <img src={arrow} alt="" onClick={() => { props.handleOpen() }} />
                <img src={'http://localhost:4000/uploads/' + user.portada} alt="" />
                <div>
                    <p>{user.full_name}</p>
                    <p>online</p>
                </div>
            </div>
            <div className="messages-content">
                {
                    messages?.map((msg, key) => {
                        return <div className='msg-block' key={key}>
                            <p className={`messsge ${num === msg.tel ? 'friend-msg' : 'user-msg'}`}>
                                {msg.message}</p>
                        </div>
                    })
                }
                <div ref={buttonRef} />
            </div>
            <div className="form-message">
                <form className='form-chats' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Message' onChange={handleChange} />
                    <button className='btn-message' type='submit' onSubmit={handleSubmit}>
                        <img src={send} alt="" />
                    </button>
                </form>
            </div>
        </div>
    )
}
