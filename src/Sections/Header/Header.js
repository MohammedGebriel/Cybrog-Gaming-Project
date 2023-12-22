import './Header.css'
import React from 'react'
import Logo from '../../../src/assets/images/logo.png'
import {Link} from 'react-router-dom'
import {NavItem} from '../../Components/index'

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container d-flex ">    
          <img className="navbar-brand" src={Logo} alt="" width="250px"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <NavItem>
                  <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </NavItem>
              <NavItem>
              <a className="nav-link" href="#/">Browse</a>
              </NavItem>
              <NavItem>
              <a className="nav-link" href="#/">Details</a>
              </NavItem>
              <NavItem>
              <a className="nav-link " href='/'>Streams</a>
              </NavItem>
              <NavItem>
              <Link to="/profile" className="nav-link">Profile</Link>
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header