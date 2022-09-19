import React, { useState, useContext, useEffect } from 'react'
import { SocketContext } from '../../context/socket'
import Header from '../../components/header/herder'
import Chats from '../../components/chats/chats'

import '../../App.css'
import './home.css'

export default function Home() {

    const socket = useContext(SocketContext)

    const [openChat, setOpenChat] = useState({
        open: false,
        chatId: 0
    })

    const [chats, setChats] = useState([])

    useEffect(() => {
        socket.emit('client:chats', openChat.chatId)
        socket.on('server:chats', (socket) => {
            setChats(socket)
        })
    }, [socket])

    const handleChat = () => {
        setOpenChat(!openChat.open)
    }

    return (
        <>
            {
                openChat.open ?
                    <Chats
                        id={openChat?.chatId}
                        handleOpen={handleChat}
                    />
                    :
                    <>
                        <Header></Header>
                        <div className='chat-route'>
                            {
                                chats

                                    ?
                                    chats?.map(each => {
                                        return (
                                            <div className='chats-content' key={each.id} onClick={() => setOpenChat({ open: true, chatId: each.tel })}>
                                                <img src={`${import.meta.env.VITE_SERVER_URL}` + each.portada} alt="user picture" />

                                                <div className='chats-name-msg'>
                                                    <h3>{each.full_name}</h3>
                                                    {/* <p>{each.lastMessage}</p> */}
                                                </div>

                                                <div className='chats-content-right'>
                                                    {/* <p>{each.time}</p> */}
                                                    <p>8</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :

                                    <h1>No hay Chats</h1>
                            }
                        </div>
                    </>
            }
        </>

    )
}
