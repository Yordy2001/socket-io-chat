import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={ <Home /> }
        />  

        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>

    </div>
  )
}

export default App

