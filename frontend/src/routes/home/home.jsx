import React, { useState, useContext, useEffect } from 'react'
import { SocketContext } from '../../context/socket'

import '../../App.css'
import './home.css'

import Header from '../../components/header/herder'
import avatar from '../../assets/img/avatar.svg'
import Chats from '../../components/chats/chats'

export default function Home() {

    const socket = useContext(SocketContext)

    const [chatId, setChatId] = useState(0)
    const [openMessage, setOpenMessage] = useState(false)
    const [chats, setChats] = useState([
        {
            id: 1,
            userName: "Yordy",
            tel: "829-455-8758",
            portada: avatar,
            time: '1:18p.m',
            lastMessage: 'hola'
        }
    ])

    useEffect(() => {
        socket.emit('client:logged', '8294558758')
        socket.on('server:conneted', (socket)=>{
            console.log(socket)
        })
    }, [socket])

    return (
        <>
            {/* <Chats></Chats> */}
            <Header></Header>
            <div className='chat-route'>
                {
                    chats

                        ?
                        chats?.map(each => {
                            return (
                                <div className='chats-content' key={each.id}>
                                    <img src={each.portada} alt="user picture" />

                                    <div className='chats-name-msg'>
                                        <h3>{each.userName}</h3>
                                        <p>{each.lastMessage}</p>
                                    </div>

                                    <div className='chats-content-right'>
                                        <p>{each.time}</p>
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

    )
}
