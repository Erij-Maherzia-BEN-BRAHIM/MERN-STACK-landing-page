import React from "react";
import {FaIndustry}from'react-icons/fa'
import {IoBusinessOutline, IoBus, IoLeafSharp, IoSunnySharp}from'react-icons/io5'
export default function Services() {
  return (
    <div>
      <section id="services">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 mb-4 text-center">  Our <b> AWESOME</b> Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
            </div>
                     <div className="row mt-5">
                          <div className="col-md-4">
                                                <div className="card p-3" >

                                                        <div className="card-body text-center">
                                                       < FaIndustry className="mb-4 fa-4x text-warning"></FaIndustry>
                                                    
                                                            <h5 className="card-title mb-3 fs-4 fw-bold">Génie civil industriel</h5>
                                                            <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                            </div>
                                                        </div>
                        </div>
                                            <div className="col-md-4">
                                                    <div className="card p-3" >

                                                            <div className="card-body text-center">
                                                       < IoLeafSharp className="mb-4 fa-4x text-warning"></IoLeafSharp>
                                                               
                                                                <h5 className="card-title mb-3 fs-4 fw-bold">Environnement</h5>
                                                                <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                            
                                                            </div>
                                                        </div>
                                            </div>
                                                    <div className="col-md-4">
                                                            <div className="card p-3" >

                                                                        <div className="card-body text-center">
                                                                            <IoSunnySharp className="fa fa-cogs fa-4x mb-4 text-warning"></IoSunnySharp>
                                                                            <h5 className="card-title mb-3 fs-4 fw-bold">Energie</h5>
                                                                            <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                        
                                                                        </div>
                                                                </div> 
                                                    </div>

                            
         
          
       
                 </div>
                     <div className="row mt-5">
                          <div className="col-md-4">
                                                <div className="card p-3" >

                                                        <div className="card-body text-center">
                                                            <i className="fa fa-cogs fa-4x mb-4 text-warning"></i>
                                                            <h5 className="card-title mb-3 fs-4 fw-bold">Ouvrages fonctionnels</h5>
                                                            <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                            </div>
                                                        </div>
                        </div>
                                            <div className="col-md-4">
                                                    <div className="card p-3" >

                                                            <div className="card-body text-center">
                                                                <IoBusinessOutline className=" fa-4x mb-4 text-warning"></IoBusinessOutline>
                                                                <h5 className="card-title mb-3 fs-4 fw-bold">Logistique</h5>
                                                                <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                            
                                                            </div>
                                                        </div>
                                            </div>
                                                    <div className="col-md-4">
                                                            <div className="card p-3" >

                                                                        <div className="card-body text-center">
                                                                            <IoBus className="fa fa-cogs fa-4x mb-4 text-warning"></IoBus>
                                                                            <h5 className="card-title mb-3 fs-4 fw-bold">Transport</h5>
                                                                            <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                        
                                                                        </div>
                                                                </div> 
                                                    </div>

                            
         
          
       
                 </div>
          </div>
      </section>
   
    </div>
  );
}
