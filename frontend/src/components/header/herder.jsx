import React, { useState } from 'react'
import axios from 'axios'

import './header.css'
import Nav from '../nav/nav'
import lupa from '../../assets/img/icons_search.svg'
import menu_vertical from '../../assets/img/icons-menu-vertical.png'
import arrow_left from '../../assets/img/arrow_left.svg'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    const [showInput, setShowInput] = useState(true)

    const displayInput = (e) => {
        setShowInput(false)
    }

    const displayHeader = (e) => {
        setShowInput(true)
    }

    const logOut = async () => {
        console.log("logout")
        try {
            await axios.post('http://localhost:4000/logout')
            // socket.emit('client:loggedOut', 'loggedOut')
            localStorage.setItem('chat-session', JSON.stringify(false))
            navigate('/login')
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='header-component'>
            {
                showInput ?
                    <>
                        <header>
                            <h1>WhatsApp</h1><div className='icons_header'>

                                <button onClick={displayInput} className='btn-search'>
                                    <img src={lupa} alt="searh icon" />
                                </button>

                                <img src={menu_vertical} alt="menu vertical" onClick={logOut} />
                            </div>
                        </header>
                        <Nav />
                    </>
                    :
                    <form className='form_search'>
                        <span onClick={displayHeader} className='arrow-left'> <img src={arrow_left} alt="" /> </span>
                        <input className='input-search' type="text" placeholder='Search...' />
                    </form>
            }
        </div>
    )
}
