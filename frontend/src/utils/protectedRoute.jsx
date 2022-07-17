import { Navigate } from 'react-router-dom'

export default function PrivateRouter({ children })  {

    const user = localStorage.getItem('chat-session')
    const isAuth = JSON.parse(user)
    if (!isAuth) {
        return <Navigate to="/login"></Navigate>
    }

    return children
}
