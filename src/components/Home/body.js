import React, { Component } from 'react'

import "./body.css"

export default class Body extends Component {
    render() {
        const mystyle ={

        }
        return (
            <div className="" >
                <div className="row" >
                    <div className="col-md-6 col-lg-6" style={{paddingLeft:"28px", paddingRight:"5px", paddingBottom:"0px"}}>
                        <img src="images/pexels-afta-putta-gunawan-683039.jpg" alt="home-restaurant" style={{opacity:"0.8", maxWidth:"100%", maxHeight:"100%", display:"block"}} />
                    </div>
                    <div className="col-md-6 col-lg-6" style={{backgroundImage:`url(${process.env.PUBLIC_URL +"images/hanxiao-Vj7SryPWsBk-unsplash.jpg"})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',opacity:"0.7"}}>
                        <div>
                            <h2>A MULTI-CUISINE RESTAURANT FOR A FINE DINING EXPERIENCE IN AHMEDABAD</h2>
                        </div>
                        <div>
                            <p style={{color:"black", fontSize:"15px"}}>
                                Here at images, our fouus is on the whole experience of enjoying multi-cuisine food and a luxury dining experience. We aim to provide patrons with great food, desserts, service and experience and this philosophy is shared among all our staff.
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row" >
                    <div className="col-md-6 col-lg-6" style={{paddingLeft:"28px", paddingRight:"5px", paddingBottom:"0px"}}>
                        <img src="images/pexels-kon-karampelas-2526839.jpg" alt="home-restaurant" width="100%" style={{opacity:"0.8"}} />
                    </div>
                    <div className="col-md-6 col-lg-6" style={{backgroundImage:`url(${process.env.PUBLIC_URL +"images/pim-chu-GbKBPkbn4Kg-unsplash.jpg"})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', opacity:"0.8"}}>
                        <div>
                            <h2>A MULTI-CUISINE RESTAURANT FOR A FINE DINING EXPERIENCE IN AHMEDABAD</h2>
                        </div>
                        <div>
                            <p style={{color:"white", fontSize:"15px"}}>
                                Here at images, our focus is on the whole experience of enjoying multi-cuisine food and a luxury dining experience. We aim to provide patrons with great food, desserts, service and experience and this philosophy is shared among all our staff. 
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}
