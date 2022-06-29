import React from 'react'
import { useFormik } from 'formik'

import '../../App.css'
import './register.css'

export default function Register() {

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

    return (
        <div className='register-page'>
            <div className='form-content'>
                <h1>Register</h1>
                <form onSubmit={formik.handleSubmit}>
                    <input

                        type="tel"
                        name="tel"
                        placeholder='Phone'
                        required
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />

                    <input
                        type="text"
                        name="name"
                        placeholder='Name'
                        required
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />

                    {/* <input
                        id="portada"
                        type="file"
                        name="portada"
                        placeholder='Portada'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />

                    <textarea
                        id="info"
                        type="text"
                        name="info"
                        placeholder='Info'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    /> */}

                    <button type='submit' className='btn-next'>Next</button>
                </form>
            </div>
        </div>
    )
}
