// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css';
import Board from './Components/Board.jsx';

const App = () => {
  return(
    <div className="App">
    <div className='bg_img_cont'>
    <h1> Williams College</h1>
    <h2> 62' Center for Theator and Dance Upcoming Events</h2>
    </div>
    <Board />
    </div>
  );
  
};

export default App;
