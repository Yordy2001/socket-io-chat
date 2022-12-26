import React, { useContext, useEffect, useState, useRef } from 'react'
import { SocketContext } from '../../context/socket'
import friendsApi from '../../utils/API/fetchUser'

import './chats.css'
import arrow from '../../assets/img/arrow_left.svg'
import send from '../../assets/icon/icons8-send-25.png'

const userApi = new friendsApi()
let { num } = JSON.parse(localStorage.getItem('chat-session'))
export default function Chats(props) {

    const buttonRef = useRef(null)
    const socket = useContext(SocketContext)

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [user, setUser] = useState([])


    // Get user Friends
    const getUser = async () => {
        const data = await userApi.getFriend(props.id)
        setUser(data)
    }

    useEffect(() => {
        socket.emit('client-get-db-messages', { to: props.id, from: num })
        getUser()
    }, [])

    useEffect(() => {
        // Automate Scroll button
        buttonRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    // Get message from de db after join a chat
    socket.on('server-db-messages', (msg) => {
        setMessages(msg.data)
    })


    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit('client:message', { message, to: props.id, from: num })
        socket.emit('client-get-db-messages', { to: props.id, from: num })
        setMessage('')
    }
    return (
        <div className='chats'>
            <div className="header">
                <img src={arrow} alt="" onClick={() => { props.handleOpen() }} />
                {/* <img src={`${import.meta.env.VITE_SERVER_URL}` + 'uploads/' + user.portada} alt="" className='img-portada' /> */}
                <div>
                    <p>{user.name}</p>
                    <p>{user.online ? 'online' : 'offline'}</p>
                </div>
            </div>
            <div className="messages-content">
                {
                    messages?.map((msg, key) => {
                        return <div className='msg-block' key={key}>
                            <p className={`messsge ${num === msg.to ? 'friend-msg' : 'user-msg'}`}>
                                {msg.message}
                            </p>
                        </div>
                    })
                }
                <div ref={buttonRef} />
            </div>
            <div className="form-message">
                <form className='form-chats' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Message' value={message} onChange={handleChange} />
                    <button className='btn-message' type='submit' onSubmit={handleSubmit}>
                        <img src={send} alt="" />
                    </button>
                </form>
            </div>
        </div>
    )
}