import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
  <Link to='/' style={{color:'white'}} className="fw-bold fs-3 navbar-brand"> <span style={{color: 'green'}} className="text-green">React</span> and Morty</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to='/' className="nav-link text-light fw-bold" aria-current="page" href="#">Home</NavLink>
        <NavLink to='/history' className="nav-link text-light fw-bold" href="#">History</NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar