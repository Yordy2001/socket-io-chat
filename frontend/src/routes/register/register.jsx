import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

import '../../App.css'
import './register.css'
import { useState } from 'react'

import portada from '../../assets/img/avatar.svg' 

export default function Register() {

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
        },
    })
    const handleForm = () => {
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

                                <button className='btn-next' onClick={handleForm}>Next</button>
                            </>
                            :
                            <>
                                <label htmlFor="portada" className='lbl-portada'></label>
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
                            
                                <button onClick={handleForm}>opmit</button>
                                <button type='submit' className='btn-next' >Send</button>
                            </>            
                    }
                    
                </form>
            </div>
        </div>
    )
}
