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
    const [showSettings, setshowSettings] = useState(false)

    const displayInput = (e) => {
        setShowInput(false)
    }

    const displayHeader = (e) => {
        setShowInput(true)
    }

    const logOut = async () => {
        try {
            await axios.post('http://localhost:4000/logout')
            localStorage.setItem('chat-session', JSON.stringify(false))
            navigate('/login')
        } catch (error) {
            console.log(error)
        }

    }
    const handleModal =() =>{
        setshowSettings(!showSettings)
    }

    return (
        <div className='header-component'>
            {
                showInput ?
                    <>
                        <header>
                            <h1>WhatsApp</h1><div className='icons-header'>

                                <button onClick={displayInput} className='btn-search'>
                                    <img src={lupa} alt="searh icon" />
                                </button>

                                <img src={menu_vertical} alt="menu vertical" onClick={handleModal} />
                            </div>
                            {
                                showSettings&& <div className='btn-setting'>
                                <button onClick={()=>{navigate('/profile')} } >setting</button>
                                <button onClick={logOut}>logout</button>
                                <button onClick={handleModal}>back</button>
                                </div>
                            }
                            
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
