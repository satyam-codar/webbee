import React, { Component } from 'react'

import "./body.css"

export default class Body extends Component {
    render() {
        const mystyle ={

        }
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <img src="temptt/home-restaurant.jpg" alt="home-restaurant" width="100%" />
                    </div>
                    <div className="col-md-6 col-lg-6 p-5" style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6700sPahE8jMcEHJGZ2pwZ9iwacox-R57HA&usqp=CAU")`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                        <div>
                            <h2>A MULTI-CUISINE RESTAURANT FOR A FINE DINING EXPERIENCE IN AHMEDABAD</h2>
                        </div>
                        <div>
                            <p>
                                Here at Temptt, our focus is on the whole experience of enjoying multi-cuisine food and a luxury dining experience. We aim to provide patrons with great food, desserts, service and experience and this philosophy is shared among all our staff. We are a motivated team of health-conscious individuals who are committed to the highest standards of food quality and customer service.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <img src="temptt/home-cafe.jpg" alt="home-cafe" width="100%" />
                    </div>
                    <div className="col-md-6 col-lg-6 p-5" style={{backgroundImage:`url("https://previews.123rf.com/images/porstock/porstock1508/porstock150800070/44251363-coffee-cup-on-wooden-table-background-view-from-above-with-copy-space-.jpg")`, backgroundSize:'covor'}}>
                        <div>
                            <h2>A MULTI-CUISINE RESTAURANT FOR A FINE DINING EXPERIENCE IN AHMEDABAD</h2>
                        </div>
                        <div>
                            <p>
                                Here at Temptt, our focus is on the whole experience of enjoying multi-cuisine food and a luxury dining experience. We aim to provide patrons with great food, desserts, service and experience and this philosophy is shared among all our staff. We are a motivated team of health-conscious individuals who are committed to the highest standards of food quality and customer service.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
