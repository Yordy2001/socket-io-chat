import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={ <Chats /> }
        />  

        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>

    </div>
  )
}

export default App

