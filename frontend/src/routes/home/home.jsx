import React, { useState } from 'react'

import '../../App.css'
import './home.css'

import Header from '../../components/header/herder'
import avatar from '../../assets/img/avatar.svg'

export default function Home() {

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
        },
        {
            id: 2,
            userName: "Yordy",
            tel: "829-455-8758",
            portada: avatar,
            time: '1:18p.m',
            lastMessage: 'hola'
        },
        {
            id: 3,
            userName: "Yordy",
            tel: "829-455-8758",
            portada: avatar,
            time: '1:18p.m',
            lastMessage: 'hola'
        }
    ])

    return (
        <>
            <Header></Header>
            <div className='chat-route'>
                {
                    chats

                        ?
                        chats?.map(each => {
                            return (
                                <div className='chats-content'>
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
