import React from 'react'
import { useState } from 'react'

import "../../App.css"
import "./status.css"

import avatar from '../../assets/img/avatar.svg'
import menu from '../../assets/img/icons-menu-vertical.png'

import Header from '../../components/header/herder'

export default function Status() {

    const [userStatus, setuserStatus] = useState({
        status: "avatar",
        time: "8:45am",
        seen: false

    })
    const [status, setstatus] = useState([
        {
            status: "avatar",
            name: "juan🏩",
            time: "7:15pm",
            seen: false
        },
        {
            status: "avatar",
            name: "oscar",
            time: "7:15pm",
            seen: false
        },
        {
            status: "avatar",
            name: "imanol",
            time: "7:15pm",
            seen: false
        },
        {
            status: "avatar",
            name: "vla",
            time: "7:15pm",
            seen: true
        }
    ])

    return (
        <div className='status-page' >
            <Header></Header>
            <div className='status-content'>
                <div className="mystatus">
                    <img className='img-status' src={avatar} alt="" />
                    <div className="status-description">
                        <h2>my status</h2>
                        <p>{userStatus.time}</p>
                    </div>
                    <img src={menu} alt="" />
                </div>
                <h3 className='h3-status'>Recent updates</h3>
                <div className="recent-status">
                    {
                        status?.filter(seen => seen.seen === false).map((each, key) => {
                            return <div className="friend-status" key={key}>
                                <img className='img-status-no-viewed' src={avatar} alt=" status " />
                                <div className="status-description">
                                    <h2>{each.name}</h2>
                                    <p>{each.time}</p>
                                </div>
                            </div>
                        })
                    }
                </div>

                <h3 className='h3-status'>Viewed updates</h3>

                <div className="recent-status">
                    {
                        status?.filter(seen => seen.seen === true).map((each, key) => {
                            return <div className="friend-status" key={key}>
                                <img className='img-status-viewed' src={avatar} alt=" status " />
                                <div className="status-description">
                                    <h2>{each.name}</h2>
                                    <p>{each.time}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div >
    )
}
