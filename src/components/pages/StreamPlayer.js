import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Streamplayer.css'
import start from '../images/start.jpeg'
import join from '../images/join.png'
function StreamPlayer() {
    const [emotion, setEmotion] = useState('');
  return (
    // <div className='container-fluid d-flex justify-content-center stream'>
    //     <ul>
    //      <NavLink className="nav-item nav-link same" to='http://localhost:5002/'>
    //       Start Meeting
    //     </NavLink>
    //     <NavLink className="nav-item nav-link same" to='/userdashboard'>
    //       Join Metting
    //     </NavLink>
    //     </ul>
    // </div>

    <div className="App">
    <div className="video-container">
      <div className="video-instruction">
        {/* Live instructional video goes here */}
        <p>Live video</p>
        <NavLink className="nav-item nav-link same" to='http://localhost:5002/'>
        <img src={start} alt="Logo" className="logo" />
           Start Meeting
         </NavLink>
      </div>
      <div className="video-student">
        {/* Live video of the student listening goes here */}
        <p>student vide0</p>
        <NavLink className="nav-item nav-link same" to='http://localhost:5002/'>
        <img src={join} alt="Logo" className="logo" />
           Join Metting
         </NavLink>
        <div className="emotion-status">
          <h2>Emotional Status:</h2>
          <input type="text" value={emotion} onChange={(e) => setEmotion(e.target.value)} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default StreamPlayer