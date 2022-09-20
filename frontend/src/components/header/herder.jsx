import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import fetcAuth from '../../utils/API/fetchAuth'
import Settings from '../settings/settings'

import './header.css'
import Nav from '../nav/nav'
import lupa from '../../assets/img/icons_search.svg'
import menu_vertical from '../../assets/img/icons-menu-vertical.png'
import arrow_left from '../../assets/img/arrow_left.svg'

const auth = new fetcAuth()
export default function Header() {
    const navigate = useNavigate()
    const [showInput, setShowInput] = useState(true)
    const [showSetting, setShowSetting] = useState(false)

    const displayInput = (e) => {
        setShowInput(false)
    }

    const displayHeader = (e) => {
        setShowInput(true)
    }

    const isSetting = () =>{
        setShowSetting(true)
    }

    const logOut = async () => {
        try {
            await auth.logOut()
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
                            <h1>HEY</h1><div className='icons_header'>

                                <button onClick={displayInput} className='btn-search'>
                                    <img src={lupa} alt="searh icon" />
                                </button>
                                {
                                    showSetting
                                     ?
                                     <Settings showSetting={setShowSetting} /> 
                                     :
                                    <img src={menu_vertical} alt="menu vertical" onClick={isSetting} />
                                }
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
