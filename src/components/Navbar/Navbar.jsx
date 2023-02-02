import React, { Component } from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom';
export default class navbar extends Component {
  render() {
    return (
     <div>
  <nav className={`navbar navbar-expand-lg ${style.back} fixed-top py-3`}>
    <div className="container  ">
      <a className="navbar-brand text-white fw-bold fs-2" href="#">START BOOTSTRAP </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li className="nav-item ">
            <Link className="nav-link text-white fw-bold fs-6" to ='/portfolio' >PORTFOLIO</Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link text-white fw-bold fs-6" to='/about' >ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bold fs-6" to='/contact'>CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

    )
  }
}
