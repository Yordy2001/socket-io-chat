import React, { useState } from 'react'
import friendsApi from '../../utils/API/fetchUser'

import './settings.css'

const userApi = new friendsApi()
export default function Settings() {

    const [contact, setContact] = useState({
        tel: ''
    })
    const [openInput, setOpenInput] = useState(true)
    const [message, setMessage] = useState({
        msg: '',
        showMessage:false
    })

    const handleChange = (e) => {
        setContact({
            tel: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await userApi.addFriend(contact)
        } catch ({response}) {
            setMessage({msg: response.data.msg, showMessage: true})
            console.log(response.data.msg);
        }
        setOpenInput(false)
    }

    return (
        <>
            {
                openInput 
                    ?
                    <nav className='setting-nav'>
                        <ul>
                            <li><button>New Group</button></li>
                            <li><button onClick={()=>{setOpenInput(false)}}>Add user</button></li>
                            <li><button>Setting</button></li>
                        </ul>
                    </nav>
                    :
                    <form onSubmit={handleSubmit} className='form-request'>
                        <input
                            type="tel"
                            placeholder='tel'
                            onChange={handleChange}
                        />
                        { message.showMessage ? message.msg : '' }
                        <button type='submit'>Add</button>
                    </form>
            }
        </>
    )
}
