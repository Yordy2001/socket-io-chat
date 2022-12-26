import React, { useContext }  from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';

import fetchAuth  from '../../utils/API/fetchAuth';
import { SocketContext } from '../../context/socket'
import loginSvg from '../../assets/img/app-logo-hey.svg'

import './login.css'
import '../../App.css'

const auth = new fetchAuth()
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
                await auth.logIn(values)
                socket.emit('connection', values.tel)
                localStorage.setItem('chat-session' , JSON.stringify({ auth:true, num:values.tel }))
                navigate('/')

            } catch (error) {
                console.log(error)
            }
        },
    })

    return (
        <div className='login-page'>
            <div className='login-description'>
                <h2>Welcome Back</h2>
                <div className='login-image'>
                    <img src={loginSvg} alt="login image" />
                </div>
            </div>
            <div className='form-content-login'>
                <h1>Login</h1>
                <form onSubmit={formik.handleSubmit} className='form-login'>
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
                    <div className='buttons-container'>
                        <button className='btn-next' type='button' onClick={()=>{navigate('/register')}} > Register</button>
                        <button className='btn-next' type='submit' >Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
