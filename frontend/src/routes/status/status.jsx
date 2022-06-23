import React from 'react'
import { useState } from 'react'

import "../../App.css"
import "./status.css"

import avatar from '../../assets/img/avatar.svg'
import menu from '../../assets/img/icons-menu-vertical.png'

import Header from '../../components/header/herder'

export default function Status() {

    const [status, setstatus] = useState([{
        status: "avatar",
        name: "",
        time: ""
    }])

    return (
        <>
            <div className='status-page'>
                <Header></Header>
                <div className="mystatus">
                    <img src={avatar} alt="" />
                    <div className="status-description">
                        <h2>my status</h2>
                        <p>fecha</p>
                    </div>
                    <img src={menu} alt="" />
                </div>
                


            </div>
        </>
    )
}
