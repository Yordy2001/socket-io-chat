import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'

export default function Profile() {

    const [user, setUser] = useState({})
    const formik = useFormik({
        initialValues: user,
        onSubmit: async (values) => {
            try {
                await axios.post('http://localhost:4000/login', values)

            } catch (error) {
                console.log(error)
            }
        },
    })

    const getData = async (e) => {
        // e.preventDefault()
        console.log();
        const user = await axios.get('http://localhost:4000/profile')
        setUser(user)
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(user)
    return (
        <div>profile</div>
    )
}
