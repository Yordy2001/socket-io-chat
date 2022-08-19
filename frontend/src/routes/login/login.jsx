import React, { useContext }  from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';

import { SocketContext } from '../../context/socket'

import '../../App.css'
import './login.css'

export default function Login() {

    const navigate = useNavigate()
    const socket = useContext(SocketContext)

    const formik = useFormik({
        initialValues: {
            tel: '',
            password: '',
        },
        onSubmit: async (values) => {
            try {
                await axios.post('http://localhost:4000/login', values)
                socket.emit('client:logged', values.tel)
                localStorage.setItem('chat-session' , JSON.stringify({ auth:true, num:values.tel }))
                navigate('/')

            } catch (error) {
                console.log(error)
            }
        },
    })

    return (
        <div className='register-page'>
            <div className='form-content'>
                <h1>Login</h1>
                <form onSubmit={formik.handleSubmit}>

                    <input
                        type="tel"
                        name="tel"
                        placeholder='Phone'
                        required
                        onChange={formik.handleChange}
                        value={formik.values.tel} />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        required
                        onChange={formik.handleChange}
                        value={formik.values.password} />

                    <button className='btn-next' type='submit' >Enviar</button>
                </form>
            </div>
        </div>
    )
}
