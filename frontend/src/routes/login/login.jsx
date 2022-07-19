import React  from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';

import '../../App.css'
import './login.css'

export default function Login() {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            tel: '',
            name: '',
        },
        onSubmit: async (values) => {
            try {
                await axios.post('http://localhost:4000/login', values)
                localStorage.setItem('chat-session' , JSON.stringify(true))
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
                        type="text"
                        name="name"
                        placeholder='Name'
                        required
                        onChange={formik.handleChange}
                        value={formik.values.name} />

                    <button className='btn-next' type='submit' >Enviar</button>
                </form>
            </div>
        </div>
    )
}
