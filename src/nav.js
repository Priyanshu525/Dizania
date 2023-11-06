import React from 'react'
import Logo from './logo.png'

export default function nav() {
  return (
    <>
       {/* -------------------------------------------NAVBAR----------------------------------------------------------- */}
       <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#080808"}}>
  <div className="container-fluid">
    <a className="navbar-brand " href="#"><img src={Logo} className='logo' alt="Dizania" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className='d-flex justify-content-end'>

    
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
        <li className="nav-item">
          <a className="nav-link "  href="#">PARTICIPATE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link "  href="#">UPLOAD</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">DISCOVER</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href='#'>PROFILE</a>
        </li>
      </ul>
      <div className="d-flex" >
        <button className="btn" type="submit">Join Us</button>
      </div>
    </div>
    </div>
  </div>
</nav>
 
    </>
  )
}
