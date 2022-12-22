import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { SocketContext, socket } from './context/socket'

import './index.css'
import PrivateRouter from './utils/protectedRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SocketContext.Provider value={socket}>
        <PrivateRouter>
          <App />
        </PrivateRouter>
      </SocketContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
)
