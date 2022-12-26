import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../../context/socket';

import friendsApi from '../../utils/API/fetchUser';
import fetchAuth from '../../utils/API/fetchAuth';
import del from '../../assets/icon/icons8-send-100.png';

import './settings.css'
import Modal from '../modal/modal';


const userApi = new friendsApi()
const auth = new fetchAuth()
export default function Settings() {

    const socket = useContext(SocketContext)
    const navigate = useNavigate()
    const [contact, setContact] = useState({
        tel: ''
    })
    const [openInput, setOpenInput] = useState(true)
    const [message, setMessage] = useState({
        msg: '',
        showMessage: false
    })
    const [openModal, setOpenModal] = useState(false)
    const handleChange = (e) => {
        setContact({
            tel: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await userApi.addFriend(contact)
        } catch ({ response }) {
            setMessage({ msg: response.data.msg, showMessage: true })
        }
        setOpenInput(false)
    }

    const handleClose = () => {
        setOpenModal(false)
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
        // <Modal open={openModal} onClose={handleClose}>
        <>
            {
                openInput
                    ?
                    <nav className='setting-nav'>
                        <ul>
                            <li><button>New Group</button></li>
                            <li><button onClick={() => { setOpenInput(false) }}>Add user</button></li>
                            <li><button>Setting</button></li>
                            <li><button onClick={logOut} >logOut</button></li>
                        </ul>
                    </nav>
                    :
                    <form onSubmit={handleSubmit} className='form-request'>
                        <div className='contact-header'>
                            <h3>Contacts</h3>
                            <button onClick={()=>[setOpenInput(true)]}>X</button>
                        </div>
                        <input
                            type="tel"
                            placeholder='tel'
                            onChange={handleChange}
                        />
                        <p>{message.showMessage ? message.msg : ''}</p>
                        <button type='submit'>Add</button>
                    </form>
            }
        </>
        // </Modal>
    )
}
