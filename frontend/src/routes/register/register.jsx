import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import fetchAuth from '../../utils/API/fetchAuth';

import '../../App.css'
import './register.css'
import avatar from '.././../assets/img/avatar.svg'
import loginSvg from '../../assets/img/app-logo-hey.svg'

const auth = new fetchAuth()
export default function Register() {

    const navigate = useNavigate()
    const formData = new FormData()

    const [file, setFile] = useState()

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
                await auth.register(formData)
                navigate('/login')

            } catch (error) {
                console.log(error);
            }
        },
    })

    const handleFile = (e) => {
        setFile(e.target.files?.[0]);
    }

    return (
        <div className='register-page'>
            <div className='register-presentation'>
                <div className='register-image'>
                    <img src={loginSvg} alt="login image" />
                </div>
                <h3>Conectate con todos en cualquier lugar!</h3>
            </div>
            <div className='form-content'>
                <h1>Register</h1>
                <form onSubmit={formik.handleSubmit} className='register-form'>
                <input
                        id="portada"
                        type="file"
                        name="portada"
                        placeholder='Portada'
                        autoComplete='off'
                        className='input-file'
                        onChange={handleFile}
                    />
                    <label htmlFor="portada" className='lbl-portada'>
                        <img src={avatar} alt="input avatar" />
                    </label>

                    <input
                        type="tel"
                        name="tel"
                        placeholder='Phone'
                        autoComplete='off'
                        required
                        onChange={formik.handleChange}
                        value={formik.values.tel} />
                    <input
                        type="text"
                        name="name"
                        autoComplete='off'
                        placeholder='Name'
                        required
                        onChange={formik.handleChange}
                        value={formik.values.name} />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        autoComplete='off'
                        required
                        onChange={formik.handleChange}
                        value={formik.values.password} />

                    <textarea
                        id="info"
                        type="text"
                        name="info"
                        placeholder='Info'
                        autoComplete='off'
                        onChange={formik.handleChange}
                        value={formik.values.email} />

                    <div className="buttons-container">
                        <button type='button' className='btn-next' onClick={()=>{navigate('/register')}}>Login</button>
                        <button type='submit' className='btn-next' >Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
