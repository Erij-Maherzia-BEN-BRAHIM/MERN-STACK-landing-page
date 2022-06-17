import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="/assets/about.jpg" alt="about" className="w-75 mt-5"/>
                    
                    
                </div>
                <div className="col-md-6">
                    <h3 className="fs-5 mb-0">About Us</h3>
                    <h1 className="display-6 mb-2"> Who  <b> We</b> Are</h1>
<hr className="w-50" />
<div className="lead mb-4">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, quasi repudiandae amet maiores, rerum magnam voluptate sunt dolor corporis temporibus earum sint itaque ut dolores officiis mollitia cumque ipsam adipisci.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veritatis provident saepe, dolor laboriosam debitis aperiam accusantium est incidunt corporis ut, placeat accusamus assumenda necessitatibus voluptates beatae qui vitae ratione?
         
</div>
<NavLink to="/services" className="btn btn-warning  rounded-pill py-2">Get Started</NavLink>
<NavLink to="/contact" className="btn btn-outline-dark ms-2 rounded-pill py-2">Contact Us</NavLink>
                     </div>
            </div>
        </div>
      </section>
    </div>
  );
}
