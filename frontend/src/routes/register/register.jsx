import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';

import '../../App.css'
import './register.css'

export default function Register() {

    const navigate = useNavigate()
    const formData = new FormData()

    const [first, setFirst] = useState(true)
    const [file, setFile] = useState('')

    const formik = useFormik({
        initialValues: {
            tel: '',
            name: '',
            info: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                formData.set("portada", file)

                for (let [key, value] of Object.entries(values)) {
                    formData.set(key, value);
                }
                await axios.post('http://localhost:4000/register', formData)
                navigate('/login')

            } catch (error) {

            }
        },
    })
    const handleForm = () => {
        setFirst(!first)
    }

    const handleFile = (e) => {
        setFile(e.target.files?.[0]);
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
                                    value={formik.values.tel} />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Name'
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.name} />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Password'
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.password} />

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
                                    onChange={handleFile}
                                />
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
