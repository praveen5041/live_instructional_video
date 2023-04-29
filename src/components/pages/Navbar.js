import React from 'react'
import logo from '../images/logo.png'
// import { NavLink} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src={logo} alt='logo' className='logo'></img>
        Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link  "   href="/">Home</a>
          </li>
           
          <li className="nav-item">
            <a className="nav-link  " href="/signup">SignUp</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="/login">Login</a>
          </li>
           
        </ul>
         
      </div>
    </div>
  </nav>
  )
}

export default Navbar