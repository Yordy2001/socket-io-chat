import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home'
import Register from './routes/register/register'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={ <Home /> }
        />  

        <Route
          path='/register'
          element={ <Register /> }
        />  

        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>

    </div>
  )
}

export default App

