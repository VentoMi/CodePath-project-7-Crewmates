import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../routes/About'
import ResponsiveAppBar from '../routes/ResponsiveAppBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<ResponsiveAppBar/>}>
        <Route index element={<App />}></Route>
       
          <Route path="/About/:id" element={<About />}/> 
        </Route>
      </Routes>
    </BrowserRouter> 
  </React.StrictMode>,
)

