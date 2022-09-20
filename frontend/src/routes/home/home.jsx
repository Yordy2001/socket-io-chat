import React, { useState, useContext, useEffect } from 'react'
import { SocketContext } from '../../context/socket'
import Header from '../../components/header/herder'
import Chats from '../../components/chats/chats'
import friendsApi from '../../utils/API/fetchUser'

import '../../App.css'
import './home.css'

const userApi = new friendsApi()
export default function Home() {

    const socket = useContext(SocketContext)

    const [openChat, setOpenChat] = useState({
        open: false,
        chatId: 0
    })
    const [chats, setChats] = useState([])

    const getData = async ()=> {
        const data = await userApi.getFriends()
        setChats(data)
        console.log(chats);
    }

    useEffect(() => {
        socket.emit('client:chats', openChat.chatId)
        getData()

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
                                            <div className='chats-content' key={each?.id} onClick={() => setOpenChat({ open: true, chatId: each.tel })}>
                                                <img src={`${import.meta.env.VITE_SERVER_URL}` + each?.portada} alt="user picture" />

                                                <div className='chats-name-msg'>
                                                    <h3>{each?.name}</h3>
                                                </div>

                                                <div className='chats-content-right'>
                                                    <p>8pm</p>
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
