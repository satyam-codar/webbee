import React from 'react';
import './Menucomponent.css';

function Menucomponent() {
    return (
        <div>
        <div className="page-header">
                <figure className='thumbnail'>
                    <img src="temptt/img-3.jpg"
                        alt="" />
                </figure>
                <div className='cont'> <h1> Menu </h1>
                    <hr />
                    <i class="fas fa-circle cir" style={{ fontSize: "10px" }}></i>
                </div >
            </div>
        <div className='menu2' style={{ backgroundImage: "url(/temptt/backy2.jpg)" }}>
            <div className="container menu1" >
                {/* <hr className='hr1'></hr> */}
                {/* <img src="temptt/menu2.png" alt="" /> */}
                <div className="menu">
                    <div className="container ">
                        <div className="row specialmenu">
                            <div className="col-md-6 col-sm-12  content">
                                <div className="">
                                    <h1>A multi cuisine restaurant for a fine dining</h1>
                                    <p>
                                        Here at Temptt, our focus is on the whole experience
                                        of enjoying multi-cuisine food and a luxury dining experience. We aim to provide patrons with great food, desserts,
                                        service and experience and this philosophy is shared
                                        among all our staff. We are a motivated team of health-conscious individuals who are committed to the highest standards of food quality and customer service.
                                    </p>
                                    <div className="row pricerange">
                                        <div className="col-md-4">
                                            <h4>Small</h4>
                                            <p>300/-</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Medium</h4>
                                            <p>500/-</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Large</h4>
                                            <p>600/-</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 ">
                                <figure>
                                    <img src="./temptt/img-2.jpg" alt="" />
                                </figure>
                            </div>
                            <div className="col-md-6 col-sm-12 ">
                                <figure>
                                    <img src="./temptt/img-1.jpg" alt="" />
                                </figure>
                            </div>
                            <div className="col-md-6 col-sm-12  content">
                                <div className="">
                                    <h1>A multi cuisine restaurant for a fine dining</h1>
                                    <p>
                                        Here at Temptt, our focus is on the whole experience
                                        of enjoying multi-cuisine food and a luxury dining experience. We aim to provide patrons with great food, desserts,
                                        service and experience and this philosophy is shared
                                        among all our staff. We are a motivated team of health-conscious individuals who are committed to the highest standards of food quality and customer service.
                                    </p>
                                    <div className="row pricerange">
                                        <div className="col-md-4">
                                            <h4>Small</h4>
                                            <p>300/-</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Medium</h4>
                                            <p>500/-</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h4>Large</h4>
                                            <p>600/-</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row rowtoppings specialmenu1">
                            <div className="col-md-12">
                                <h1 className="title toppings" style={{ color: "white" }}>Choice of toppings</h1>
                            </div>

                            {/* ------------------------toppings---------------------------- */}
                                <div className="col-md-6 col-sm-12 content1">
                                <div className="">
                                    <figure className="toppingimg">
                                        <img src="./temptt/img-5.jpg" alt="" />
                                    </figure>
                                    <div className="toppingcontent">
                                        <h2>Choose your toppings</h2>
                                        <p>
                                            and experience and this philosophy is shared
                                            among all our staff. We are a motivated team of health-conscious individuals who are committed to the highest standards of food quality and customer service.
                                    </p>
                                        <div className="row pricerange">
                                            <div className="col-md-4">
                                                <h4>Small</h4>
                                                <p>20/-</p>
                                            </div>
                                            <div className="col-md-4">
                                                <h4>Medium</h4>
                                                <p>35/-</p>
                                            </div>
                                            <div className="col-md-4">
                                                <h4>Large</h4>
                                                <p>50/-</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6 col-sm-12 ">
                                <div className="content1">
                                    <figure className="toppingimg">
                                        <img src="./temptt/img-5.jpg" alt="" />
                                    </figure>
                                    <div className="toppingcontent">
                                        <h2>Golden Ingrediants</h2>
                                        <p>
                                            ll our staff. We are a motivated team of health-conscious individuals who are committed to the highest standards of food quality and customer service.
                                    </p>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h4>Small</h4>
                                                <p>20/-</p>
                                            </div>
                                            <div className="col-md-4">
                                                <h4>Medium</h4>
                                                <p>35/-</p>
                                            </div>
                                            <div className="col-md-4">
                                                <h4>Large</h4>
                                                <p>50/-</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="content1">
                                    <figure className="toppingimg">
                                        <img src="./temptt/img-5.jpg" alt="" />
                                    </figure>
                                    <div className="toppingcontent">
                                        <h2>Cheese</h2>
                                        <p>
                                            ll our staff. We are a motivated team of health-conscious individuals who are committed to the highest standards of food quality and customer service.
                                    </p>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-4">
                                                <h4>Small</h4>
                                                <p>20/-</p>
                                            </div>
                                                <div className="col-md-4 col-sm-4">
                                                <h4>Medium</h4>
                                                <p>35/-</p>
                                            </div>
                                                <div className="col-md-4 col-sm-4">
                                                <h4>Large</h4>
                                                <p>50/-</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="content1">
                                    <figure className="toppingimg">
                                        <img src="./temptt/img-5.jpg" alt="" />
                                    </figure>
                                    <div className="toppingcontent">
                                        <h2>Types of Dip</h2>
                                        <p>
                                            Cheese bros <br />
                                            aakra cheese <br />
                                            hoblow <br />
                                        </p>

                                        <h5>20/-</h5>
                                        {/* <div className="row">
                                            <div className="col-md-4">
                                                <h4>Small</h4>
                                                <p>20/-</p>
                                            </div>
                                            <div className="col-md-4">
                                                <h4>Medium</h4>
                                                <p>35/-</p>
                                            </div>
                                            <div className="col-md-4">
                                                <h4>Large</h4>
                                                <p>50/-</p>
                                            </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <hr className='hr2'></hr> */}
        </div>
        </div>
    )
}

export default Menucomponent
