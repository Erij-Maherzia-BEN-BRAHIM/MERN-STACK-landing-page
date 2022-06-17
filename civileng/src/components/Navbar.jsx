import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiLogOut } from "react-icons/bi";
export default function Navbar(props) {

  return (
   
    
    <>
        <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         
        </NavLink>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to="/" className="nav-link px-2 text-secondary">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link px-2 text-white">About</NavLink></li>
          <li><NavLink to="/services" className="nav-link px-2 text-white">Services</NavLink></li>
          <li><NavLink to="/contact" className="nav-link px-2 text-white">Contact</NavLink></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-white bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
       
      {props.auth?
      <>
          <NavLink to="/login"  className="btn btn-outline-light ms-auto px-4 rounded-pill"><i className='fa fa-sign-in me-2'></i> Login</NavLink>
          <NavLink to="/register" className="btn btn-outline-warning ms-3 px-4 rounded-pill"><i className='fa fa-user-plus me-2'/>Register</NavLink>
          </>
:
<>
          <NavLink to="/dashboard" className="btn btn-outline-warning ms-3 px-4 rounded-pill"><i className='fa fa-user-plus me-2'/>Dashbord</NavLink>
          <NavLink to="/logout"  className="btn btn-outline-light px-4 ms-3 rounded-pill"><BiLogOut className='fa fa-sign-in me-2'></BiLogOut> Logout</NavLink>
         
          </>   
      }

        </div>
      </div>
      </div>
  </header>
  </> 
  )
}
