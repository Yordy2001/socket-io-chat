import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../App.css'
import './nav.css'
import camera from "../../assets/img/icon_camera.svg"

export default function Nav() {

    let activeStyle = {
        textDecoration: "none",
    };

    let activeClassName = "none";

    return (
        <nav className='nav-component'>
            <ul>
                <li className='camera-icon'><img src={camera} alt="camera icon" /></li>

                <li>
                    <NavLink
                        to="/"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        CHATS
                    </NavLink>
                    {/* <span className='badge-chats'>1</span> */}
                </li>
                <li>
                    <NavLink
                        to="/status"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        STATUS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/calls"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        CALLS
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}