import './App.css'
import ViewFlock from '../pages/ViewFlock'
import CreateBird from '../pages/CreateBird'
import NavigationBar from '../pages/NavigationBar'
import Home from '../pages/Home'
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import EditBird from '../pages/EditBird'

function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes style={{display: "flex"}}>
          <Route path='/' element={<NavigationBar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/viewflock' element={<ViewFlock/>}/>
            <Route path='/createbird' element={<CreateBird/>}/>
            <Route path='/editbird/:id' element={<EditBird/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
   
  )
}

export default App
