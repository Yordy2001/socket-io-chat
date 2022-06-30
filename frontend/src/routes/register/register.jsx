import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';

import '../../App.css'
import './register.css'
import { useState } from 'react'

import portada from '../../assets/img/avatar.svg' 

export default function Register() {
    const navigate = useNavigate()
    const [first, setFirst] = useState(true)
    const formik = useFormik({
        initialValues: {
            tel: '',
            name: '',
            file: '',
            info: ''
        },
        onSubmit: async (values) => {
            await axios.post('http://localhost:4000/register', values)
            navigate('/')
        },
    })
    const handleForm = () => {
        console.log("holaaaaaa")
        setFirst(!first)
    }


    return (
        <div className='register-page'>
            <div className='form-content'>
                <h1>Register</h1>
                <form onSubmit={formik.handleSubmit}>
                    {
                        (first) ?
                            <>
                                <input
                                    type="tel"
                                    name="tel"
                                    placeholder='Phone'
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.email} />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Name'
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.email} />

                                <button className='btn-next' type='button' onClick={handleForm}>Next</button>
                            </>
                            :
                            <>
                                <input
                                    id="portada"
                                    type="file"
                                    name="portada"
                                    placeholder='Portada'
                                    className='input-file'
                                    onChange={formik.handleChange}
                                    value={formik.values.email} />
                                <textarea
                                    id="info"
                                    type="text"
                                    name="info"
                                    placeholder='Info'
                                    onChange={formik.handleChange}
                                    value={formik.values.email} />
        
                                <button type='button' onClick={handleForm}>opmit</button>
                                <button type='submit' className='btn-next' >Send</button>
                            </>            
                    }
                </form>
            </div>
        </div>
    )
}
