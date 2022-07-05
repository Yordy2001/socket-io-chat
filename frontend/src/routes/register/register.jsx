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
    const [inputFile, setInputfile] = useState();
    
    const formik = useFormik({
        initialValues: {
            tel: '',
            name: '',
            portada: '',
            info: ''
        },
        onSubmit: async (values) => {
            const formData = new FormData();
            try {
                formData.set('avatar', inputFile)

                for (let [key, value] of Object.entries(values)) {
                    formData.set(key, value);
                }

                await axios.post('http://localhost:4000/register', formData)
                navigate('/')
            } catch (error) {
                console.log(error)
            }
           
           
        },
    })

    const handleFile = (e) =>{
        setInputfile(e.target.files?.[0]);
    }

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

                                <button className='btn-next' type='button' onClick={handleForm}>Next</button>
                            </>
                            :
                            <>
                                <label htmlFor="portada"><img src={portada} alt="" /></label>
                                <input
                                    onChange={handleFile}
                                    id="portada"
                                    type="file"
                                    name="avatar"
                                    placeholder='Portada'
                                    className='input-file'
                                    />

                                <input
                                    id="info"
                                    type="text"
                                    name="info"
                                    placeholder='Info'
                                    onChange={formik.handleChange}
                                    value={formik.values.email} />
                                
                                <div className="form-buttons">
                                    <button type='button' className='btn-opmit' onClick={handleForm} >opmit</button>
                                    <button type='submit' className='btn-next' >Send</button>
                                </div>
                            </>
                    }
                </form>
            </div>
        </div>
    )
}
