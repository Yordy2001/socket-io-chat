import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home'
import Login from './routes/login/login'
import Register from './routes/register/register'
import PrivateRouter from './utils/protectedRoute'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />

        <Route
          path='/status'
          element={ <Status /> }
        />  

        <Route
          path='/register'
          element={<Register />}
        />

        <Route
          path='/login'
          element={<Login />}
        />


        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>

    </div>
  )
}

export default App
