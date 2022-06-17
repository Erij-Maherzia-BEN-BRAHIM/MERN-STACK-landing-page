import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Services from './Services'

export default function Home() {
  return (
    <div>
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className='display-4 fw-bolder mb-5 text-center'>We Are THE SIX-F ENGINEERING</h1>
                   
                   <p className='lead text-center fs-4 mb-5'> Simple and Creative<br /> You Will Get More Than You Expected  <br />
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non id delectus tempora ad fugiat illo ex vitae culpa recusandae! Repudiandae, excepturi? At ducimus veritatis eum et neque iste repudiandae natus.
                   </p> 
                   <div className="buttons d-flex justify-content-center">
                    <NavLink to='/contact' className='btn btn-warning me-4 rounded-pill px-4 py-2'>Get Quote</NavLink>
                    <NavLink to="/services" className='btn btn-dark me-4 rounded-pill px-4 py-2'>Our services</NavLink>
                   </div>
                   </div>
                </div>
            </div>
        </section>
        <About></About>
        <Services></Services>
        <Contact></Contact>
    </div>
  )
}
