import React from 'react'
import { useFormik } from 'formik'

export default function register() {

    const formik = useFormik({
        initialValues:{
            tel:'',
        },
        onSubmit: values =>{
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <form onSubmit={formk.handleSubmit}>
            <label htmlFor="tel">Telefono</label>
            <input 
            id="tel"
            type="tel" 
            name="tel" 
            onChange={formik.handleChange}
            value={formik.values.email}
            />

            <button type='Submit'></button>
        </form>
    )
}
